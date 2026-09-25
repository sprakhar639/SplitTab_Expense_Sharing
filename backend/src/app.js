import express from 'express'
import authRoute from './auth/auth.route.js'
import groupRoute from './groups/group.route.js'

const app=express()
app.use(express.json())

app.use('/api/auth',authRoute)
app.use('/api/group',groupRoute)


export default app;