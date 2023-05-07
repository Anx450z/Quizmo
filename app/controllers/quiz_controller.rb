class QuizController < ApplicationController
  before_action :set_quiz, only: %i[show update destroy]

  def index
    @quizzes = current_user.quizzes
    render json: { quizzes: @quizzes }
  end

  def create
    @quiz = current_user.quizzes.new(quiz_params)
    if @quiz.save
      render json: { message: 'Quiz created' }
    else
      render json: { status: :unprocessable_entity, error: 'Couldn\'t create quiz'}
    end
  end

  def show
    render json: { quiz: @quiz, questions: @quiz.questions_with_options}
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
    @quiz = current_user.quizzes.find(params[:id])
  end
end
