class RestaurantsController < ApplicationController
    def index 
        restaurants = Restaurant.all 
        render json: restaurants, include: :reviews, status: :ok
    end

    def show
        restaurant = Restaurant.find_by(id: user_params[:id])
        render json: restaurant, include: :reviews, status: :ok
    end

    def top
        top_restaurants = Restaurant.all.order_by(:stars)
        render json: top_restaurants, status: :ok
    end

    private 
    def user_params
        params.permit(:id, :username, :photo)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end



end
