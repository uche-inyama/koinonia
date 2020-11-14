class CreateQuotations < ActiveRecord::Migration[6.0]
  def change
    create_table :quotations do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone
      t.string :email
      t.string :product_list
      t.text :comment

      t.timestamps
    end
  end
end
