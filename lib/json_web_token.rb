class JsonWebToken
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  def self.encode(payload)
    payload[:random_number] = Time.now.to_i + rand(1000)
    JWT.encode(payload, SECRET_KEY)    
  end

  def self.decode(token)
    JWT.decode(token, SECRET_KEY)[0]
  end
end
