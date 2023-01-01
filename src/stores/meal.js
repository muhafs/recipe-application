import { defineStore } from "pinia";

export const useMealStore = defineStore("meal", {
    state: () => ({
        meals: ["Salmon"],
    }),
    getters: {
        getMeals: (state) => state.meals[0],
    },
    actions: {
        convertSalmon() {
            this.meals[0] = "Shark";
        },
    },
});
