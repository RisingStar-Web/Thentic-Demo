import axios from "axios";

const API_URL = process.env.REACT_APP_THENTIC_API;
const API_KEY = process.env.REACT_APP_THENTIC_API_KEY;

export const createContract = async (payload) => {
  try {
    return await axios.post(
      API_URL + "/nfts/contract",
      {
        key: API_KEY,
        ...payload,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
  } catch (error) {
    console.log({ error });
  }
};

export const getContracts = async (chainId) => {
  return await axios.get(
    API_URL + `/contracts?key=${API_KEY}&chain_id=${chainId}`
  );
};

export const getNFTs = async (chainId) => {
  return await axios.get(API_URL + `/nfts?key=${API_KEY}&chain_id=${chainId}`);
};

export const mintNFT = async (payload) => {
  try {
    return await axios.post(
      API_URL + "/nfts/mint",
      {
        key: API_KEY,
        ...payload,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
  } catch (error) {
    console.log({ error });
  }
};
