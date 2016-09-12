class UsersController < ApplicationController

  def index
  end

  def new
    @user = User.new
    render 'new'
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id
      redirect_to @user
    else
      render 'new'
    end
  end

  def show
    @user = User.find(params[:id])

    render 'show'
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
    def user_params
      params.require(:user).permit(:username, :password, :email, :location, :avatar, :about, :IGN, :showdown_handle, :TCG_handle, :favorite_pkmn)
    end

end
