Rails.application.routes.draw do
  get 'question/index'
  get 'question/new'
  get 'question/update'
  get 'question/destroy'
  root to: 'home#index' 
  resources :quiz
  
  get '*path', to: 'home#index'
end
