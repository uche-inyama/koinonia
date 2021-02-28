module Types
  module Input
    class ProductInputType < Types::BaseInputObject
      argument :name, String, required: true
      argument :image_url, String, required: true
      argument :description, String, required: true
      argument :partner_id, ID, required: true
    end
  end
end
