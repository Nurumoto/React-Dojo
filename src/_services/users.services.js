import { authHeader } from '../_helpers';
const api = "http://localhost:8000"
export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    const data = {
        created_at: "2021-01-10T11:19:57.000000Z",
        email: "sharapenkovivan@gmail.com",
        email_verified_at: null,
        full_name: "Ivan Sharapenkov",
        id: 2,
        phone: "123456798",
        updated_at: "2021-01-10T11:19:57.000000Z"
    }
    localStorage.setItem('user', JSON.stringify(data));
    return fetch(`${api}/api/user-login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            console.log('user', user.status)
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            if(user.status === 200){
                localStorage.setItem('user', JSON.stringify(user.data));
                return user;
            }
            else if(user.status === "failed"){
                return user;
            }

            // return user;
        }).catch(function() {
            console.log("error");
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${api}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${api}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    console.log('user---------------------', user);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${api}/api/user-signup`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${api}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${api}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}