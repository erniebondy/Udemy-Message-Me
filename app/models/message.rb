class Message < ApplicationRecord
  belongs_to :user
  validates :body, presence: true, length: { minimum: 1, maximum: 255 }

  # -> { ... } is Ruby's stabby lambda syntax :)
  # ChatGPT noticed this was inefficient. It loads all messages and then limits
  # scope :custom_display, -> { order(:created_at).last(20) }
  #
  # We will let the database do the limit
  scope :custom_display, -> { order(created_at: :desc).limit(20) }
end
