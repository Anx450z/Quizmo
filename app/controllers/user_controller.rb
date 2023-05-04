class UserController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render json: { message: 'User created successfully' }
    else
      render json: { error: @user.errors.full_messages, status: 500 }
    end
  end

  def update
    @user.update(user_params)
  end

  def destroy
    if @user.destroy(user_params)
      render json: { message: 'User deleted successfully' }
    else
      render json: { error: @user.errors.full_messages, status: 500 }
    end
  end

  def show
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :password_confirmation)
  end
end
