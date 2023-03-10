import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
    commit("setSearchValue", keyword);
    axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
        commit("setSearchedMeals", data.meals);
    });
}

export function getColor({ state }) {
    return state.color;
}

export function setNewColor({ commit }, color) {
    commit("setColor", color);
}

export function searchMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
        commit("setMealsByLetter", data.meals);
    });
}

export function searchMeals({ commit }, keyword) {
    commit("setSearchValue", keyword);
    axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
        commit("setSearchedMeals", data.meals);
    });
}
