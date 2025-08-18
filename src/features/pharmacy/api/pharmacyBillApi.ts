const backendDomain = 'https://app.makalueveresthospital.com.np/api/v1';

const PharmacyBillApi = {
  deposits: {
    createDeposit: {
      url: `${backendDomain}/pharmacy-bill/deposits-records/`,
      method: 'POST',
    },
    getSpecificDeposit: {
      url: (id: string) =>
        `${backendDomain}/pharmacy-bill/deposits-records/${id}/`,
      method: 'GET',
    },
    listAllDeposit: {
      url: `${backendDomain}/pharmacy-bill/deposits-records/`,
      method: 'GET',
    },
    listUserDeposit: {
      url: (id: string) => `${backendDomain}/pharmacy-bill/deposits-records/${id}/user-deposits/`,
      method: 'GET',
    },
  },
  billSummary: {
    createBillSummary: {
      url: `${backendDomain}/pharmacy-bill/bill-summary/`,
      method: 'POST',
    },
    listBillSummary: {
      url: (id: string) => `${backendDomain}/pharmacy-bill/bill-summary/?page=${id}`,
      method: 'GET',
    },
    getSpecificBillSummary: {
      url: (id: string) => `${backendDomain}/pharmacy-bill/bill-summary/${id}/`,
      method: 'GET',
    },
    listSpecificBillSummary: {
      url: (id: string) => `${backendDomain}/bill-summary/${id}/get-billing-summaries-of-person/`,
      method: 'GET',
    },
  },
  billingPersonInfo: {
    checkDueExist: {
      url: (id: string) => `${backendDomain}/pharmacy-bill/bill-person-info/${id}/check-wether-dues-exist`,
      method: 'GET',
    },
    getBillStatus: {
        url: (id: string) => `${backendDomain}/pharmacy-bill/bill-person-info/${id}/get-all-bill-status-of-person`,
        method: 'GET'
    },
    listAllBillPersonInfo: {
        url: `${backendDomain}/pharmacy-bill/bill-person-info/list-all-bill-person-info/`,
        method: 'GET'
    },
  },
};

export default PharmacyBillApi;
