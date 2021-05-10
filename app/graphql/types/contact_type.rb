module Types
  class ContactType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :email, String, null: true
    field :subject, String, null: true
    field :message, String, null: true
  end
end


create_table "contacts", force: :cascade do |t|
  t.string "name"
  t.string "email"
  t.text "subject"
  t.text "message"
  t.datetime "created_at", precision: 6, null: false
  t.datetime "updated_at", precision: 6, null: false
end
