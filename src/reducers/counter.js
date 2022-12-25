const initialCounter = 0;

export const counter = (state = initialCounter, action) => {
    switch (action.type) {
        case "DECREMENT": return state - 1;
        case "INCREMENT": return state + action.payload;
        default: return state;
    }
}
