const promiseMiddleware = (store) => (next) => (action) => {
  if (isPromise(action.payload)) {
    store.dispatch({
      type: action.type + "_LOADING",
    });

    action.payload.then(
      (res) => {
        store.dispatch({
          type: action.type,
          payload: res,
        });
      },
      (error) => {
        store.dispatch({
          type: action.type + "_ERROR",
          payload: error.message.split(":").splice(1).join(":").trim(),
        });
      }
    );

    return;
  }

  next(action);
};

function isPromise(v) {
  return v && typeof v.then === "function";
}

export default promiseMiddleware;
