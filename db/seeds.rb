# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'json'
require "uri"
require "net/http"

# file = File.read('/Users/alieubaldeh/Development/code/phase5/african_restaurants/db/resdata.json')
# rest = JSON.parse(file)

file = File.read('/Users/alieubaldeh/Development/code/phase5/african_restaurants/db/reviews.json')
reviews = JSON.parse(file)

# puts all_res.length()

# rest = []
# all_res.each do |res|
#     rest.push(res) unless rest.include?(res[:id])
# end

# puts rest.length()

puts "Deleting old stuff..."
    # Restaurant.destroy_all
    User.destroy_all
    Review.destroy_all

   

    # puts "🌱 Seeding restaurants..."

    # rest.each do |res|
    #     Restaurant.create!(
    #     yelp_id: res["id"],
    #     name: res["name"],
    #     street: res["location"]["address1"],
    #     city: res["location"]["city"],
    #     state: res["location"]["state"], 
    #     zip: res["location"]["zip_code"], 
    #     lat: res["coordinates"]["latitude"], 
    #     long: res["coordinates"]["longitude"], 
    #     rating: res["rating"],
    #     image: res["image_url"]
    #     )
    # end


    puts "Seeding Reviews"
    reviews.each do |review, idx|
        User.create!(
            username: review["user"]["name"] << [1,2,3,4,5,6].sample,
            user_id: [1,2].sample,
            photo: review["image_url"], 
            password_digest: "password"
        )
        Review.create!(
            name: review["user"]["name"], 
            remarks: review["text"], 
            restaurant_id: review["id"], 
            user_id: User.ids.last, 
            rating: review["rating"],
            image: review["image_url"]
        )
    end


puts "✅ Done seeding!"
