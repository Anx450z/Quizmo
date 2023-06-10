class JsonWebToken
  SECRET_KEY = Rails.application.secret.secret_key_base.to_s

  def self.encode(payload)
    JWT.encode(payload, SECRET_KEY)
  end

  def self.decode(token)
    JWT.decode(token, SECRET_KEY)[0]
  end
end
