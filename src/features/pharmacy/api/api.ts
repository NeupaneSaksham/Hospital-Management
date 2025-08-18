const backendDomain =
  'https://app.makalueveresthospital.com.np/api/v1/pharmacy';

const SummaryApi = {
  dashboard: {
    url: `${backendDomain}/dashboard/pharmacy-dashboard/`,
    method: 'GET',
  },
  //Measurement Section
  unitOfMeasurement: {
    postUnitOfMeasurement: {
      url: `${backendDomain}/unit-of-measurement/`,
      method: 'POST',
    },
    updateUnitOfMeasurement: {
      url: (id: string) => `${backendDomain}/unit-of-measurement/${id}/`,
      method: 'PATCH',
    },
    deleteMeasurement: {
      url: `${backendDomain}/unit-of-measurement/delete-measures/`,
      method: 'DELETE',
    },
    listMeasurement: {
      url: `${backendDomain}/unit-of-measurement/`,
      method: 'GET',
    },
    getSepecificMeasurement: {
      url: (id: string) => `${backendDomain}/unit-of-measurement/${id}/`,
      method: 'GET',
    },
  },

  // Property Section
  property: {
    postProperty: {
      url: `${backendDomain}/property/`,
      method: 'POST',
    },
    updateProperty: {
      url: (id: string) => `${backendDomain}/property/${id}/`,
      method: 'PATCH',
    },
    deleteProperty: {
      url: `${backendDomain}/property/delete-properties/`,
      method: 'DELETE',
    },
    listProperty: {
      url: `${backendDomain}/property/`,
      method: 'GET',
    },
    getSpecificProperty: {
      url: (id: string) => `${backendDomain}/property/${id}/`,
      method: 'GET',
    },
  },

  //stock section
  stock: {
    createStock: {
      url: `${backendDomain}/stock/`,
      method: 'POST',
    },
    updateStock: {
      url: (id: string) => `${backendDomain}/stock/${id}/`,
      method: 'PATCH',
    },
    deleteStock: {
      url: (id: string) => `${backendDomain}/stock/${id}/`,
      method: 'DELETE',
    },
    getSpecificStock: {
      url: (id: string) => `${backendDomain}/stock/${id}/`,
      method: 'GET',
    },
    listAllStock: {
      url: (name: string, date: string) =>
        `${backendDomain}/stock/?name=${encodeURIComponent(name)}&date=${encodeURIComponent(date)}`,
      method: 'GET',
    },
  },

  // category section
  category: {
    createCategory: {
      url: `${backendDomain}/category/`,
      method: 'POST',
    },
    updateCategory: {
      url: (id: string) => `${backendDomain}/category/${id}/`,
      method: 'PATCH',
    },
    deleteCategory: {
      url: `${backendDomain}/category/delete-categories/`,
      method: 'DELETE',
    },
    getSpecificCategory: {
      url: (id: string) => `${backendDomain}/category/${id}/`,
      method: 'GET',
    },
    listCategory: {
      url: `${backendDomain}/category/`,
      method: 'GET',
    },
  },

  // staff section
  staff: {
    createStaff: {
      url: `${backendDomain}/staff/`,
      method: 'POST',
    },
    listStaff: {
      url: `${backendDomain}/staff/`,
      method: 'GET',
    },
    getStaffById: {
      url: (id: string) => `${backendDomain}/staff/${id}/`,
      method: 'GET',
    }, //update staff, fetchstaffbydepartment, deleteStaff is remaining
  },

  // lab section
  lab: {
    createLabResult: {
      url: `${backendDomain}/lab-result/`,
      method: 'POST',
    },
    updateLabResult: {
      url: (id: string) => `${backendDomain}/lab-result/${id}/`,
      method: 'PATCH',
    },
    deleteLabTest: {
      url: (id: string) => `${backendDomain}/lab-result/${id}/`,
      method: 'DELETE',
    },
    getSpecificLabResult: {
      url: (id: string) => `${backendDomain}/lab-result/${id}/`,
      method: 'GET',
    },
    listLabResult: {
      url:`${backendDomain}/lab-result/`,
      method: 'GET',
    },
    getPatientLabResult: {
      url: (id:string) => `${backendDomain}/lab-result/${id}/patient-results`,
      method: 'GET'
    },
  },
};

export default SummaryApi;
