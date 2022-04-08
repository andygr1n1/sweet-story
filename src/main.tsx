import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { antdConfigProvider } from './antdConfigProvider'
import App from './App'
import './styles/index.scss'

import { ConfigProvider } from 'antd'
import { root$ } from './redux/rootStore'

const root = ReactDOM.createRoot(document.getElementById('root')!)
antdConfigProvider()

root.render(
    <React.StrictMode>
        <ConfigProvider componentSize="large">
            <Provider store={root$}>
                <App />
            </Provider>
        </ConfigProvider>
    </React.StrictMode>,
)
