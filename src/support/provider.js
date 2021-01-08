const { ipcRenderer } = window.require("electron");

const addProvider = async (url) => {
  return ipcRenderer.invoke("addProvider", [url]);
};

const getProviders = () => {
  return ipcRenderer.invoke("getProviders");
};

export { getProviders, addProvider };
