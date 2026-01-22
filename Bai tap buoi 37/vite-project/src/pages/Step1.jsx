import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { useWizardStore } from "../Store/wizardFormStore";

const schema = z.object({
  firstName: z.string().min(2, {
    message: "This field is request",
  }),
  lastName: z.string().min(2, {
    message: "This field is request",
  }),
  age: z.coerce.number().min(1, { message: "Ô nhập bắt buộc" }),
  email: z
    .string()
    .min(1, { message: "Email không được để trống" })
    .pipe(
      z.email({
        message: "Email khong dung dinh dang",
      }),
    ),
});
export default function Step1() {
  const navigate = useNavigate();
  // const setStep1Data = useWizardStore((state) => state.setStep1Data);
  const { step1Data, setStep1Data } = useWizardStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: step1Data,
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    setStep1Data(data);
    console.log(setStep1Data(data));
    navigate("/step2");
  };
  return (
    <div className="w-[60%] m-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Contact Info</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name..."
              className="border border-[#ddd] px-2 py-1 w-full"
              {...register("firstName")}
            />
            {errors?.firstName?.message && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="border border-[#ddd] px-2 py-1 w-full"
              {...register("lastName")}
            />
            {errors?.lastName?.message && (
              <span className="text-red-500 text-sm">
                {errors.lastName.message};
              </span>
            )}
          </div>
          <div>
            <label>Age</label>
            <input
              type="text"
              placeholder="Age...."
              className="border border-[#ddd] px-2 py-1 w-full"
              {...register("age")}
            />
            {errors?.age?.message && (
              <span className="text-red-500 text-sm">{errors.age.message}</span>
            )}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email..."
              className="border border-[#ddd] px-2 py-1 w-full"
              {...register("email")}
            />
            {errors?.email?.message && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        <div className="mt-4">
          <button
            disabled={true}
            className="px-2 py-1 bg-green-900 text-white outline-none disabled:bg-gray-300 mr-3"
            type="button"
          >
            Previous
          </button>
          <button
            disabled={!isValid}
            className="px-2 py-1 bg-green-900 text-white outline-none disabled:bg-gray-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
