export default class TasteService {
    _apiBase = 'http://localhost:3000';

    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch`);
        }

        return await res.json();
    }

    async getTasteItems() {
        return await this.getResourse('/taste/');
    }
}