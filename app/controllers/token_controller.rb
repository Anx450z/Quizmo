class TokenController < ApplicationController
  require 'unique_code'
  before_action :set_counter
  before_action :set_quiz, except: :show_quiz

  def show
    render json: { token_codes: @quiz.tokens }
  end

  def create
    @code = generate_code
    @code.each do |code|
      @quiz.tokens.create(token_params.except(:token_count).merge({ token_code: code }))
    end
  end

  def generate_code
    Array.new(@counter) { UniqueCode.new.generate }
  end

  def show_quiz
    @quiz_taker = Token.find_by(token_code: params[:token_code])
    if @quiz_taker.nil?
      render json:{ error: 'cannot find quiz for this code' }
    else
      render json:{ quiz_id: @quiz_taker.quiz.id, quiz_taker: @quiz_taker}
    end
  end

  private

  def token_params
    params.require(:token).permit(:token_count, :username, :email, :status)
  end

  def set_counter
    @counter = params[:token][:token_count] || 0
  end

  def set_quiz
    @quiz = Quiz.find(params[:quiz_id])
  end
end
