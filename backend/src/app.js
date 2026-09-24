import express from 'express'
import userRoute from './auth/auth.route.js'

const app=express()
app.use(express.json())

app.use('/api/user',userRoute)


export default app;