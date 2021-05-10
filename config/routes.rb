Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
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
