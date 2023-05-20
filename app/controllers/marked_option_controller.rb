class MarkedOptionController < ApplicationController
  def create
    @marked_option = MarkedOption.find_by(marked_option: marked_option_params[:marked_option])
    if @marked_option.nil?
      @marked_option = MarkedOption.new(marked_option_params.merge({user_id:current_user.id}))
      if @marked_option.save
        render json: {message: 'option saved'}
      else
        render json: {error: 'option was not saved'}
      end
    else
      @marked_option.update(marked_option_params)
      render json: {message: 'option updated'}
    end
  end

  def destroy
  end

  private

  def marked_option_params
    params.require(:select_option).permit(:quiz_id, :question_id, :marked_option)
  end
end
