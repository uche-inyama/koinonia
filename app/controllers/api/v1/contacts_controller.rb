module Api
  module V1 
    class ContactsController < ApplicationController
      protect_from_forgery with: :null_session

      def create
        contact = Contact.new(contact_params)
        if contact.save
          render json: contact
        else 
          render json: {error: contact.errors.messages}, status: 422
        end
      end
      private

      def contact_params
        params.require(:contact).permit(:name, :email, :subject, :message)
      end
    end
  end
end
