import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";

const getData = async ({ queryKey }) => {
  const [, category] = queryKey;
  const response = await fetch(
    `http://localhost:3000/deals?category=${category}`,
  );
  return response.json();
};

export default function ExclusiveDeals() {
  const [category, setCategory] = useState("vegan");
  const { data, isLoading, error } = useQuery({
    queryKey: ["deals", category],
    queryFn: getData,
  });
  console.log(data);

  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <Tabs
        defaultValue="overview"
        className="w-[100%]"
        value={category}
        onValueChange={(value) => setCategory(value)}
      >
        <div className="flex justify-around gap-90">
          <h1 className="font-bold text-3xl">
            Up to -40% 🎊 Order.uk exclusive deals
          </h1>
          <TabsList>
            <TabsTrigger value="vegan">Vegan</TabsTrigger>
            <TabsTrigger value="sushi">Sushi </TabsTrigger>
            <TabsTrigger value="pizza">Pizza & Fast food</TabsTrigger>
            <TabsTrigger value="others">Settings</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={category}>
          <div className="flex gap-3 mt-4">
            {data?.map((item) => (
              <div
                className="w-[33%] relative overflow-hidden group cursor-pointer"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />

                <div className="absolute top-46 left-6">
                  <h1 className="text-[20px] text-orange-400">{item.title}</h1>
                  <p className="font-bold text-2xl text-white">
                    {item.location}
                  </p>
                </div>

                <span className="p-3 bg-gray-950 font-bold text-white absolute top-0 right-3 rounded-b-[10px]">
                  {item.offer}
                </span>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* <TabsContent value="vegan">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>
                View your key metrics and recent project activity. Track
                progress across all your active projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              You have 12 active projects and 3 pending tasks.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sushi">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                Track performance and user engagement metrics. Monitor trends
                and identify growth opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Page views are up 25% compared to last month.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pizza">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>
                Generate and download your detailed reports. Export data in
                multiple formats for analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              You have 5 reports ready and available to export.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="others">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Manage your account preferences and options. Customize your
                experience to fit your needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Configure notifications, security, and themes.
            </CardContent>
          </Card>
        </TabsContent> */}
      </Tabs>
    </div>
  );
}
