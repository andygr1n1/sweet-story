import { Action } from '@reduxjs/toolkit'
import {
    closeShopMenuViewType,
    toggleShopMenuViewType,
} from '../actions/toggleShopMenuView.action'
import { IReduxAction, IRootState } from '../interfaces'

export const rootState: IRootState = {
    shop_menu_view: false,
}

export const rootReducer = (state = rootState, action: Action) => {
    switch (action.type) {
        case toggleShopMenuViewType:
            return { ...state, shop_menu_view: !state.shop_menu_view }
        case closeShopMenuViewType:
            return { ...state, shop_menu_view: false }
        default:
            return state
    }
}
