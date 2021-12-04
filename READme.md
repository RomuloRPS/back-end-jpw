# Documentação

## Iniciar Software


1. `npm install`
2. Colocar seu mongo db no server.js (pessoa, carro, computador)
3. `npm start`


## API Carros

Modelo:
```
Titulo: String
Autor: String (Filtravel)
Valor: Integer
```

### GET /carro
```
[
    {
        "_id": "609fe1281ea9ac2a84e49012",
        "marca": "Ford",
        "modelo": "Ka",
        "cor": "Vermelho",
        "__v": 0
    },
    ...
]
```

### GET /carro/:id
```
{
    "_id": "609fe1281ea9ac2a84e49012",
    "marca": "Ford",
    "modelo": "Ka",
    "cor": "Vermelho",
    "__v": 0
}
```

### POST /carro
Body:
```
{
    "marca": "Ford",
    "modelo": "Ka",
    "cor": "Vermelho",
}
```

Output:
```
{
    "_id": "609fe1281ea9ac2a84e49012",
    "marca": "Ford",
    "modelo": "Ka",
    "cor": "Vermelho",
    "__v": 0
}
```

### PUT /carro/:id
Body:
```
{
    "marca": "Ford",
    "modelo": "Ka",
    "cor": "Vermelho",
}
```

Output:
```
{
    "_id": "609fe1281ea9ac2a84e49012",
    "marca": "Ford",
    "modelo": "Ka",
    "cor": "Vermelho",
    "__v": 0
}
```

### DELETE /carro/:id
```
{
    "Mensagem": "Carro deletado com sucesso"
}
```


## API Pessoas

Modelo:
```
Nome: String (Filtravel)
Idade: Integer
```

### GET /pessoa
```
[
    {
        "_id": "609fe4eeca4fea2af4c0c81a",
        "nome": "Roger",
        "idade": 21,
        "__v": 0
    },
    ...
]
```

### GET /pessoa/:id
```
{
    "_id": "609fe4eeca4fea2af4c0c81a",
    "nome": "Roger",
    "idade": 21,
    "__v": 0
}
```

### POST /pessoa
Body:
```
{
    "nome": "Roger",
    "idade": 21
}
```

Output:
```
{
    "_id": "609fe4eeca4fea2af4c0c81a",
    "nome": "Roger",
    "idade": 21,
    "__v": 0
}
```

### PUT /pessoa/:id
Body:
```
{
    "nome": "Roger",
    "idade": 21
}
```

Output:
```
{
    "_id": "609fe4eeca4fea2af4c0c81a",
    "nome": "Roger",
    "idade": 21,
    "__v": 0
}
```

### DELETE /pessoa/:id
```
{
    "Mensagem": "Pessoa deletada com sucesso"
}
```

## API Computadores

Modelo:
```
Nome: String (Filtravel)
Valor: Integer 
```

### GET /computadors
```
[
    {
        "_id": "609ff7d0ebc9d30c78763c1d",
        "nome": "Dell",
        "valor": "1000",
        "__v": 0
    },
    ...
]
```

### GET /computadors/:id
```
{
    "_id": "609ff7d0ebc9d30c78763c1d",
    "nome": "Dell",
    "valor": "1000",
    "__v": 0
}
```

### POST /computadors
Body:
```
{
    "nome": "Dell",
    "valor": "1000",
}
```

Output:
```
{
    "_id": "609ff7d0ebc9d30c78763c1d",
    "nome": "Dell",
    "valor": "1000",
    "__v": 0
}
```

### PUT /computadors/:id
Body:
```
{
    "nome": "Dell",
    "valor": "1000",
}
```

Output:
```
{
    "_id": "609ff7d0ebc9d30c78763c1d",
    "nome": "Dell",
    "valor": "1000",
    "__v": 0
}
```

### DELETE /computadors/:id
```
{
    "Mensagem": "Computador deletado  com sucesso"
}
```