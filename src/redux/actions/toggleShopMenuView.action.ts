import { IReduxAction } from '../interfaces'

export const toggleShopMenuViewType = 'shopMenu/toggleView'
export const toggleShopMenuViewPayload = 'toggleShopMenuView'

export const toggleShopMenuView = (text: string): IReduxAction => {
    return {
        type: toggleShopMenuViewType,
        payload: text,
    }
}

export const closeShopMenuViewType = 'shopMenu/closeView'
export const closeShopMenuViewPayload = 'closeShopMenuView'

export const closeShopMenuView = (text: string): IReduxAction => {
    return {
        type: closeShopMenuViewType,
        payload: text,
    }
}
