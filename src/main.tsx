import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import App from './App'
import { antdConfigProvider } from './antdConfigProvider'
import { ConfigProvider } from 'antd'

const root = ReactDOM.createRoot(document.getElementById('root')!)
antdConfigProvider()

root.render(
    <React.StrictMode>
        <ConfigProvider componentSize="large">
            <App />
        </ConfigProvider>
    </React.StrictMode>,
)
