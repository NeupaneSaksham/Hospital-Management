import { API } from "@/api/client";
import { endpoint } from "../propertyendpoint";


export const pharmacyApi ={

    getDataFromBackend: async () => {
        const res = await API.get(endpoint.createProperty);
        console.log('res.status---------->', res.status);
        return res.data ?? [];
      },
      
}