class ProductSerializer
  include JSONAPI::Serializer
  attributes :name, :image_url, :description, :partner_id
end
