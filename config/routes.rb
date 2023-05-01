Rails.application.routes.draw do
  resources :quiz do
    resources :question, only: %i[create update destroy]
  end

  post '/question/:question_id/option', to: 'option#create'
  patch '/question/:question_id/option/:id', to: 'option#update'
  put '/question/:question_id/option/:id', to: 'option#update'
  delete '/option/:id', to: 'option#destroy'

  root to: 'home#index'
  get '*path', to: 'home#index'
end
