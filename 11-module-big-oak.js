const house = ["door", "roof"];
const street = ["pavement", "a lane"];

const dataStore = {
  "food caches": [house, street],
};

export const bigOak = {
  readStorage: function (string, callback) {
    return callback(dataStore[string]);
  },
};
