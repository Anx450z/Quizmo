# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string
#  password_digest :string
#  username        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password
  validates_presence_of :username, uniqueness: true, length: { minimum: 4, maximum: 30 }
  validates_presence_of :email, uniqueness: true, length: { minimum: 6, maximum: 30 }, if: :password_based
  before_save :downcase_email, if: :password_based

  enum :user_type, %i[password_based token_based]

  has_many :scores
  has_many :quizzes, through: :scores
  has_many :marked_options, dependent: :destroy

  private

  def downcase_email
    email.downcase!
  end
end
