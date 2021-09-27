# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require_relative '../db/resdata.json'
require 'faker'

puts "Deleting old stuff..."
    Restaurant.destroy_all
    User.destroy_all
    Review.destroy_all

    puts "🌱 Seeding users..."
    30.times do 
        User.create!(username: Faker::Name.unique.name, photo: "https://1.bp.blogspot.com/-Wd9-K1sP7QY/XIsn37QQ1KI/AAAAAAAAn5Y/1TdnrOvKXVg64sxomo0kM0OtmdVgRkvdgCLcBGAs/s1600/african_restaurant.jpg", password_digest: "password")
    end

    puts "🌱 Seeding restaurants..."

    30.times do |index|
        Restaurant.create!(
        name: "my_restaurant",
        street: "123 Main St",
        city: "New York",
        state: "NY", 
        zip: "10457", 
        lat: "100", 
        long: "100", 
        rating: "10",
        image: "https://1.bp.blogspot.com/-Wd9-K1sP7QY/XIsn37QQ1KI/AAAAAAAAn5Y/1TdnrOvKXVg64sxomo0kM0OtmdVgRkvdgCLcBGAs/s1600/african_restaurant.jpg"
    )
    end 

    puts "🌱 Seeding reviews..."
    200.times do | index|
        Review.create!(user_id: User.ids.sample, restaurant_id: Restaurant.ids.sample, remarks: Faker::Lorem.paragraph
        )
    end


puts "✅ Done seeding!"


