# API Rest Vehiculos

Ejercicio de API Rest de vehiculos hecho con NodeJS y MongoDB

## Link de heroku

El link de la API Rest en heroku es: <link pendiente>

## Modulos utilizados

Los modulos utilizados para este ejercicio fueron los siguientes:

- express
- mongoose
- dotenv

## Endpoints

- Devuelve todos los vehiculos

```rest
    GET api/vehiculos
```

- Devuelve el vehiculo que contiene el id

```rest
    GET api/vehiculos/find/:id
```

- Devuelve el vehiculo con los parametros de filtro indicados.  
Los parametros de filtro pueden ser marca, modelo, anio, vendido (true o false) o id

```rest
    GET api/vehiculos/find?marca=Ford&modelo=Fiesta
```

- Agrega un nuevo vehiculo segun el body  
El body debe tener obligatoriamente los siguientes parametros:

```json
    {
        "marca": "BMW",
        "modelo" : "M3",
        "anio": 2005,
        "vendido" : false
    }
```

```rest
    POST api/vehiculos
```

- Elimina un vehiculo por id

```rest
    DELETE api/vehiculos/:id
```

- Actualiza un vehiculo con los nuevos datos enviados por el body segun el id

```rest
    PATCH api/vehiculos/:id
```

- Actualiza un vehiculo solo con algunos datos enviados por el body segun id

```rest
    PUT api/vehiculos/:id
```
 