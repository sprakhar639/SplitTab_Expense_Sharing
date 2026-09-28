import express from 'express'
import authRoute from './auth/auth.route.js'
import groupRoute from './groups/group.route.js'
import expenseRoute from './expenses/expense.route.js'
import settlementRoute from './settlements/settlement.route.js'

const app=express()
app.use(express.json())

app.use('/api/auth',authRoute)
app.use('/api/group',groupRoute)
app.use('/api/expense',expenseRoute)
app.use('/api/settlements',settlementRoute)


export default app;