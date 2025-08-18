export const endpoint = {
    createBillSummary: "/api/v1/pharmacy-bill/bill-summary/",
    listBillSummary: (id:string) => `/api/v1/pharmacy-bill/bill-summary/?page=${id}`,
    getSepecificBillSummary: (id:string) => `/api/v1/pharmacy-bill/bill-summary/${id}/`,
    listPersonBillSummary: (id:string) => `/api/v1/bill-summary/${id}/get-billing-summaries-of-person/`
}

