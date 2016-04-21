class Order < ActiveRecord::Base
  belongs_to :customer

  # Numericality
  # validates :value, numericality: true
  # validates :value, numericality: { only_integer: true }

  validate :active_customer, on: :create

  def active_customer
    errors.add(:customer_id, 'is not active') unless customer.active?
  end

end
