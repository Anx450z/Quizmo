Rails.application.routes.draw do
  resources :quiz do
    resources :question
  end
  
  root to: 'home#index'
  get '*path', to: 'home#index'
end
