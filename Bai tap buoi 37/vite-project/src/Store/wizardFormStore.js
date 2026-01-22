import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWizardStore = create(
  persist(
    (set) => ({
      step: 1,
      step1Data: {},
      step2Data: {},
      step3Data: {},

      setStep1Data: (data) =>
        set((state) => ({ step1Data: data, step: Math.max(state.step, 2) })),
      setStep2Data: (data) =>
        set((state) => ({ step2Data: data, step: Math.max(state.step, 3) })),
      setStep3Data: (data) =>
        set((state) => ({
          step3Data: data,
          step: Math.max(state.step, 4),
        })),
      goToStep: (step) => set({ step }),
      reset: () =>
        set({
          step: 1,
          step1Data: {},
          step2Data: {},
          step3Data: {},
        }),
    }),
    {
      name: "wizard-form", // key trong localStorage
    },
  ),
);
