class User < ApplicationRecord
  has_secured_password
  validate_presence_of :username, uniqueness: true, length: {minimum:4, maximum:30}
  validate_presence_of :email, uniqueness: true, length: {minimum:6, maximum:30}
  before_save :downcase_email

  private

  def downcase_email
    self.email.downcase!
  end
end
