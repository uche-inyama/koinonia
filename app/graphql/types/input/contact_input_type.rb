module Types
  module Input
    class ContactInputType < Types::BaseInputObject
      argument :name, String, required: true
      argument :email, String, required: true
      argument :subject, String, required: true
      argument :message, String, required: true
    end
  end
end