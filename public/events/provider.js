const config = require("../config");
const { ipcMain } = require("electron");
const models = require("../database/models");
const WebSocket = require("ws");

let store;

ipcMain.handle("getProviders", async () => {
  try {
    return models.Provider.findAll({ raw: true });
  } catch (error) {
    throw error;
  }
});

ipcMain.handle("addProvider", async (event, args) => {
  const url = args[0];
  return new Promise((resolve, reject) => {
    try {
      if (url) {
        const ws = new WebSocket(url);
        const id = Math.floor(Math.random() * 10000);
        var isSuccessful = false;

        ws.on("open", () => {
          var payload = { id, method: "eth_chainId" };
          ws.send(JSON.stringify(payload));
        });

        ws.on("message", async (data) => {
          var response = JSON.parse(data);
          if (response.id == id && response.result) {
            isSuccessful = true;
            const network =
              config.chains[parseInt(response.result, 16)].name || "Unknown";
            ws.close();

            await models.Provider.create({ url, network });
            resolve(await models.Provider.findAll({ raw: true }));
          } else {
            ws.close();
            throw 'Failed to connect to "' + url + '"';
          }
        });
        ws.on("error", (error) => {
          ws.close();
          reject('Failed to connect to "' + url + '"');
        });
        ws.on("close", (error) => {
          if (!isSuccessful) reject('Failed to connect to "' + url + '"');
        });
      } else throw 'Failed to connect to "' + url + '"';
    } catch (error) {
      throw 'Failed to connect to "' + url + '"';
    }
  });
});
