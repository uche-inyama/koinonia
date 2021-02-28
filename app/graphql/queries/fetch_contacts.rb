module Queries
  class FetchContacts < Queries::BaseQuery
    type [Types::ContactType], null: false

    def resolve
      Contact.all.order(created_at: :desc)
    end
  end
end