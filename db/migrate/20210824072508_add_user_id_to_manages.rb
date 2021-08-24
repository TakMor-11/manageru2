class AddUserIdToManages < ActiveRecord::Migration[6.1]
  def change
    add_column :manages, :user_id, :integer
  end
end
