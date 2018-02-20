import axios from 'axios';

const getMappedUrlFromStore = (httpRequest, store) => {
    let mappedUrl;
    if (httpRequest.mappedUrl) {
      mappedUrl = store.getState().envConfig.get('backendUrl');
    } else {
      throw new Error('Mapped url should be used when making RPC request')
    }
    return mappedUrl;
}

const checkIfRequestIsRPC = (payload) => {
  if (Array.isArray(payload) && payload[0].module && payload[0].action) {
    return true;
  }
  return false
}

export const request = (store) => (next) => (action) => {
    if (action.httpRequest && typeof (action.httpRequest) === 'object') {
        action.status = 'sent';
        next(action);

        let httpRequest = action.httpRequest;
        if (!(httpRequest.url || httpRequest.mappedUrl)) {
          throw new Error('"url" or "mappedUrl" should be specified when making api calls');
        }
        let dataToSend = {};
        if (httpRequest.payload) {
          dataToSend.payload = httpRequest.payload;
        } else {
          dataToSend = {};
        }

        let isRpcRequest = checkIfRequestIsRPC(httpRequest.payload);
        if (httpRequest.withSession) {
          throw new Error('Not implemented exception. Should handle session_id')
        }
        if (httpRequest.withToken) {
          throw new Error('Not implemented exception. Should handle token')
        }

        axios({
            method: isRpcRequest ? 'POST' : action.httpRequest.httpMethod,
            url: isRpcRequest ? getMappedUrlFromStore(httpRequest, store) : httpRequest.url,
            data: JSON.stringify(dataToSend)
        }).then(function (response) {
            action.status = 'received';
            action.result = response.data;
            next(action);
        })
        .catch(function (error) {
            action.status = 'received';
            action.error = error.message;
            next(action);
        });
    }

    next(action);
}
