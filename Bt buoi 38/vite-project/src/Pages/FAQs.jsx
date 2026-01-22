import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const getData = async ({ queryKey }) => {
  const [, type] = queryKey;
  const response = await fetch(`http://localhost:3000/hint?type=${type}`);
  return response.json();
};

export default function FAQs() {
  const [type, setType] = useState("question");
  const { data, isLoading, error } = useQuery({
    queryKey: ["hint", type],
    queryFn: getData,
  });
  const [active, setActive] = useState(null);
  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <Tabs
        defaultValue="overview"
        className="w-[100%]"
        value={type}
        onValueChange={(value) => setType(value)}
      >
        <div className="flex justify-around gap-90">
          <h1 className="font-bold text-3xl">Know more about us!</h1>
          <TabsList>
            <TabsTrigger value="question">Frequent Questions</TabsTrigger>
            <TabsTrigger value="tutorial">Image Tutorial</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="question">
          <div className="gap-3 mt-4 flex flex-col bg-amber-50 w-[70%] m-auto p-5 rounded-[14px]">
            {data
              ?.filter((item) => item.type === "question")
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    active === item.id
                      ? "bg-amber-200 font-semibold shadow"
                      : "hover:bg-amber-100"
                  }`}
                >
                  {item.title}
                </div>
              ))}
          </div>
        </TabsContent>
        <TabsContent
          value="tutorial"
          className="bg-amber-50 w-[70%] m-auto p-5 rounded-[14px]"
        >
          <div className="gap-3 mt-4 flex">
            {data
              ?.filter((item) => item.type === "tutorial")
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-300 w-[33%]  ${
                    active === item.id
                      ? "bg-amber-200"
                      : "hover:bg-amber- bg-gray-400"
                  } `}
                >
                  <h1 className="text-center font-bold">{item.title}</h1>
                  <img src={item.image} alt="" className="m-auto mt-6" />
                  <p className="text-center font-semibold">{item.text}</p>
                </div>
              ))}
          </div>
          <p className="text-center font-semibold">
            Order.UK simplifies the food ordering process. Browse through our
            diverse menu, select your favorite dishes, and proceed to checkout.
            Your delicious meal will be on its way to your doorstep in no time!
          </p>
        </TabsContent>
      </Tabs>

    </div>
  );
}
