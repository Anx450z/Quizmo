Rails.application.routes.draw do
  get 'user/create'
  get 'user/update'
  get 'user/destroy'
  get 'user/show'
  root to: 'home#index'
  get '*path', to: 'home#index'

  resources :quiz do
    resources :question, only: %i[create update destroy]
  end

  post '/question/:question_id/option', to: 'option#create'
  patch '/option/:id', to: 'option#update'
  put '/option/:id', to: 'option#update'
  delete '/option/:id', to: 'option#destroy'

  resources :user ,only: %i[create update destroy show]
end
