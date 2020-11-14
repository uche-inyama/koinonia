class QuotationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :phone, :email, :product_list, :comment
end
