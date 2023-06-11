class TokenController < ApplicationController
  require 'json_web_token'
  before_action :set_counter

  def generate_tokens
    @all_tokens = []
    @counter.times do 

      @all_tokens << JsonWebToken.encode({quiz_id: token_create_params[:id]})
    end
    render json: {tokens: @all_tokens}
  end

  def get_quiz
    @quiz_id = JsonWebToken.decode(token_prams[:token])[:id]
    render json: {quiz_id: @quiz_id}
  end

  private

  def token_prams 
    params.permit(:token_count, :quiz_id, :id, :token)
  end

  def token_create_params
    params.permit(:quiz_id, :id)
  end

  def set_counter
    @counter = params[:token_count] || 0
  end
end
