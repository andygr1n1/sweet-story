import { Drawer, Empty } from 'antd'
import { useState } from 'react'
import { TopNav } from './components/TopNav'
import sweetLogo from './images/sweet_logo.svg'
import {
    closeShopMenuView,
    closeShopMenuViewPayload,
} from './redux/actions/toggleShopMenuView.action'
import { root$ } from './redux/rootStore'
import { shopMenuView } from './redux/selectors/shopMenuView.selector'

function App() {
    const rootStore = root$

    const { shop_menu_view } = rootStore.getState()

    const onClose = () => {
        rootStore.dispatch(closeShopMenuView(closeShopMenuViewPayload))
    }

    return (
        <>
            <div className="App">
                <TopNav />
            </div>

            <div className="tw-relative  tw-flex tw-flex-auto tw-h-full tw-w-full tw-overflow-x-hidden">
                <Drawer
                    title="Shop"
                    placement="right"
                    onClose={onClose}
                    visible={shopMenuView}
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
