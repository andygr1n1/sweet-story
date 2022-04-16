// import { IReduxAction } from '../interfaces'
import { Action } from '@reduxjs/toolkit';

export const toggleShopMenuViewType = 'shopMenu/toggleView'
export const toggleShopMenuViewPayload = 'toggleShopMenuView'

export const toggleShopMenuView = (text: string): Action => {
    return {
        type: toggleShopMenuViewType,
        // payload: text,
    }
}

export const closeShopMenuViewType = 'shopMenu/closeView'
export const closeShopMenuViewPayload = 'closeShopMenuView'

export const closeShopMenuView = (text: string): Action => {
    return {
        type: closeShopMenuViewType,
        // payload: text,
    }
}
