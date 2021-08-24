class ApplicationController < ActionController::Base
    before_action :configure_permitted_parameters, if: :devise_controller?

    protected
    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :hpd, :active, :rest])
        devise_parameter_sanitizer.permit(:account_update, keys: [:name, :hpd, :active, :rest])
    end
end
