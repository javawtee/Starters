import types from "../types"

const initialState = {
}

export default function exampleReducer(state = initialState, action) {
    switch (action.type) {
        case types.FAKE_ACTION:
            return {...state, message: action.payload}
        default: 
            return state
    }
}