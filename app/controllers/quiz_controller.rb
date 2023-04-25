class QuizController < ApplicationController
  before_action :set_quiz, only: %i[show update destroy]

  def index
    @quizzes = Quiz.all
    render json: { message: 'Your quizzes retrieved successfully!', quizzes: @quizzes }
  end

  def new
    @quiz = Quiz.new
  end

  def create
    @quiz = Quiz.new(quiz_params)
    if @quiz.save
      render json: { message: 'success' }
    else
      render json: { status: :unprocessable_entity }
    end
  end

  def show
    render json: { quiz: @quiz }
  end

  def update
    @quiz.update(quiz_params)
  end

  def destroy
    render json: { message: 'success' } if @quiz.destroy
  end

  private

  def quiz_params
    params.require(:quiz).permit(:title, :description)
  end

  def set_quiz
    @quiz = Quiz.find(params[:id])
  end
end
