module Queries
  class FetchQuotation < Queries::BaseQuery
    type Types::QuotationType, null: false
    argument :id, ID, required: true
    
    
    def resolve(id:)
      Quotation.find(id)
    rescue ActiveRecord::RecordNotFound => _e
      GraphQL::ExecutionError.new('Contact does not exist.')
    rescue ActiveRecord::Record::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid attributes for #{record.class}:"\
      " #{e.record.errors.full_messages.join(', ')}")
    end
  end
end