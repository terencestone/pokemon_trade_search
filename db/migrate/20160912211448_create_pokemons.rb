class CreatePokemons < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemons do |t|
      t.string :name, null: false
      t.text :description
      t.string :sprite
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
