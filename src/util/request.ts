import axios from 'axios';

const Request = {
  get: ({ url }: { url: string }): Promise<ServerResponse> => {
    return axios
      .get(url)
      .then((response) => {
        if (response.data.errors) return Promise.reject({ data: { error: response.data.errors } });
        return response;
      })
      .catch((err) => {
				let errors = err?.data?.errors || ['Unexpected error occured'];

				// In case server returns string instead of array, wrap in an array
				if(!Array.isArray(errors)) {
					errors = [errors];
				}

        return Promise.reject(errors);
      });
  },

  post: ({ url, body = {} }: { url: string; body?: object }): Promise<ServerResponse> => {
    return axios
      .post(url, body)
      .then((response) => {
        if (response.data.errors) return Promise.reject({ data: { error: response.data.errors } });
        return response;
      })
      .catch((err) => {
				let errors = err?.data?.errors || ['Unexpected error occured'];

				// In case server returns string instead of array, wrap in an array
				if(!Array.isArray(errors)) {
					errors = [errors];
				}

        return Promise.reject(errors);
      });
  },
};

export default Request;
