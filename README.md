# Burning Airlines
[Click here to see live Project (hosted on Heroku)](https://gibbsknightfaganplanes.herokuapp.com/)

## Description
General Assembly's famous Burning Airlines project.  A group project to build an airline reservation system with a hard two day deadline.  The seats must be configurable according to plane, the grid system built with Backbone.js, and it must display seats when they are reserved.  

## Designed by
[Andrew Knight](https://github.com/andybluey)
[Steve Gibbs](https://github.com/SteveGibbs)
[Peter Fagan](https://github.com/Peter-Fagan)

## Features

#### Customer

1. Customer navigates from landing page to planes and chooses plane type.  They can then display seat configuration for that plane type which is built with Backbone.js.    
2. Once seat configuration is shown, customer can click on grid to reserve specific seat.
3. Reservation tab shows seat and flight numbers booked.   
4. Secure login and signup.
5. Seat configuration displays over CSS built plane.

#### Admin
1. Edit plane number and seat configuration.  
2. Edit reservation information (seat and flight).
3. Secure login and signup.  

## User instructions
#### Admin login details:
- Email: johndoe@gmail.com
- Password: chicken

#### Customer login:
- Email: janedoe@gmail.com
- Password: chicken

## Technology stack
- [Ruby on Rails](http://guides.rubyonrails.org/)
- [jQuery](https://jquery.com/) library
- bcrypt 3.1.7 for password encryption
- Ruby, JavaScript, HTML5 and CSS3 as programming languages
- [Heroku](https://www.heroku.com/) for cloud deployment
- [Backbone 1.3.3](http://backbonejs.org/)

## Bugs / Issues
- **CSS plane does not display correctly on rescale of screens**
- **Although reservations can be "blacked out/reserved" on screen, this data is not pushed through the database so that this reservation data is saved.  The data of current reservations held has been seeded or edited through the reservations pages separately.  This was a function of the tight deadline and would have been resolved if more time was given.**
- **General improvements in seating displays / showing individual seat view plan / linkages through tables.**
- **Refine edit/destroy functionality for administrator only.  Again a function of tight deadline given.**
