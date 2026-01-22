import axios from "axios";
import { create } from "zustand";

const API_AUTH = `https://api.escuelajs.co/api/v1/auth`;
import { toast } from "sonner";

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")),
  token: localStorage.getItem("token"),
  isAuth: !!localStorage.getItem("token"),

  login: async (info) => {
    try {
      const res = await axios.post(`${API_AUTH}/login`, info);
      const token = res.data.access_token;
      console.log(token);
      if (token) {
        localStorage.setItem("token", token);
      }

      const profile = await axios.get(`${API_AUTH}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem("user", JSON.stringify(profile.data));
      console.log(profile);
      set({
        token,
        user: profile.data,
        isAuth: true,
      });
      toast.success("Đăng nhập thành công 🎉");
    } catch {
      toast.error("Sai email hoặc mật khẩu 😢");
      set({ isAuth: false });
    }
  },
  logout: () => {
    localStorage.removeItem("token");
    set({
      user: null,
      token: null,
      isAuth: false,
    });
    toast("Đã đăng xuất 👋");
  },
}));
