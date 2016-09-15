json.extract! reservation, :id, :user_id, :seat_num, :flight_id, :created_at, :updated_at
json.url reservation_url(reservation, format: :json)