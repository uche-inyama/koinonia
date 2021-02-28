module Queries
  class FetchPartner < Queries::BaseQuery
    type Types::PartnerType, null: false
    argument :id, ID, required: true

    def resolve(id:)
      Partner.find(id)
    rescue ActiveRecord::RecordNotFound => _e
      GraphQL::ExecutionError.new('Product does not exist.')
    rescue ActiveRecord::Record::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid attributes for #{record.class}:"\
      " #{e.record.errors.full_messages.join(', ')}")
    end
  end
end