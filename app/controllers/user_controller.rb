class UserController < ApplicationController
  def create
    @user = User.new(user_params.merge({ user_type: :password_based }))
    if @user.save
      render json: { message: 'User created successfully' }
    else
      render json: { error: @user.errors.full_messages, status: 500 }
    end
  end

  def update
    @user.update(user_params)
  end

  def create_token_user
    @user = User.new(username: token_user_params[:token_code], user_type: :token_based)
    if @user.save
      render json: { message: 'welcome to the quiz' }
    else
      render json: { error: @user.errors.full_messages, status: 500 }
    end
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

  def token_user_params
    params.require(:token).permit(:token_code)
  end
end
