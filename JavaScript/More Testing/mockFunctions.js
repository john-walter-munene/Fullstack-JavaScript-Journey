import axios from 'axios';

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}

export default Users;

// Using a mock function

function forEach(items, callback) {
    for(const item of items) {
        callback(item)
    }
};

export { forEach, Users };