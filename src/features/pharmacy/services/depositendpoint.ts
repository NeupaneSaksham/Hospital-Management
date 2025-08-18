export const endpoint = {
    createDeposit: "/api/v1/pharmacy-bill/deposit-records/",
    getSpecificDeposit: (id:string) => `/api/v1/pharmacy-bill/deposits-records/${id}/`,
    listAllDeposits: "/api/v1/pharmacy-bill/deposits-records/",
    listUserDeposit: (id:string) => `/api/v1/pharmacy-bill/deposits-records/${id}/user-deposits/`
}