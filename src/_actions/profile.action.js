import { profileConstants } from '../_constants';
import { profileService } from '../_services';
// import { alertActions } from './';
import { history } from '../_helpers';

export const profileActions = {
    create
};

function create(profile) {
    return dispatch => {
        dispatch(request(profile));

        profileService.create(profile)
            .then(
                profile => { 
                    dispatch(success());
                    history.push('/projects');
                    // dispatch(alertActions.success('Profile successful registered!'));
                    console.log('profile', profile)
                },
                error => {
                    console.log('profile', profile)
                    history.push('/projects');
                    // dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(profile) { return { type: profileConstants.CREATE_REQUEST, profile } }
    function success(profile) { return { type: profileConstants.CREATE_SUCCESS, profile } }
    // function failure(error) { return { type: profileConstants.CREATE_FAILURE, error } }
}