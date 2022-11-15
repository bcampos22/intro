import requests
import json

url = 'https://pokeapi.co/api/v2/pokemon/mudkip'

res = requests.get(url)
json = res.json()

for pokemon in json['forms']:
    print(pokemon)
