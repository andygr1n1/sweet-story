import sweetLogo from '../images/sweet_logo.svg'
import {
    toggleShopMenuView,
    toggleShopMenuViewPayload,
} from '../redux/actions/toggleShopMenuView.action'
import { root$ } from '../redux/rootStore'

export const TopNav: React.FC = () => {
    const rootStore = root$

    const onClick = () => {
        rootStore.dispatch(toggleShopMenuView(toggleShopMenuViewPayload))
    }

    return (
        <div className="font-bold tw-py-4 tw-px-10 tw-flex tw-justify-between tw-bg-gray-900">
            <div className="tw-flex tw-gap-2 tw-items-center">
                <img src={sweetLogo} className="tw-h-12 tw-w-12" />
                <span className="tw-text-emerald-400  tw-text-4xl tw-font-caveat tw-select-none">
                    Sweet Story
                </span>
            </div>

            <div className="tw-flex tw-items-center h-full">
                <span
                    onClick={onClick}
                    className="material-icons-round tw-text-white !tw-text-3xl hover:tw-text-emerald-400 tw-cursor-pointer tw-transition-colors tw-select-none">
                    shopping_cart
                </span>
            </div>
        </div>
    )
}
