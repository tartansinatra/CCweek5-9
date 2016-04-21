class TeamsController < ApplicationController
  
  before_action :load_team, except:[:index, :new, :create]

  def index
    @teams = Team.all
  end

  def new
    @team = Team.new
  end

  def create
    Team.create(team_params)
    redirect_to(teams_path)
  end

  def edit
  end

  def update
    @team.update(team_params)
    redirect_to(teams_path)
  end

  def show
  end

  def destroy
    @team.destroy # Never... ever... ever call `.delete`. Get in good habits now!
    redirect_to(teams_path)
  end

  private
  def team_params
    params.require(:team).permit(:name, :image, :founded, :mascot, :league, :last_position)
  end

  def load_team
    @team = Team.find(params[:id])
  end

end
