Rails.application.routes.draw do
  resources :users

  root to: 'index#index'
end
