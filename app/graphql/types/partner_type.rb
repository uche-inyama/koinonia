module Types
  class PartnerType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :logo_url, String, null: true
    field :slug, String, null: true
  end
end
