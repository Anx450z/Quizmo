Rails.application.routes.draw do
  # *Quiz Settings routes
  get '/quiz/:quiz_id/setting', to: 'quiz_setting#show'
  post '/quiz/:quiz_id/setting', to: 'quiz_setting#create'
  put '/quiz/:quiz_id/setting', to: 'quiz_setting#update'

  # *Quiz routes
  resources :quiz do
    resources :question, only: %i[create update destroy]
  end
  get '/quiz/:id/preview',  to: 'quiz#preview'
  get 'quiz/:id/score', to: 'quiz#score'

  # *Options Routes
  post '/question/:question_id/option', to: 'option#create'
  patch '/option/:id', to: 'option#update'
  put '/option/:id', to: 'option#update'
  delete '/option/:id', to: 'option#destroy'

  resources :user, only: %i[create update destroy show]

  # *Session routes
  post '/login', to: 'sessions#create'
  get '/is_logged_in', to: 'sessions#is_logged_in?'
  delete '/logout', to: 'sessions#destroy'

  # *Marked_options routes
  post '/marked_option', to: 'marked_option#create'
  delete '/marked_option/delete/:question_id', to: 'marked_option#destroy'

  # *Token routes
  post '/quiz/:quiz_id/generate_tokens', to: 'token#create'
  get '/quiz/:quiz_id/show_tokens', to: 'token#show'
  get '/token/:token_code', to: 'token#show_quiz'

  # *below routes have to place at the bottom
  root to: 'home#index'
  get '*path', to: 'home#index'
end
