const reducer = (state, action) => {
    if (action.type === "CLEAR_CART") {
        return { ...state, items: [] };
    }

    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            items: state.items.filter((curElem) => {
                return curElem.id !== action.payload;
            }),
        };
    }

    if (action.type === "INCREMENT") {
        //   we need to find out which items is clicked
        let updatedCart = state.items.map((curElem) => {
            if (curElem.id === action.payload) {
                return { ...curElem, quantity: curElem.quantity + 1 };
            }
            return curElem;
        });
        return { ...state, items: updatedCart };
    }

    if (action.type === "DECREMENT") {
        let updatedCart = state.items.map((curElem) => {
            if (curElem.id === action.payload) {
                return { ...curElem, quantity: curElem.quantity - 1 };
            }
            return curElem;
        }).filter((curElem) => curElem.quantity !== 0);
        return { ...state, items: updatedCart };
    }

    if (action.type === "GET_TOTAL") {
        let { totalItems, totalAmount } = state.items.reduce((accum, curVal) => {
                let { price, quantity } = curVal;
                let updatedTotalAmount = price * quantity;
                accum.totalAmount += updatedTotalAmount;

                accum.totalItems += quantity;
                return accum;
            },
            {
                totalItems: 0,
                totalAmount: 0,
            }
        );
        return { ...state, totalItems, totalAmount };
    }
    return state;
};

export default reducer;