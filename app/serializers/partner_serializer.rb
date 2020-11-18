class PartnerSerializer
  include JSONAPI::Serializer
  attributes :name, :logo_url, :slug

  has_many :products
end
