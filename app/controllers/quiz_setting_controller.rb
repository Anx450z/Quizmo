class QuizSettingController < ApplicationController

  before_action :set_quiz_setting , only: %i[show update destroy]
  
  def create
    @quiz_setting = QuizSetting.new(quiz_id: quiz_setting_params[:quiz_id])
    unless @quiz_setting.save
      render json: { error: 'count not save quiz settings' }
    end
  end

  def show
    render json: { quiz_setting: @quiz_setting}
  end

  def update
    @quiz_setting.update!(quiz_setting_params)
  end

  def destroy
    @quiz_setting.destroy
  end

  private

  def set_quiz_setting
    @quiz_setting = Quiz.find(quiz_setting_params[:quiz_id]).quiz_setting
    if @quiz_setting.nil?
      create
    end
  end
  
  def quiz_setting_params
    params.permit(:correct_mark, :negative_marking, :negative_mark, :start_time, :end_time, :duration, :quiz_id)
  end
end
