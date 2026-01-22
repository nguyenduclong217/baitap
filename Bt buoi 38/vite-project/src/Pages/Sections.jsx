import { useQuery } from "@tanstack/react-query";

const getData = async () => {
  const response = await fetch(`http://localhost:3000/counter`);
  return response.json();
};
export default function Sections() {
  const { data, error } = useQuery({
    queryKey: ["counter"],
    queryFn: getData,
  });
  console.log(data);
  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div className="flex rounded-[14px] bg-amber-500">
      {data?.map((item) => (
        <div
          className="p-6 w-[25%] flex flex-col justify-center border-r-1"
          key={item.id}
        >
          <h1 className="text-center text-3xl text-white">{item.number}</h1>
          <p className="text-center font-bold text-white">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
