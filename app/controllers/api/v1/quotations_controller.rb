module Api
  module V1 
    class QuotationsController < ApplicationController
      protect_from_forgery with: :null_session

      def create
        quotation = Quotation.new(quotation_params)
        if quotation.save
          render json: quotation
        else
          render json: {error: quotation.errors.messages}, status: 422
        end
      end

      private

      def quotation_params
        params.require(:quotation).permit(:first_name, :last_name, :phone, 
                                        :email, :product_list, :comment)
      end
    end
  end
end
