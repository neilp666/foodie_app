import axios from 'axios';
export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const key = `aaa`;
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes
        } catch (error) {
            alert(error);
        }
    }
}
