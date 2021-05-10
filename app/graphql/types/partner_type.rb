module Types
  class PartnerType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :logo_url, String, null: true
    field :slug, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
