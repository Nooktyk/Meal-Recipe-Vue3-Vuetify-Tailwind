import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword.value}`).then(({ data }) => {
        commit("setSearchedMeals", data.meals);
    });
}
