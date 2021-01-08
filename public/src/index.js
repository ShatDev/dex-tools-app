const config = require("../config");
const Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.WebsocketProvider("ws://msi.local:8546")
);

const main = () => {
  web3.eth
    .subscribe("logs", {
      topics: [[config.uniswap.topics.swap, config.tokens.topics.transfer]],
    })
    .on("connected", async () => {
      console.log("[INFO]: Connected to Ethereum: Listening for swaps for:");
    })
    .on("data", async (log) => {})
    .on("error", async (error) => {
      console.log("[ERROR]: " + error);
    });
};

module.exports = { main };
