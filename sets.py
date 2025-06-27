a_set = { "a", "b", "c", "a"}

print(a_set)


val = {x for x in 'hallo' if x not in 'll'}
print(val)


a_dict = { 'target': 12, 'non-target': 10, 'target': 9 }
print(list(a_dict))

fcb = { 
    "nombre": "Fútbol Club Barcelona",
    "pais": "España",
    "fundacion": 1899,
    "entrenador": "Hansi Flick",
    "estadio": "Spotify Camp Nou",
    "titulos_liga": 27,
    "titulos_champions": 5
}

print(sorted(fcb)) #Output: ['entrenador', 'estadio', 'fundacion', 'nombre', 'pais', 'titulos_champions', 'titulos_liga']
print(list(fcb)) # ['nombre', 'pais', 'fundacion', 'entrenador', 'estadio', 'titulos_liga', 'titulos_champions']

print(fcb['nombre'])


new_dict = dict([('halo', 'hola'), ('wilkommen', 'bienvenido')])

print(new_dict)#o: {'halo': 'hola', 'wilkommen': 'bienvenido'}

other_dict = {i: i + '!' for i in new_dict}
print(other_dict)

grts = dict(hallo='hola', willkomen='bienvenido' )
print(grts)

telefonnummeer = dict(mikel=2321020333, nico=2324078967)
print(telefonnummeer)


