class RestaurantsController < ApplicationController
    require "uri"
    require "net/http"

    def index 
        restaurants = Restaurant.all 
        render json: restaurants, include: :reviews, status: :ok
    end

    def show
        restaurant = Restaurant.find_by(id: user_params[:id])
        render json: restaurant, include: :reviews, status: :ok
    end

    def top
        top_restaurants = Restaurant.all.order(:ratings).take(5)
        render json: top_restaurants, status: :ok
    end

    def all_locations 
        cordinates = Restaurant.select(:id, :name, :lat, :long, :image)
        render json: cordinates, status: :ok
    end

    def test 
        url = URI("https://api.yelp.com/v3/businesses/5W55UFYVTAdPvvo5xH0DbA/reviews")

        https = Net::HTTP.new(url.host, url.port)
        https.use_ssl = true

        request = Net::HTTP::Get.new(url)
        request["Authorization"] = "Bearer K5Tf1q8zd_WxP33QLuYUUUUQVH0Y9oMzazd55AD7sbDpcWuJ2ZRtywRWBcU0QASrt9y-TQ7Ds8AqqMDPFbMqbauh6knSftNgqNRSC-8ilkyYZynrG3CyvBxdKaOhX3Yx"

        response = https.request(request)
        render json: response.read_body, status: :ok
    end

    def business
        url = URI("https://api.yelp.com/v3/businesses/5W55UFYVTAdPvvo5xH0DbA")

        https = Net::HTTP.new(url.host, url.port)
        https.use_ssl = true

        request = Net::HTTP::Get.new(url)
        request["Authorization"] = "Bearer K5Tf1q8zd_WxP33QLuYUUUUQVH0Y9oMzazd55AD7sbDpcWuJ2ZRtywRWBcU0QASrt9y-TQ7Ds8AqqMDPFbMqbauh6knSftNgqNRSC-8ilkyYZynrG3CyvBxdKaOhX3Yx"

        response = https.request(request)
        render json: response.read_body, status: :ok
    end

    private 
    def user_params
        params.permit(:id, :username, :photo)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end
end
