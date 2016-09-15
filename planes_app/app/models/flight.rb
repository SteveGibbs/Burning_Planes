class Flight < ActiveRecord::Base

  # has_many :reservations
  belongs_to :plane
  has_many :users, through: :reservations
end
