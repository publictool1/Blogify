import axios from "axios";

export default class GetComm {
    static async getComments() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
            return response.data
        } catch (e) {
            console.error("Error getting");
        }
    }
}

