class Customer < ActiveRecord::Base

  # Presence
  validates :name, presence: true

  # Length
  # validates :name, length: { minimum: 2 }
  # validates :name, length: { maximum: 8 }
  # validates :name, length: {in: 2..8}

  # Uniqueness
  validates :name, uniqueness: true



end
