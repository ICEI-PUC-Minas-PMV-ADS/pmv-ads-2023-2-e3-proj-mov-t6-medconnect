import * as yup from "yup";

export const Schema = yup.object({
  username: yup.string().required("Informe seu nome de usuário"),
  //email: yup.string().email('Email invalido').required('Informe seu email'),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 digitos")
    .required("Informe uma senha."),
});
