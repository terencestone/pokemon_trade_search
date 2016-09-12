class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :email, null: false
      t.string :location
      t.string :avatar
      t.text   :about
      t.string :IGN
      t.string :showdown_handle
      t.string :TCG_handle
      t.string :favorite_pkmn
      t.integer :trades, default: 0

      t.timestamps
    end
  end
end
