const API_GLOBAL = 'https://thevirustracker.com/';
const API_COUNTRY = 'https://api.covid19api.com/summary';


class Api {
    async getMundial() {
        const query = await fetch(`${API_GLOBAL}free-api?global=stats`);
        const { results } = await query.json();
        return results;
    }
    
    async getCountries() {
        const query = await fetch(`${API_COUNTRY}`);
        const { Countries } = await query.json();
        //console.log(results);
        return Countries;
    }

    async getGlobal() {
        const query = await fetch(`${API_COUNTRY}`);
        const { Global } = await query.json();
        //console.log(results);
        return Global;
    }
}

export default new Api();