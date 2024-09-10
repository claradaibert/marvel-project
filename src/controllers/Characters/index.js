import { toast } from "react-toastify";

import { api } from "../../services";
import { reqDefaultParams } from "../../constants";

export const getCharacterList = async (search, page, orderByName) => {
  try {
    const requestSearchValue = search ? `nameStartsWith=${search}` : "";
    const orderBy = orderByName ? "name" : "modified";
    const offset = page * 20;
    const response = await api.get(
      `/characters?${requestSearchValue}&orderBy=${orderBy}&offset=${offset}&${reqDefaultParams}`
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

export const getCharacter = async (id) => {
  try {
    const response = await api.get(`/characters/${id}?${reqDefaultParams}`);

    return response?.data?.data?.results?.[0];
  } catch (err) {
    toast.error(
      err?.response?.data?.message ?? "Erro buscando dados do personagem"
    );
  }
};
