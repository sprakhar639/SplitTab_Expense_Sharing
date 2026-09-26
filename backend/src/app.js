import express from 'express'
import authRoute from './auth/auth.route.js'
import groupRoute from './groups/group.route.js'
import expenseRoute from './expenses/expense.route.js'

const app=express()
app.use(express.json())

app.use('/api/auth',authRoute)
app.use('/api/group',groupRoute)
app.use('/api/expense',expenseRoute)


export default app;