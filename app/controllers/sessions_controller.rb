class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: session_params[:username])
    if @user&.authenticate(session_params[:password])
      login!
      render json: {
        logged_in: true,
        user: {
          username: @user.username,
          email: @user.email
        }
      }
    else
      render json: {
        status: 500,
        error: 'Invalid username or password'
      }
    end
  end

  def is_logged_in?
    if logged_in? && current_user
      render json: {
        is_logged_in: true,
        user: {
          username: current_user.username,
          email: current_user.email
        }
      }
    else
      render json: {
        logged_in: false
      }
    end
  end

  def destroy
    logout!
    render json: {
      status: 200,
      logged_out: true,
      message: 'User was successfully logged out'
    }
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
