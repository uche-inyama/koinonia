class CreatePartners < ActiveRecord::Migration[6.0]
  def change
    create_table :partners do |t|
      t.string :name
      t.string :logo_url
      t.string :slug

      t.timestamps
    end
  end
end
