import {
    closeShopMenuViewType,
    toggleShopMenuViewType,
} from '../actions/toggleShopMenuView.action'
import { IReduxAction } from '../interfaces'

export const rootState = {
    shop_menu_view: false,
}

export const rootReducer = (state = rootState, action: IReduxAction) => {
    console.log('here!', action.type, state)
    switch (action.type) {
        case toggleShopMenuViewType:
            return { ...state, shop_menu_view: !state.shop_menu_view }
        case closeShopMenuViewType:
            return { ...state, shop_menu_view: false }
        default:
            return state
    }
}
