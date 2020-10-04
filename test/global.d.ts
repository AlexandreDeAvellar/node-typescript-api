declare namespace NodeJS {
  interface Global {
    // Nesse momento está sendo adicionado no namespace NodeJS de forma GLOBAL a variável testRequest.
    // Isso é necessário por que na jest-setup.ts é inserido dentro da testRequest o valor de 'supertest(server.getApp())'.
    // Só que a testRequest não existe por isso ela precisa ser criada.
    // Se fizer um import no início da página, o sistema vai enteder que esse arquivo é de escopo local, e é preciso
    // que ele entenda que as configurações aqui dentro são de escopo global.
    // Para fazer isso então é feito um 'import inline' onde o import é feito direto dentro da variável criada.
    // Foi então feito uma declaração no namespace NodeJS fazendo umasobreposição adicionando no escopo GLOBAL
    // a variável testRequest que agora é acessível em todos os arquivos do projeto.

    // Os valores atribuidos a essa variável criada são importadas direto de dentro de 'supertest' buscando a interface
    // 'SuperTest' e essa interface exige um parâmetro que será extendido.
    // Nesse modelo é então extendido de dentro de 'supertest' a interface 'Test'.
    testRequest: import('supertest').SuperTest<import('supertest').Test>;

    // Lemrbrando: Para substituir tipos globais tem que ser 'inline'.

    // Tudo isso é feito para ser possível adicionar tipo aos tipos GLOBAIS.
  }
}
