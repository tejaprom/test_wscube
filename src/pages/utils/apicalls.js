import { fetchCall, fetchNoCall, fetchLoginCall } from './ajax';
import { API_CONSTANTS, API_METHODS } from './api-constants';


export const ContactUsForm = (callback, payload) => {
    const url = `${API_CONSTANTS.CONTACT_US_FORM}`;
    return fetchCall((response) => {
        callback(response);
    }, url, API_METHODS.POST, payload);
};