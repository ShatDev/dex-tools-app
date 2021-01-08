const GET_PROVIDERS = "GET_PROVIDERS";
const ADD_PROVIDER = "ADD_PROVIDER";

const getProviders = (state) => ({
  type: GET_PROVIDERS,
  payload: state,
});

const addProvider = (state) => ({
  type: ADD_PROVIDER,
  payload: state,
});

export { GET_PROVIDERS, ADD_PROVIDER, getProviders, addProvider };
