import { GET_PROVIDERS, ADD_PROVIDER } from "../actions/providers";

let defaultState = {
  data: [],
  loading: false,
  error: null,
};

const providers = (state = defaultState, action) => {
  switch (action.type) {
    case `${GET_PROVIDERS}_LOADING`:
      return {
        data: state.data,
        loading: true,
        error: null,
      };
    case `${GET_PROVIDERS}`:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    case `${GET_PROVIDERS}_ERROR`:
      return {
        data: [],
        loading: false,
        error: action.payload,
      };
    case `${ADD_PROVIDER}_LOADING`:
      return {
        data: state.data,
        loading: true,
        error: null,
      };
    case `${ADD_PROVIDER}`:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    case `${ADD_PROVIDER}_ERROR`:
      return {
        data: state.data,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default providers;
