import axios from "axios";

const forEach = (items, callback) => {
    for (let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
    return items;
}

const newForEach = (items, callback) => {
    for (let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
}

const fetchData = async () => {
    const results = await axios.get('https://www.youtube.com/watch?v=ajiAl5UNzBU&t=3024s&ab_channel=LaithAcademy');
    return results.data;
};

export { forEach, newForEach, fetchData };