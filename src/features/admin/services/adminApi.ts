import { API } from "@/api/client";
import { endpoints } from "./endpoint";


export const adminApi ={

    getDataFromBackend: async () => {
        const res = await API.get(endpoints.getData);
        return res.data ?? [];
      },


    getRolesFromBackend: async () => {
        const res = await API.get(endpoints.getRoles);
        return res.data.data ?? [];
      },

    getDepartmentsFromBackend: async () => {
        const res = await API.get(endpoints.getDepartments);
        return res.data.data ?? [];
      },

    createStaffFromBackend: async (formData: FormData) => {
        try {
            // For multipart/form-data with files, we need this specific configuration
            const config = {
                // Don't set any Content-Type header - let browser set it with proper boundary
                headers: {},
                // Prevent axios from trying to transform the body
                transformRequest: (data: any) => data
            };
            
            // Debug: Log the FormData entries
            if (formData) {
                console.log("FormData entries:");
                for (const pair of (formData as any).entries()) {
                    if (pair[1] instanceof File) {
                        console.log(`${pair[0]}: File(${pair[1].name}, ${pair[1].type}, ${pair[1].size} bytes)`);
                    } else {
                        console.log(`${pair[0]}: ${pair[1]}`);
                    }
                }
            }
            
            // Make a copy of the FormData to avoid modifying the original
            const formDataCopy = new FormData();
            for (const pair of (formData as any).entries()) {
                formDataCopy.append(pair[0], pair[1]);
            }
            
            // Send the request
            const res = await API.post(endpoints.createStaff, formDataCopy, config);
            return res.data ?? [];
        } catch (error: any) {
            // Detailed error logging
            if (error.response) {
                console.error("Server error response:", {
                    status: error.response.status,
                    statusText: error.response.statusText,
                    data: error.response.data,
                    headers: error.response.headers
                });
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Request setup error:", error.message);
            }
            throw error;
        }
      },


}