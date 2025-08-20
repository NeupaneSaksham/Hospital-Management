
import axios from "axios";

// Create an axios instance with default configuration
export const API = axios.create({
    baseURL: "https://app.makalueveresthospital.com.np/",
    headers: {
      // Default content type for regular API requests
      "Content-Type": "application/json",
      // Authentication token
      "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU4NjE0ODE0LCJpYXQiOjE3NTYwMjI4MTQsImp0aSI6ImMyMDIxZGZkZTlmMjRkZGJiYTBjYzcyNzI1OTZjMzRhIiwidXNlcl9pZCI6IjEifQ.aOTq8pRXWf0nJ0lAinB46xB1ENzhjhVDp1Ma9dNvnzA`
    },
    timeout: 10000, // Increased timeout for file uploads
  });

// Add request interceptor to handle FormData requests specially
API.interceptors.request.use((config) => {
  // If the request contains FormData, remove the Content-Type header
  // to let the browser set it with the correct boundary
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = undefined;
  }
  return config;
});
  