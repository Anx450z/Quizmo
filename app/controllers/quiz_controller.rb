class QuizController < ApplicationController
  before_action :set_quiz, only: %i[show update destroy score increment_attempts]
  before_action :increment_attempts, only: :score
  before_action :set_preview_quiz, only: :preview

  def index
    @quizzes = current_user.quizzes
    render json: { quizzes: @quizzes }
  end

  def create
    @quiz = Quiz.create(quiz_params)
    if @quiz.save
      Score.create!(quiz: @quiz, user: current_user)
      render json: { message: 'Quiz created' }
    else
      render json: { status: :unprocessable_entity, error: 'Couldn\'t create quiz' }
    end
  end

  def show
    render json: { quiz: @quiz, questions: @quiz.questions_with_options }
  end

  def score
    render json: { score: @quiz.quiz_score }
  end

  def preview
    render json: { quiz: @quiz, questions: @quiz.test_questions, quiz_setting: @quiz.quiz_setting }
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

  def set_preview_quiz
    @quiz = Quiz.find(params[:id])
  end

  def increment_attempts
    @quiz.increment!(:attempts)
    @quiz.save
  end
end
