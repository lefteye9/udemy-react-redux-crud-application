export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

//アクションを定義してアクションを返す関数。アクションクリエイター

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})
