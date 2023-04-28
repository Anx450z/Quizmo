class QuestionController < ApplicationController
  before_action :set_quiz
  
  # def index

  # end

  def new
  end

  def update
  end

  def destroy
  end

  private

  def set_quiz
    @quiz = Quiz.find(params[:quiz_id])
  end

  def question_params
    params.require(:question).permit(:question)
  end
end
