import React from 'react'
import ReactDOM from 'react-dom/client'
import MealContextProvider from './store/MealsContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<MealContextProvider>
    <App />
    </MealContextProvider>
,
)
