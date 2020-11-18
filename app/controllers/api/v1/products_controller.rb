module Api
  module V1
    class ProductsController < ApplicationController
      protect_from_forgery with: :null_session

      def create
        product = Product.new(product_params)

        if product.save
          render json: ProductSerializer.new(product).serializable_hash.to_json
        else
          render json: { error: product.errors.messages }, status: 422
        end
      end

      def update
        product = Product.find(params[:id])

        if product.update(product_params)
          render json: ProductSerializer.new(product).serializable_hash.to_json
        else
          render json: {error: product.errors.messages }, status: 422
        end
      end

      def destroy
        product = Product.find(params[:id])

        if product.destroy
          head :no_content
        else
          render json: { error: product.errors.messages }, status: 422
        end
      end


      private

      def product_params
        params.require(:product).permit(:name, :image_url, :description, :partner_id)
      end
    end
  end
end