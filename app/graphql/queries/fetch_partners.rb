module Queries
  class FetchPartners < Queries::BaseQuery
    type [Types::PartnerType], null: false

    def resolve
      Partner.all.order(created_at: :desc)
    end 
  end
end