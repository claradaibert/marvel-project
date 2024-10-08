import { toast } from "react-toastify";

import { api } from "../../services";
import { reqDefaultParams } from "../../constants";

export const getCharacterComics = async (id) => {
  try {
    const response = await api.get(
      `/characters/${id}/comics?orderBy=-onsaleDate&limit=10&${reqDefaultParams}`
    );

    return response?.data?.data?.results;
  } catch (err) {
    toast.error(
      err?.response?.data?.message ?? "Erro buscando dados do personagem"
    );
  }
};

export const getLastModifiedDate = async (id) => {
  try {
    const response = await api.get(
      `/characters/${id}/comics?orderBy=-modified&limit=1&${reqDefaultParams}`
    );

    return response?.data?.data?.results?.[0]?.modified;
  } catch (err) {
    toast.error(
      err?.response?.data?.message ?? "Erro buscando dados do personagem"
    );
  }
};
