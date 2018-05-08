require 'net/http'
require 'uri'

class Pokemon < ApplicationRecord
  before_save :sprite_image, :description_body

  belongs_to :user

  validates :name, :user, presence: true

  def parse_json(url)
    # url = "http://pokeapi.co/api/v2/pokemon/151/"
    resp = Net::HTTP.get_response(URI.parse(url))
    buffer = resp.body
    result = JSON.parse(buffer)
    result
  end

  def sprite_image
    if self.name == 'deoxys'
      self.name = 'deoxys-normal'
    end
    info = parse_json("https://pokeapi.co/api/v2/pokemon/#{self.name}/")
    self.sprite = info['sprites']['front_default']
  end

  def description_body
    if self.name == 'deoxys-normal'
      self.name = 'deoxys'
    end
    body = parse_json("https://pokeapi.co/api/v2/pokemon-species/#{self.name}/")
    text = ""
    body['flavor_text_entries'].each do |hash|
      hash.each do |k,v|
        if v.kind_of?(Hash) && v['name'] == "en"
          text << hash['flavor_text']
        end

        break if text.length > 0
      end
    end
    # text = body['flavor_text_entries'][1]['flavor_text']
    self.description = text
  end

end
