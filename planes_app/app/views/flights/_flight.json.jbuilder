json.extract! flight, :id, :flightref, :date, :to, :from, :plane, :created_at, :updated_at
json.url flight_url(flight, format: :json)