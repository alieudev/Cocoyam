# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'json'
file = File.read('/Users/alieubaldeh/Development/code/phase5/african_restaurants/db/resdata.json')
rest = JSON.parse(file)

puts "Deleting old stuff..."
    Restaurant.destroy_all
    User.destroy_all
    Review.destroy_all

    puts "🌱 Seeding users..."
    30.times do 
        User.create!(username: Faker::Name.unique.name, photo: "https://1.bp.blogspot.com/-Wd9-K1sP7QY/XIsn37QQ1KI/AAAAAAAAn5Y/1TdnrOvKXVg64sxomo0kM0OtmdVgRkvdgCLcBGAs/s1600/african_restaurant.jpg", password_digest: "password")
    end

    puts "🌱 Seeding restaurants..."

    rest.each do |res|
        Restaurant.create!(
        name: res["name"],
        street: res["location"]["address1"],
        city: res["location"]["city"],
        state: res["location"]["state"], 
        zip: res["location"]["zip_code"], 
        lat: res["coordinates"]["latitude"], 
        long: res["coordinates"]["longitude"], 
        rating: res["rating"],
        image: res["image_url"] )
    end 

    puts "🌱 Seeding reviews..."
    200.times do | index|
        Review.create!(user_id: User.ids.sample, restaurant_id: Restaurant.ids.sample, remarks: Faker::Lorem.paragraph
        )
    end

puts "✅ Done seeding!"
