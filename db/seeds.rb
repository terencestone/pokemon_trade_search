glob = User.create(username: "Glob", password: '123456', email: 'glob@glob.com', favorite_pkmn: 'Muk')
tmoney = User.create(username: "T-Money", password: '123456', email: 'tmoney@tmoney.com', favorite_pkmn: 'Gengar', location: "Your mom's house", :IGN => 'T-Money', showdown_handle: 'T-Money180', :TCG_handle => 'T-Money')

pokemon_arr = ["blastoise", "pikachu", "gengar", "mew", "gligar", "dragonite", "garchomp", "greninja", "lucario" ]

pokemon_arr.each do |name|
  pokemon = Pokemon.new(name: name, user: [glob, tmoney].sample)
  pokemon.save
end

