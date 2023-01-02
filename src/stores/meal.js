import { defineStore } from "pinia";
import Api from "@/apis/BaseAPI";

export const useMealStore = defineStore("meal", {
    state: () => ({
        searchedMeals: [],
    }),
    getters: {
        getMeals: (state) => state.meals[0],
    },
    actions: {
        async searchMeals(keyword) {
            const response = await Api.get(`search.php?s=${keyword}`);
            this.searchedMeals = response.data.meals;
        },
    },
});
