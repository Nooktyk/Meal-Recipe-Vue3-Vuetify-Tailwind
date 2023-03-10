import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
        commit("setSearchedMeals", data.meals);
    });
}

export function getColor({ state }) {
    return state.color;
}

export function setColor({ commit }, color) {
    commit("setColor", color);
}
