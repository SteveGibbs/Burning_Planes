# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
u1 = User.create :firstname => "John", :lastname => "Doe", :email => "johndoe@gmail.com", :admin => "true", :password => "chicken", :password_confirmation => "chicken"

u2 = User.create :firstname => "Jane", :lastname => "Doe", :email => "janedoe@gmail.com", :admin => "false", :password => "chicken", :password_confirmation => "chicken"

p u1
p u2

Plane.destroy_all

p1 = Plane.create :name => "747", :row => "3", :column => "3"
p2 = Plane.create :name => "737", :row => "4", :column => "4"

p p1
p p2

Flight.destroy_all

f1 = Flight.create :flightref => "QF27", :date => "30 Jan 2000", :to => "MEL", :from => "SYD"

f2 = Flight.create :flightref => "QF20", :date => "31 Jan 2000", :to => "HOB", :from => "SYD"

p f1
p f2


p1.flights << f1
p2.flights << f2
