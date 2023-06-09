# frozen_string_literal: true

class QuestionController < ApplicationController
  before_action :set_quiz, only: %i[create update destroy]
  before_action :set_question, only: %i[update destroy]

  def create
    question = @quiz.questions.new(question_params)
    return if question.save

    render json: { error: 'error creating new question' }
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
