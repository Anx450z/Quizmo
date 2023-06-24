class AddTypeToQuizSetting < ActiveRecord::Migration[7.0]
  def change
    add_column :quiz_settings, :quiz_type, :integer, default: 0
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
