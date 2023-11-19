import * as yup from "yup";

export const Schema = yup.object({
  email: yup.string().email('Email invalido').required('Informe seu email'),
});
