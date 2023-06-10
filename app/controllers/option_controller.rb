# frozen_string_literal: true

class OptionController < ApplicationController
  before_action :set_option, only: %i[update destroy]
  before_action :set_question, only: [:create]

  def create
    @question.options.create(option_params)
  end

  def update
    @option.update(option_params)
  end

  def destroy
    @option.destroy
  end

  private

  def set_question
    @question = Question.find(params[:question_id])
  end

  def set_option
    @option = Option.find(params[:id])
  end

  def option_params
    params.require(:option).permit(:option_text, :correct, :question_id)
  end
end
