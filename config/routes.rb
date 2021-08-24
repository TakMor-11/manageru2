Rails.application.routes.draw do
  get 'hello/index' => 'hello#index'
  get 'hello/link' => 'hello#link'
  get 'manages' => 'manages#index'
  get 'manages/new' => 'manages#new'
  post 'manages' => 'manages#create'
  get 'manages/:id' => 'manages#show',as: 'manage'
  patch 'manages/:id' => 'manages#update'
  get 'manages/:id/edit' => 'manages#edit', as:'edit_manage'
  root 'hello#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
