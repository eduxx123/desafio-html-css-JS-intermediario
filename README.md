# Validação de Campos de Formulário 
## Este projeto utiliza JavaScript para validar campos de formulário em tempo real, destacando os campos obrigatórios que não foram preenchidos corretamente.

### Funcionalidade
O código verifica se todos os campos de input de um formulário estão preenchidos. Se algum campo obrigatório não for preenchido, o código adiciona uma classe de estilo para mostrar um aviso visual, ajudando o usuário a identificar quais campos precisam ser preenchidos.

O que acontece:
Ao clicar no botão (botao), o código percorre todos os campos de entrada de texto.
Para cada campo de entrada:
Se o campo estiver vazio, ele recebe a classe mostrar e a classe esconder é removida.
Se o campo não estiver vazio, ele recebe a classe esconder e a classe mostrar é removida.
O mesmo comportamento é aplicado a um conjunto de elementos que indicam a obrigatoriedade do preenchimento, com a classe mostrar ou esconder sendo alternada.
