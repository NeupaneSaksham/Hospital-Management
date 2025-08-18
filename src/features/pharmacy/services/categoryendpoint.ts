export const endpoint = {
    createCategory: "/api/v1/pharmacy/category/",
    updateCategory: (id:string) => `/api/v1/pharmacy/category/${id}/`,
    deleteCategory: "/api/v1/pharmacy/category/delete-categories/",
    getSpecificCategory: (id:string) => `/api/v1/pharmacy/category/${id}/`,
    listCategory: "/api/v1/pharmacy/category/"
}