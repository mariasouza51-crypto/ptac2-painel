O que é o projeto? 
O Painel da Malu é um projeto feito em React para organizar ideias. Nele, é possível adicionar novas ideias, marcar as que já foram concluídas, remover ideias e acompanhar um contador com o total de ideias e as concluídas

Como rodar?
Para rodar o projeto, primeiro instale as dependências:
npm install
npm run dev

Minhas decisões foram:
usei useState para controlar as ideias, o campo de texto e a mensagem de erro.
map() para mostrar as ideias na tela.
Cada ideia recebe um id usando Date.now().
map() e spread para marcar uma ideia como concluída.
filter() para remover uma ideia.
Fiz o contador usando a própria lista de ideias, sem criar outro estado.
Usei .trim() para não deixar adicionar ideias vazias.
Quando uma ideia é concluída, o texto fica riscado.