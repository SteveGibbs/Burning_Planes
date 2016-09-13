# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
u1 = User.create :firstname => "John", :lastname => "Doe", :email => "johndoe@gmail.com", :admin => "true"

u2 = User.create :firstname => "Jane", :lastname => "Doe", :email => "janedoe@gmail.com", :admin => "false"

p u1
p u2

Plane.destroy_all

p1 = Plane.create :name => "747", :row => "B", :column => "3"
p2 = Plane.create :name => "747", :row => "B", :column => "1"

p p1
p p2

Flight.destroy_all

f1 = Flight.create :flightref => "QF27", :date => "30 Jan 2000", :to => "MEL", :from => "SYD", :plane => "747"

f2 = Flight.create :flightref => "QF20", :date => "31 Jan 2000", :to => "HOB", :from => "SYD", :plane => "737"

p f1
p f2
