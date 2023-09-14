# Plano de Testes de Software

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

 
| **Caso de Teste** | **Criar conta** 	|
| :---: | :--- |
| Requisito Associado |  - Permitir ao usuário gerenciar seu cadastro na plataforma; <br> - Realizar a validação de credenciais do usuário. |
| Objetivo do Teste | Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos |  - Clicar em "Cadastrar";  <br> - Preencher os campos obrigatórios (CPF, nome, e-mail, data de nascimento e senha); <br> - Clicar em "Salvar". |
|Critério de Êxito | - O cadastro foi realizado com sucesso. |
|Critério de Falha | - O usuário não consegue concluir o cadastro, e aparece na tela mostrando algum campo com preenchimento obrigatório. |
|  	|  	|
| **Caso de Teste** | **Efetuar login** |
| Requisito Associado | - Permitir ao usuário realizar o login na plataforma. |
| Objetivo do Teste | - Verificar se o usuário consegue fazer o login. |
| Passos | - Acessar a aplicação; <br> - Preencher os dados de login cadastrado ; <br> - Clicar em "Entrar". |
|Critério de Êxito | - O usuário consegue fazer o login. |
|Critério de Falha | - O usuário não consegue fazer o login, e a aplicação retorna uma mensagem de erro: "Email e/ou senha incorreta". |
|  	|  	|
| **Caso de Teste** | **Busca de consultas e especialistas** |
| Requisito Associado |  - Permitir a busca por consultas através dos especialistas cadastrados e/ou dos sintomas . |
| Objetivo do Teste | - Verificar se o usuário consegue realizar a busca filtrando pelos sintomas ou pelo tipo de especialista . |
|Critério de Êxito | - A aplicação vai retornar os especialistas disponíveis de acordo com a necessidade do  usuário. |
|Critério de Falha | - A aplicação retorna uma mensagem de erro: " Não foi possível encontrar medicos para essa modalidade tente novamente ". |
| 	|  	|
| **Caso de Teste** | **Registro de sintomas** |
| Requisito Associado | 	Permitir que o usuário gerencie os sintomas que vem sentindo. |
| Objetivo do Teste | - Verificar se o usuário consegue realizar o cadastro dos sintomas. |
| Passos | - Clicar em "Registros"; <br> - Preencher as informações de especialistas; <br> - Clicar em "Salvar". |
|Critério de Êxito | - Os especialistas  apontados na tela. |
|Critério de Falha | - A aplicação não realizar a busca dos medicos e deverá retornar uma mensagem de erro: "Não foi possível encontrar especialista registrado". |
|  	|  	|

