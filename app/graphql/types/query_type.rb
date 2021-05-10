module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end
    # field :fetch_products, resolver: Queries::FetchProducts
    field :fetch_contacts, resolver: Queries::FetchContacts
    field :fetch_contact, resolver: Queries::FetchContact
    field :fetch_Quotations, resolver: Queries::FetchQuotations
    field :fetch_Quotation, resolver: Queries::FetchQuotation
    field :fetch_products, resolver: Queries::FetchProducts
    field :fetch_product, resolver: Queries::FetchProduct
    field :fetch_partner, resolver: Queries::FetchPartner
    field :fetch_partners, resolver: Queries::FetchPartners
  end
end
