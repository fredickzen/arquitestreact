export const HomeReducerInitialValue = {
    loading: false,
    stringResponse: null
}
export const HomeReducer = (state, action) => {
    switch (action.type) {
        case 'loading':
            return { ...state, stringResponse: "Cargando...", loading: true };
        case 'saved':
            const stringResponse = JSON.stringify(action.payload)
            return { ...state, stringResponse, loading: false };
        default:
            throw new Error();
    }
}