import { create } from "zustand";
import { loginApi, profileApi } from "./apiAuth";
export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token"), // lay gia tri da luu vao trinh duyet
  isAuth: false,
  loading: false,
  login: async (info) => {
    set({ loading: true });
    try {
      const res = await loginApi(info);
      console.log(res);
      const token = res.data.access_token;
      if (token) {
        localStorage.setItem("token", JSON.stringify(res.data));
      } // luu du lieu vao trinh duyet
      const profileRes = await profileApi();
      set({
        token,
        isAuth: true,
        loading: false,
        user: profileRes.data,
      });
      console.log(token);

      return true;
    } catch (err) {
      set({ loading: false });
      throw err;
    }
  },

  profile: async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await profileApi();
      console.log(res);
      set({
        user: res.data,
        isAuth: true,
        loading: false,
      });

    //   set({ loading: true });

      return res.data; // (optional) để component dùng
    } catch (err) {
      localStorage.removeItem("token");
      set({
        user: null,
        isAuth: false,
        loading: false,
      });
      throw err;
    }
  },

  checkAuth: async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      set({ loading: false, isAuth: false, user: null });
      return;
    }

    set({ loading: true });

    try {
      const res = await profileApi();
      set({
        user: res.data,
        isAuth: true,
        loading: false,
      });
    } catch {
      localStorage.removeItem("token");
      set({
        user: null,
        token: null,
        isAuth: false,
        loading: false,
      });
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({
      user: null,
      token: null,
      isAuth: false,
    });
  },
}));
