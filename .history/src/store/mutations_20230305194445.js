export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals;
}

export function setSearchVaue(state, value) {
    state.searchValue = value;
}

export function setColor(state, color) {
    console.log(state.color, color);
    state.color = color;
}
