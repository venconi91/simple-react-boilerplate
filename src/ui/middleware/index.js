import axios from 'axios';

const getMappedUrlFromStore = (httpRequest, store) => {
    // TODO: implement this
    return '';
}

export const request = (store) => (next) => (action) => {
    if (action.httpRequest && typeof (action.httpRequest) === 'object') {
        action.status = 'sent';
        next(action);

        let httpRequest = action.httpRequest;
        let isRpcRequest = httpRequest.module && httpRequest.action;

        axios({
            method: isRpcRequest ? 'POST' : action.httpRequest.httpMethod,
            url: isRpcRequest ? getMappedUrlFromStore(action.httpRequest, store) : httpRequest.url,
            data: {

            }
        }).then(function (response) {
            action.status = 'received';
            action.result = response.data;
            next(action);
        })
        .catch(function (error) {
            action.status = 'received';
            action.error = error;
            next(action);
        });
    }

    next(action);
}
