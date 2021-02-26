import { authHeader } from '../_helpers';
const api = "http://localhost:8000"
export const profileService = {
    create
};

function create(profile) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile)
    };
    // return fetch(`${api}/api/profile-create`, requestOptions).then(handleResponse);
    return fetch(`${api}/api/profile-create`, requestOptions).then(handleResponse);
}
function logout() {
    localStorage.removeItem('user');
}
function handleResponse(response) {
    console.log('handleresponse', response)
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}