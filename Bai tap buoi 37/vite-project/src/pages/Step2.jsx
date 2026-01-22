import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useWizardStore } from "../Store/wizardFormStore";
import { useNavigate } from "react-router-dom";

const schema = (step1Data) =>
  z.object({
    userName: z
      .string()
      .min(1, { message: "This field is request" })
      .refine(
        (value) =>
          step1Data?.firstName ? value.includes(step1Data.firstName) : true,
        {
          message: `Username should contain your first name ${step1Data?.firstName ?? ""}`,
        },
      ),
  });
export default function step2() {
  const { step1Data, setStep2Data, step2Data, goToStep } = useWizardStore();
  const navigate = useNavigate();
  console.log(step1Data);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema(step1Data)),
    defaultValues: step2Data,
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    setStep2Data(data);
    navigate("/step3");
  };
  return (
    <div className="w-[70%] m-auto mt-30">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-bold text-[30px]">Username</h1>
        <p>
          Username should include your first name. This step to demonstrate that
          we can validate field based on what user typed in the previous step
        </p>
        <div className="mt-4">
          <label className="font-bold">Username</label>
          <input
            type="text"
            className="border border-[#ddd] px-2 py-1 w-full"
            {...register("userName")}
          />
          {errors?.userName?.message && (
            <span className="text-red-500 text-sm">
              {errors.userName.message}
            </span>
          )}
        </div>
        <div className="mt-4">
          <button
            className="px-2 py-1 bg-green-900 text-white outline-none disabled:bg-gray-300 mr-3"
            type="button"
            onClick={() => (navigate("/"), goToStep(1))}
          >
            Previous
          </button>
          <button
            disabled={!isValid}
            className="px-2 py-1 bg-green-900 text-white outline-none disabled:bg-gray-300"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
