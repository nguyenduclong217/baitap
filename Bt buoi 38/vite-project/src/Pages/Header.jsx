import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { CircleUser } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "@/stores/useAuthStore";

export default function Header() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuth, user, logout, token } = useAuthStore();
  const [open, setOpen] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (isAuth) {
      setOpen(false);
    }
  }, [isAuth]);

  return (
    <div className="flex items-center justify-between px-6 py-4">
      <img src="/img/LOGO 1.svg" alt="" />
      <div>
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            {[
              { label: "Home", to: "/" },
              { label: "Browse Menu", to: "/menu" },
              { label: "Special Offers", to: "/offers" },
              { label: "Restaurants", to: "/restaurants" },
              { label: "Track Order", to: "/track" },
            ].map((item) => (
              <NavigationMenuItem key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-bold transition text-black
                  ${
                    isActive
                      ? "bg-amber-400 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                  }
                >
                  {item.label}
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div>
        {isAuth ? (
          <div className="flex gap-3 items-center">
            <h1 className="font-semibold">{user?.name}</h1>
            <button className="p-2 bg-gray-500" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>
                <CircleUser /> Login/Signup
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Đăng nhập</DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-3">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="grid gap-3">
                  <Label>Password</Label>
                  <Input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Đăng nhập</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
