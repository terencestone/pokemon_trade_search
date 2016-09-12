class User < ApplicationRecord
  has_many :pokemons

  has_secure_password

  validates :username, :email, presence: true, uniqueness: true
  validates :email, format: { with: /\A\w+@\w+[.]\w+\z/, message: "is not a valid format." }
  validates :password, length: { minimum: 6 }
end
