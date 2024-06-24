import express from 'express'


const app = express()


app.get('/',(req,res)=>{
    res.send("asdas")
})
app.get('/api/v1/clasicos', (req, res) =>{
    res.send("rita vino")
})

app.get('/api/v1/clasicos/:id', async (req,res)=>{
    try{
        let ruta = await fetch('https://stephen-king-api.onrender.com/api/books')
        const datos = await ruta.json()
        //console.log(datos)
        const filtrado = datos.data.map((libro)=>{
            const objeto = {
                id: libro.id,
                year : libro.Year,
                title : libro.Title,
                ISBN: libro.ISBN
            }
            return objeto
        })
        console.log(filtrado)
        res.send(datos)
    }
    catch(error){
    }
})

app.listen(3000)