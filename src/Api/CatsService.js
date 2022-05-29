import axios from "axios";

const apiUrl = 'https://api.thecatapi.com/v1/images/search';
const apiKey = '074be303-3097-4840-97d7-7dadb96409b4';

export default class CatsService {
    
    static async getAll(limit= 15,) {
        const response = await axios.get(apiUrl, {
            params:{   
                limit: limit,
                
            },
           /*  responseType: 'src', */
            headers: { 
            "X-Auth-Token": apiKey,
            breeds: 1,    
            },
        })
          return response;
    }

  
}