function myCounter() {
    let count = 0;
    return {
        increment: function () {
            return ++count;
        },
        decrement: function () {
            return --count;
        },
        reset: function () {
            return count = 0;
        }
    }
}

export const counter = myCounter();