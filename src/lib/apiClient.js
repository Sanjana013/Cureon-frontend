/* eslint-disable no-unused-vars */
import axios from "axios";
// import { useAuth } from "./AuthContext"; // Adjust the path as needed

// Create an Axios instance with default configuration
const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Ensures cookies are sent with requests
});

export const setupInterceptors = (token, setToken) => {
  //Request interceptor to attach the Authorization token
  apiClient.interceptors.request.use(
    async (config) => {
      // const {setUser} = useAuth(); // Retrieve token from AuthContext
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`.trim(); // Ensure proper token formatting
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Function to refresh the access token
  const refreshToken = async () => {
    try {
      const response = await apiClient.post("/api/auth/refresh");
      // const response = await axios.post("http://localhost:8080/api/auth/refresh", {
      //   withCredentials: true,
      // });
      console.log(response);

      if (response?.data.token) {
        console.log("Token refreshed successfully:", response);
        return response.data.token;
      }
      // throw new Error("No access token in response");
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw error; // Rethrow to handle it in the response interceptor
    }
  };

  // Response interceptor for handling token expiration
  apiClient.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      // Check for 403 (Forbidden) and that the request hasn't been retried
      if (
        (error.response?.status === 403 || error.response?.status === 401) &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true; // Mark the request as retried

        try {
          const token = await refreshToken(); // Call refreshToken to get a new access token
          console.log(token);

          if (token) {
            // Store the new access token
            setToken(token);

            // Update Axios default headers and retry the original request
            apiClient.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${token}`;
            originalRequest.headers["Authorization"] = `Bearer ${token}`;

            return apiClient(originalRequest); // Retry the original request
          }
        } catch (refreshError) {
          console.error("Failed to refresh token:", refreshError);
          localStorage.removeItem("ACCESS_TOKEN");
          localStorage.removeItem("USER_DATA");
          return Promise.reject(refreshError); // Reject if token refresh fails
        }
      }

      return Promise.reject(error); // Propagate other errors
    }
  );
};

export default apiClient;
