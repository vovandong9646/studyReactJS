import axios from 'axios';

export default function callApi(method="get", resource, data) {
    return axios({
        method: method,
        url: `http://5a59baf3bc6e340012a0375c.mockapi.io/api/${resource}`,
        data : data
      }).catch(err=>{
        console.log(err);
      });
};
