class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: session[:username])
    if @user&.authenticate(session_params[:password])

      login!
      render json: {
        logged_in: true,
        user: @user
      }
    else
      render json: {
        status: 500,
        error: 'Invalid username or password'
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
