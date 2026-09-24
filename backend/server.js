import app from './src/app.js'
import connectDB from './src/db/db.js'

async function startServer(){
    connectDB();

    app.listen(3000,()=>{
        console.log("Server running on Port 3000")
    })
}

startServer()