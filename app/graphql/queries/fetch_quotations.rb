module Queries
  class FetchQuotations < Queries::BaseQuery
    type [Types::QuotationType], null: false

    def resolve
      Quotation.all.order(created_at: :desc)
    end
  end
end