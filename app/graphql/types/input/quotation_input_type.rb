module Types
  module Input
    class QuotationInputTypes < Types::BaseObject
      argument :first_name, String, required: true
      argument :last_name, String, required: true
      argument :phone, String, required: true
      argument :email, String, required: true
      argument :product_list, String, required: true
      argument :comment, String, required: true
    end
  end
end
