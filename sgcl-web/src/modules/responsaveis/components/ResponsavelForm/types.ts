import type { ResponsavelFormData } from "../../schema/responsavel.schema";

export interface ResponsavelFormProps {
  loading: boolean;

  initialValues?: Partial<ResponsavelFormData>;

  onSubmit: (
    data: ResponsavelFormData
  ) => Promise<void> | void;
}