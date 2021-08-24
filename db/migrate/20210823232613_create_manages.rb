class CreateManages < ActiveRecord::Migration[6.1]
  def change
    create_table :manages do |t|
      t.string :task
      t.date :due
      t.bigint :totaltime
      t.integer :hurry

      t.timestamps
    end
  end
end
