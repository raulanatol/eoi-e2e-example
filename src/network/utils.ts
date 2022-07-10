const noParser = json => json;
const toJSON = response => response.json();
const parse = parser => json => parser(json);

const handleErrors = async (response: any) => {
  if (!response.ok) {
    throw new Error(`Unexpected error: ${response}`);
  }
  return response;
};

const doRequest = async <T>(endpoint: string, method: string, body?: object, parser = noParser): Promise<T> => {
  const request: RequestInit = {
    method,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  if (body) {
    request.body = JSON.stringify(body);
  }

  const url = 'http://localhost:5000' + endpoint;
  return new Promise((resolve, reject) => {
    fetch(url, request)
      .then(handleErrors)
      .then(toJSON)
      .then(parse(parser))
      .then(resolve)
      .catch(err => reject(err));
  });
};

export const doGet = <T>(endpoint: string, parser?, body?: object): Promise<T> =>
  doRequest<T>(endpoint, 'GET', body, parser);
