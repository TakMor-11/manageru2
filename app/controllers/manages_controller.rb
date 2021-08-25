class ManagesController < ApplicationController

    before_action :authenticate_user!

    def start
        @manages = Manage.all
    end

    def index
        @manages = Manage.all
    end

    def new
        @manage = Manage.new
    end

    def create
        manage = Manage.new(manage_params)
        manage.user_id = current_user.id
        if manage.save
            redirect_to :action => "index"
        else
            redirect_to :action => "new"
        end
    end

    def show
        @manage = Manage.find(params[:id])
    end

    def edit
        @manage = Manage.find(params[:id])
    end

    def update
        manage = Manage.find(params[:id])
        if manage.update(manage_params)
            redirect_to :action => "show", :id => manage.id
        else
            redirect_to :action => "new"
        end
    end

    def destroy
        manage = Manage.find(params[:id])
        manage.destroy
        redirect_to action: :index
    end
    
    private
    def manage_params
        params.require(:manage).permit(:task, :due, :totaltime, :hurry)
    end
end
