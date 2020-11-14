class ContactSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :subject, :message
end
