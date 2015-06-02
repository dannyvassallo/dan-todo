Rails.application.routes.draw do

  devise_for :users, only: [:sessions, :passwords, :confirmations]
  resources :users, only: [:show]

  resources :lists do
    resources :items, only: [:create, :destroy]
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create], format: false, defaults: { format: :json }
      resources :lists, except: [:show] do
        resources :items, only: [:create, :destroy]
      end
    end
  end

  root to: 'welcome#index'
end
