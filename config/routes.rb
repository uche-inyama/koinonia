Rails.application.routes.draw do
  root 'pages#index'
  namespace :api do
    namespace :v1 do
      resources :contacts, only: [:create]
      resources :quotations, only: [:create]
    end
  end
  match '*path', to: 'pages#index', via: :all
end
