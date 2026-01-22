const BASE_URL = `https://api.escuelajs.co/api/v1`;
import axios from "axios";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  time: 700,
});

axiosClient.interceptors.request.use((config) => {
  const tokenStr = localStorage.getItem("token");
  if (tokenStr) {
    const token = JSON.parse(tokenStr);
    config.headers.Authorization = `Bearer ${token.access_token}`;
  }
  return config;
});

let refreshPromise = null;

const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

const getNewToken = async () => {
  try {
    const tokenStr = localStorage.getItem("token");
    if (tokenStr) return false;

    const { refresh_token } = JSON.parse(tokenStr);

    const response = await fetch(`${BASE_URL}/auth/refresh_token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: refresh_token }),
    });

    if (!response.ok) throw new Error("Unauthorized");
    return response.json();
  } catch {
    return false;
  }
};

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      if (!refreshPromise) {
        refreshPromise = getNewToken();
      }
      const newToken = await refreshPromise;
      if (newToken) {
        //Luu vao localStorage

        localStorage.setItem(
          "token",
          JSON.stringify({
            access_token: newToken.access_token,
            refresh_token: newToken.refresh_token,
          }),
        );
        return axiosClient(error.config);
      } else {
        logout();
      }
      return Promise.reject(error);
    }
  },
);
