




local PID = {}
PID.__index = PID


function PID.new(Kp, Ki, Kd, setpoint, proportional_on_measurement, sample_time, output_limits, auto_mode, error_map)
    local self = setmetatable({}, PID)

    self.Kp = Kp or 1.0
    self.Ki = Ki or 0.0
    self.Kd = Kd or 0.0
    self.setpoint = setpoint or 0
    self.sample_time = sample_time or 0.01

    self._min_output, self._max_output = nil, nil
    self._auto_mode = auto_mode or true
    self.proportional_on_measurement = proportional_on_measurement or false
    self.error_map = error_map

    self._proportional = 0
    self._integral = 0
    self._derivative = 0

    self._last_time = nil
    self._last_output = nil
    self._last_input = nil

    self.output_limits = {0, 100}
    self:reset()

    return self
end


function PID:_compute_error(input_)
    local error = self.setpoint - input_
    local d_input = input_ - (self._last_input or input_)

    -- Check if must map the error
    if self.error_map ~= nil then
        error = self.error_map(error)
    end

    return error, d_input
end

function PID:run(input_, dt)
    if not self._auto_mode then
        return self._last_output
    end

    local now = tick()
    if dt == nil then
        dt = (now - self._last_time) ~= 0 and (now - self._last_time) or 1e-16
    elseif dt <= 0 then
        error("dt has negative value " .. tostring(dt) .. ", must be positive")
    end
    
    -- Compute error terms
    local error = self.setpoint - input_
    local d_input = input_ - (self._last_input ~= nil and self._last_input or input_)

    -- Check if must map the error
    if self.error_map ~= nil then
        error = self.error_map(error)
    end

    -- Compute the proportional term
    if not self.proportional_on_measurement then
        -- Regular proportional-on-error, simply set the proportional term
        self._proportional = self.Kp * error
    else
        -- Add the proportional error on measurement to error_sum
        self._proportional = self._proportional - self.Kp * d_input
    end

    -- Compute integral and derivative terms
    self._integral = self._integral + self.Ki * error * dt
    self._derivative = -self.Kd * d_input / dt

    -- Compute final output
    local output = self._proportional + self._integral + self._derivative


    -- Keep track of state
    self._last_output = output
    self._last_input = input_
    self._last_time = now
    return output
end

function PID:reset() 
    
    self._proportional = 0
    self._integral = 0
    self._derivative = 0

    self._integral = _clamp(self._integral, self.output_limits)

    self._last_time = tick()
    self._last_output = nil
    self._last_input = nil

end

return PID
