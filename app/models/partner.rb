class Partner < ApplicationRecord
  has_many :products

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end
end