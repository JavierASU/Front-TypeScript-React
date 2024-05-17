import { instance } from "./base.api";

const endpoint = "products";
export const productsApi = {
  getALL: function () {
    return instance.get(endpoint);
  },
};
