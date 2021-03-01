module Mutations
  class AddContact < Mutations::BaseMutation
    argument :params, Types::Input::ContactInputType, required: true

    field :contact, Types::ContactType, null: false

    def resolve(params:)
      contact_params = Hash params

      begin
        contact = Contact.create!(contact_params)

        {contact: contact}
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
        " #{e.record.errors.full_messages.join(', ')}")
      else
        
      end
    end
  end
end