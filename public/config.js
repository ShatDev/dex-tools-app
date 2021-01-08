module.exports = {
  chains: {
    1: { name: "Mainnet" },
    3: { name: "Ropsten" },
    4: { name: "Rinkeby" },
    42: { name: "Kovan" },
  },
  uniswap: {
    topics: {
      swap:
        "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
      pairCreated:
        "0x0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9",
    },
  },
  tokens: {
    topics: {
      transfer:
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
    },
  },
};
