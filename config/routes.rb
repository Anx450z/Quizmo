Rails.application.routes.draw do
  resources :quiz do
    resources :question, only: %i[create update destroy]
  end

  post '/question/:question_id/option', to: 'option#create'
  patch '/option/:id', to: 'option#update'
  put '/option/:id', to: 'option#update'
  delete '/option/:id', to: 'option#destroy'

  resources :user, only: %i[create update destroy show]

  post '/login', to: 'sessions#create'
  get '/is_logged_in', to: 'sessions#is_logged_in?'
  delete '/logout', to: 'sessions#destroy'

  # below routes have to place at the bottom
  root to: 'home#index'
  get '*path', to: 'home#index'
end
