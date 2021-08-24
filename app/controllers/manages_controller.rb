class ManagesController < ApplicationController
    def index
        @manages = Manage.all
    end

    def new
        @manage = Manage.new
    end

    def create
        manage = Manage.new(manage_params)
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
    
    private
    def manage_params
        params.require(:manage).permit(:task, :due, :totaltime, :hurry)
    end
end
