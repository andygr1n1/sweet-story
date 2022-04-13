import { ConfigProvider } from 'antd'

export const antdConfigProvider = () => {
    return ConfigProvider.config({
        theme: {
            primaryColor: '#12a7a7',
        },
    })
}
