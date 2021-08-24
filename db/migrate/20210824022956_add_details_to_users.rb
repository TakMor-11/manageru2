class AddDetailsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :name, :string
    add_column :users, :hpd, :integer
    add_column :users, :active, :integer
    add_column :users, :rest, :integer
  end
end
