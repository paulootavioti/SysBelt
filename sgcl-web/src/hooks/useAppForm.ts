// import {
//   useForm,
//   type DefaultValues,
//   type FieldValues,
// } from "react-hook-form";

// import { zodResolver } from "@hookform/resolvers/zod";

// import type { ZodTypeAny } from "zod";

// interface UseAppFormProps<T extends FieldValues> {
//   schema: ZodTypeAny;
//   defaultValues?: DefaultValues<T>;
// }

// export function useAppForm<T extends FieldValues>({
//   schema,
//   defaultValues,
// }: UseAppFormProps<T>) {
//   return useForm<T>({
//     resolver: zodResolver(schema),
//     defaultValues,
//     mode: "onBlur",
//   });
// }