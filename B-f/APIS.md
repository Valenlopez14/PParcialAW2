# ACTIVIDAD

Nos encargan una api que conbine 2 apis.

La prier api es de los libros de Steaphen King:
https://stephen-king-api.onrender.com/api/books

la segunda API es de vinos argentinos:
localhost:5500/api/v1/vinos

La idea es que a cada libro se le asigne de manera aleatoria en cada consulta la recomendación de un vino.

La api resultante contendrá los datos de los libros, adeás de campos adicionales que serán los datos de un vino de manera random:

```json
{
    "id": 1,
    "Year": 1974,
    "Title": "Carrie",
    "ISBN": "978-0-385-08695-0",
    "vino":{
        "tipo_uva": "Malbec",
        "provincia": "Mendoza",
        "centimetros_cubicos": 750,
        "bodega": "Bodega Catena Zapata",
        "nombre_vino": "Catena Zapata Malbec"
    }
}
```

## Rutas

GET /api/v1/clasicos
GET /api/v1/clasicos/{id}