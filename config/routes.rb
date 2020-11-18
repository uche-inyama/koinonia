Rails.application.routes.draw do
  root 'pages#index'
  namespace :api do
    namespace :v1 do
      resources :contacts, only: [:create]
      resources :quotations, only: [:create]
      resources :products
      resources :partners, param: :slug
    end
  end
  match '*path', to: 'pages#index', via: :all
end
