class QuestionController < ApplicationController
  before_action :set_quiz, only: %i[create update destroy]
  before_action :set_question, only: %i[update destroy]

  def create
    question = @quiz.questions.new(question_params)
    if question.save
      render json: { message: 'successfully added new question' }
    else
      render json: { message: 'error creating new question' }
    end
  end

  def update
    @question.update(question_params)
  end

  def destroy
    @question.destroy
  end

  private

  def set_quiz
    @quiz = Quiz.find(params[:quiz_id])
  end

  def set_question
    @question = Question.find(params[:id])
  end

  def question_params
    params.permit(:question, :quiz_id, :id)
  end
end
