export function setSearchedMeals(state, meals) {
    state.searchedMeals.data = meals;
}

export function setColor(state, color) {
    console.log(state.color, color);
    state.color = color;
}
