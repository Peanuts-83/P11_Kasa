import logements from "../assets/data/logements.json";

// FETCH simulator
const files = {
    get() {
        // fake fetch
        return logements
    },
}

export default files