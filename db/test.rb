require "uri"
require "net/http"

# url = URI("https://api.yelp.com/v3/businesses/search?location=bronx, ny&term=african restaurants")

# https = Net::HTTP.new(url.host, url.port)
# https.use_ssl = true

# request = Net::HTTP::Get.new(url)
# request["Authorization"] = "Bearer K5Tf1q8zd_WxP33QLuYUUUUQVH0Y9oMzazd55AD7sbDpcWuJ2ZRtywRWBcU0QASrt9y-TQ7Ds8AqqMDPFbMqbauh6knSftNgqNRSC-8ilkyYZynrG3CyvBxdKaOhX3Yx"

# response = https.request(request)
# puts response.read_body

# url = URI("https://api.yelp.com/v3/businesses/RdDcS9FoedxmwTHlNjp9SA/reviews")
# https = Net::HTTP.new(url.host, url.port)
# https.use_ssl = true
# request = Net::HTTP::Get.new(url)
# request["Authorization"] = "Bearer K5Tf1q8zd_WxP33QLuYUUUUQVH0Y9oMzazd55AD7sbDpcWuJ2ZRtywRWBcU0QASrt9y-TQ7Ds8AqqMDPFbMqbauh6knSftNgqNRSC-8ilkyYZynrG3CyvBxdKaOhX3Yx"
# response = https.request(request)
# response = response.read_body
# puts response

def response 
{"reviews": [{"id": "KWa3xMPjo-_6LMW-GEe5vA", "url": "https://www.yelp.com/biz/eazylife-restaurant-and-lounge-the-bronx?adjust_creative=JpdKfokHU6gE_qqoxecpzg&hrid=KWa3xMPjo-_6LMW-GEe5vA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=JpdKfokHU6gE_qqoxecpzg", "text": "My first time ordering from here. I ordered Egusi, moi moi, then Nigerian Jollof\nLet's start with the jollof\nIt tasted like party jollof (if you're African...", "rating": 2, "time_created": "2021-04-19 20:45:40", "user": {"id": "UqlHTO4PxCssCBvMOoCTXg", "profile_url": "https://www.yelp.com/user_details?userid=UqlHTO4PxCssCBvMOoCTXg", "image_url": "https://s3-media4.fl.yelpcdn.com/photo/0W1AKW6fA11x8vO_fCLIPg/o.jpg", "name": "Dana F."}}, {"id": "7Jiif3dAGd36NmF-uPgNFg", "url": "https://www.yelp.com/biz/eazylife-restaurant-and-lounge-the-bronx?adjust_creative=JpdKfokHU6gE_qqoxecpzg&hrid=7Jiif3dAGd36NmF-uPgNFg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=JpdKfokHU6gE_qqoxecpzg", "text": "Restaurant very clean. I can say it looked spotless which surprised me because it is also a location people go to for \"night life\". The food on the other...", "rating": 2, "time_created": "2020-06-18 13:40:56", "user": {"id": "0ARjVcNWk3lixdd7HhhnWg", "profile_url": "https://www.yelp.com/user_details?userid=0ARjVcNWk3lixdd7HhhnWg", "image_url": "https://s3-media3.fl.yelpcdn.com/photo/y7i7mVGK4xvwJat9Fgja6Q/o.jpg", "name": "Jill U."}}, {"id": "N4rFimUi4YHzK0ViTCdapQ", "url": "https://www.yelp.com/biz/eazylife-restaurant-and-lounge-the-bronx?adjust_creative=JpdKfokHU6gE_qqoxecpzg&hrid=N4rFimUi4YHzK0ViTCdapQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=JpdKfokHU6gE_qqoxecpzg", "text": "The food was delivered via Uber Eats piping hot! Which was a definite plus.....I was delighted because that was a sign of freshness! Let's talk about the...", "rating": 4, "time_created": "2020-07-23 19:52:26", "user": {"id": "X_B4QeQMbXEzqM5wH2W_YA", "profile_url": "https://www.yelp.com/user_details?userid=X_B4QeQMbXEzqM5wH2W_YA", "image_url": "https://s3-media4.fl.yelpcdn.com/photo/TLjN4CwCib85_svqboWLxw/o.jpg", "name": "Alexsis A."}}], "total": 8, "possible_languages": ["en"]}

end 

# print(response[:reviews][0][:text])

3.times do |key, value|
    puts"#{key}"
end