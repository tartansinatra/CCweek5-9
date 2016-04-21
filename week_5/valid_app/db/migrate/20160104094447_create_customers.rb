class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name
      t.string :password
      t.integer :age
      t.boolean :active

      t.timestamps null: false
    end
  end
end
