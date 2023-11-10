import * as yup from "yup";

export const Schema = yup.object({

  nome: yup.string().required('Nome é requerido'),
  sobrenome: yup.string().required('Sobrenome é requerido'),
  email: yup.string().email('Email invalido').required('Informe seu email'),
  cpf:yup.string().required('Informe seu CPF'), 
  //email: yup.string().email('Email invalido').required('Informe seu email'),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 digitos")
    .required("Informe uma senha."),
});
