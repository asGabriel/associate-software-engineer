import { events } from "./mock.js";

const eventsFilteredPerYear = events.reduce(
    (sum, value) => {
        const year = value.data.getFullYear();
        sum[year] = (sum[year] || 0) + 1;
        return sum
    }, {}
)

console.log(eventsFilteredPerYear)
