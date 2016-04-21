class Post < ActiveRecord::Base
  belongs_to :category

  scope :published, -> { where(is_published: true) }

  # The above is the same as the following...
  # def self.published
  #   where(is_published: true)
  # end

  scope :today, -> { where("created_at > ?", Date.yesterday) }
  scope :published_today, -> { published.today }
  scope :after, -> (date) { where("created_at > ?", date) }
  scope :before, -> (date) { where{"created_at < ?", date) }
  

end
