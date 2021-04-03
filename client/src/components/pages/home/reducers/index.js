export const initState = {
    fname: "",
    lname: "",
    email: "",
    college: "",
    subject: "",
    message: "",
    error: "",
    success:""
};

export const reducer = (state = initState, actions) => {
    switch (actions.type) {
        case "SET":
            return {
                ...state,
                ...[actions.payload]
            }
        case "SET_KEY":
            return {
                ...state,
                [actions.key]: actions.value
            }
        case "RESET":
            return {
                ...state,
                ...initState
            }
        default:
            return state;
    }
}
