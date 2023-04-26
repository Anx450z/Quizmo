Rails.application.routes.draw do
  root to: 'home#index' 
  resources :quiz
  
  get '*path', to: 'home#index'
end
