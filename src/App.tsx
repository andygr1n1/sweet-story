import { Drawer, Empty } from 'antd'
import { useState } from 'react'
import { TopNav } from './components/TopNav'
import sweetLogo from './images/sweet_logo.svg'

function App() {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <div className="App">
                <TopNav openShopMenu={() => setVisible(!visible)} />
            </div>

            <div className="tw-relative  tw-flex tw-flex-auto tw-h-full tw-w-full tw-overflow-x-hidden">
                <Drawer
                    title="Shop"
                    placement="right"
                    onClose={() => setVisible(false)}
                    visible={visible}
                    getContainer={false}
                    style={{ position: 'absolute' }}
                    className="!tw-bg-slate-900"
                    maskStyle={{
                        backgroundImage:
                            'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
                    }}>
                    <Empty
                        image={sweetLogo}
                        description="sweet story"
                        className="tw-font-caveat tw-text-3xl absolute-center tw-text-emerald-400 tw-select-none"
                    />
                </Drawer>
            </div>
        </>
    )
}

export default App
