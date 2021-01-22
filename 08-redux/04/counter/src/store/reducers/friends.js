export default function friends(state = [11, 22, 33], action) {
    switch (action.type) {
        case "ADDFRIEND":
            return [...state, action.n || 100];
        case "ASYNCADDFRIEND":
            return [...state, 99];
        default:
            return state;
    }
}
