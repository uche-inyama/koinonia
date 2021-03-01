module Types
  class MutationType < Types::BaseObject
   field :add_contact, mutation: Mutations::AddContact
  end
end
