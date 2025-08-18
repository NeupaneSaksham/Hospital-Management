
export const endpoint = {
    createProperty:"/api/v1/pharmacy/property/",
    updateProperty: (id:string) => `/api/v1/pharmacy/property/${id}/`,
    deleteProperty:"/api/v1/pharmacy/property/delete-properties/",
    listProperty: "/api/v1/pharmacy/property/",
    getSpecificProperty: (id:string) =>  `/api/v1/pharmacy/property/${id}/`
}