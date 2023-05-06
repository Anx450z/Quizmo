class ResetAllQuizCacheCounters < ActiveRecord::Migration[7.0]
  def change
    Quiz.all.each do |quiz|
      Quiz.reset_counters(quiz.id, :questions)
    end
  end
end
