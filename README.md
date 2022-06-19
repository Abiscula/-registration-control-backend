![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)


# API Controle de contratos

Com esta API é possivel registrar pessoas no banco de dados, criar contratos e vincula-los com alguma pessoa previamente cadastrada (somente 1 contrato por pessoa), 
ter acesso a uma lista paginada com todos contratos criados e por fim um dashboard contendo algumas estatísticas para facilitar o controle do administrador.

## Instruções de uso

Esse é o backend criado para o funcionamento do aplicativo Controle de Cadastros <a href="https://github.com/Abiscula/-registration-control">-registration-control</a>. 
Em ambos repositórios será necessário executar o comando <b>"npm install"</b> para baixar todas as dependências do projeto.
<ul>
  <li>front-end: <b>"npm start"</b></li>
  <li>back-end: <b>"npm run dev"</b></li>
</ul>

Não é necessária criar nenhuma configuração para o banco de dados, pensando na facilidade de rodar a aplicação, a criação e integração 
com o banco de dados foi feita através do ORM <a href="https://sequelize.org/">Sequelize</a>.

O db utilizado foi o SqLite pela sua facilidade de implementação e testes. Para mudar o gerenciador de banco de dados basta instalar a lib correspondente (verificar
no site do Sequelize se existe suporte) e alterar as configurações no arquivo config.ts (src/database/config.ts).

