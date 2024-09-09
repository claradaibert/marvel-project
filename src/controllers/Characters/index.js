import { toast } from "react-toastify";

import { api } from "../../services";
import { reqDefaultParams } from "../../constants";

export const getCharacterList = async (search, page) => {
  try {
    const requestSearchValue = search ? `nameStartsWith=${search}&&` : "";
    const offset = page * 20;
    const response = await api.get(
      `/characters?${requestSearchValue}offset=${offset}&${reqDefaultParams}`
    );

    const responseObject = {
      list: response?.data?.data?.results,
      total: response?.data?.data?.total,
    };

    return responseObject;
  } catch (err) {
    toast.error(err?.response?.data?.message ?? "Erro buscando personagens");
  }
};
