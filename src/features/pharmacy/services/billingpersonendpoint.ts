
export const endpoint= {
    getDueStatus: (id:string) =>  `/api/v1/pharmacy-bill/bill-person-info/${id}/check-wether-dues-exist`,
    getBill:  "/api/v1/pharmacy-bill/bill-person-info/1/get-all-bill-status-of-person", 
    listBillPersonInfo: "/api/v1/pharmacy-bill/bill-person-info/list-all-bill-person-info/"
}

