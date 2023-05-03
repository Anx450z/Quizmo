if Rails.env.production?
  Rails.application.config.session_store :cookie_store, key: '_quizmo', domain: 'quizmo.io'
else
  Rails.application.config.session_store :cookie_store, key: '_quizmo'
end
