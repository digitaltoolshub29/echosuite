const path = require('path')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Serve frontend (Production Mode)
if (process.env.NODE_ENV === 'production') {
  // توجيه السيرفر لمجلد البناء (dist)
  app.use(express.static(path.join(__dirname, '../frontend/dist')))

  // أي رابط آخر غير الـ API، يذهب للصفحة الرئيسية للتطبيق
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'dist', 'index.html')
    )
  )
} else {
  // وضع التطوير
  app.get('/', (req, res) => res.send('Please set to production'))
}

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
