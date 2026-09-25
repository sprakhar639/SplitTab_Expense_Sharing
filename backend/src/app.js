import express from 'express'
import authRoute from './auth/auth.route.js'
import groupRoutes from './groups/group.route.js'

const app=express()
app.use(express.json())

app.use('/api/auth',authRoute)
app.use('/api/group',groupRoutes)


export default app;