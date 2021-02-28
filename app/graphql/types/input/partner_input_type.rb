module Types
  module Input
    class PartnerInputType < Types::BaseInputObject
      argument :name, String, required: true
      argument :logo_url, String, required: true
      argument :slug, String, required: true
    end
  end
end