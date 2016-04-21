class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.references :customer, index: true, foreign_key: true
      t.string :payment_type
      t.string :card_number
      t.decimal :value

      t.timestamps null: false
    end
  end
end
