Rails.application.routes.draw do
  resources :users, only: [:create, :show]
  resources :reviews
  resources :restaurants
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/login", to: "sessions#create" 
  delete "/logout", to: "sessions#destroy"
  get "/me", to:"users#show"
  post "/signup", to: "users#create"
  get "top_restaurants", to: "restaurants#top"
  get "all_locations", to: "restaurants#all_locations"
  get "test", to: "restaurants#test"
  get "business", to: "restaurants#business"
end
