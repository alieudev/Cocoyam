require "uri"
require "net/http"

url = URI("https://api.yelp.com/v3/businesses/search?location=bronx, ny&term=african restaurants")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = "Bearer K5Tf1q8zd_WxP33QLuYUUUUQVH0Y9oMzazd55AD7sbDpcWuJ2ZRtywRWBcU0QASrt9y-TQ7Ds8AqqMDPFbMqbauh6knSftNgqNRSC-8ilkyYZynrG3CyvBxdKaOhX3Yx"

response = https.request(request)
return response.read_body