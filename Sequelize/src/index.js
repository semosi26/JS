import express from "express"
import { sequelize } from "./database/conection.js"


const app = express()

app.use(express.json())

try { // await: asegura que tu código espere hasta que la promesa se resuelva antes de continuar.
    await sequelize.authenticate() // es la función que verifica si la conexión a la base de datos es exitosa o falla
    console.log('DB conected') 
}
catch (error) {
    console.error(error)
}


app.get('/', (req, res) => {
    res.json({message: 'Hello World!'})
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})