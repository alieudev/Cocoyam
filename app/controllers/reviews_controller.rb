class ReviewsController < ApplicationController
    def index 
        reviews = Review.all
        render json: reviews, status: :ok
    end

    def show
        review = Review.find_by(id: review_params[:id])
        render json: review, status: :ok
    end

    def create 
        review = Review.create!(review_params)
        render json: review
    end

    def update
        review = Review.update!(review_params)
        render json: review
    end


    private 
    def review_params
        params.permit(:user_id, :restaurant_id, :remarks)
    end
end
