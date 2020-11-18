module Api
  module V1
    class PartnersController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        partner = Partner.all

        render json: PartnerSerializer.new(partner).serializable_hash.to_json
      end

      def show
        partner = Partner.find_by(slug: params[:slug])

        render json: PartnerSerializer.new(partner, options).serializable_hash.to_json
      end

      def create
        partner = Partner.new(partner_params)

        if partner.save
          render json: PartnerSerializer.new(partner).serializable_hash.to_json
        else
          render json: { error: partner.errors.messages }, status: 422
        end
      end

      def update
        partner = Partner.find_by(slug: params[:slug])

        if partner.update(partner_params)
          render json: PartnerSerializer.new(partner).serializable_hash.to_json
        else
          render json: { error: partner.errors.messages}, status: 422
        end
      end

      def destroy
        partner = Partner.find_by(slug: params[:slug])

        if partner.destroy
          head :no_content 
        else
          render json: { error: partner.errors.messages}, status: 422
        end
      end

      private

      def partner_params
        params.require(:partner).permit(:name, :logo_url)
      end

      def options
        @options ||= { include: %i[products] }
      end
    end
  end
end