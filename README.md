Guia de Execução
Este guia fornece as instruções necessárias para iniciar a aplicação localmente usando Docker e acessar os serviços.

Iniciar a Aplicação com Docker
Para subir todos os serviços (backend, frontend e banco de dados), use o seguinte comando:

docker compose up --build

Este comando irá construir as imagens, se necessário, e iniciar os contêineres definidos no docker-compose.yml.

Acessar os Serviços
Após a execução do comando acima, você poderá acessar os serviços nos seguintes endereços:

Frontend: http://localhost:3001/

Documentação da API (Swagger): http://localhost:3000/api-docs

Credenciais de Acesso
Use as seguintes credenciais para fazer login na aplicação:

E-mail: admin@mtrix.com

Senha: senha123