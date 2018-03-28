# json.guest @guests, do
#   json.name @guest.name
#   json.age @guest.age
#   json.favorite_color @guest.favorite_color
# end

json.array! @guests do |guest|
  # json.partial! 'api/guests/guest', guest: guest
  next if guest.age < 40 || guest.age > 50
    json.partial! 'api/guests/guest', guest: guest
end
