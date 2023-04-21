hPadrão comum para criação de pastas em DDD e Clean Arch
* Pode utilizar uma estrutura de pastas:
    application = camadas referente a recursos da aplicação e casos de uso
    domain = camada de entidades da aplicação
    infra = camada de frameworks, recursos que se comunicam com o mundo externo

* Para esse projeto trabalharemos com um conceito que chamo de micro-softwares:
    Esse conceito consiste em uma forma de organização de pastas e estrutura de projeto
    de uma forma semelhante a do NestJS que divide a aplicação em recursos menores dentro de cada
    camada, o que chamamos de módulos que futuramente se integram formando a aplicação.


* Conceitos do TDD - Kent Beck
    Código orientado a testes:
    Cria o teste -> falhar -> faz passar -> refatora o código


Sobre parametros opcionais:
* Segundo o domain expert a descrição da categoria seria opcional, sabendo disso no construtor identificamos.
  a categoria com o "?" (optional chaning).
  Obs: A aplicação desse recurso acusa um erro nossos demais parametros, para isso todos os demais seguintes devem
  também receber a caracteristica de "optional".

  Regra do TS na criação de construtores e métodos os "?" ficam para o final de sua aplicação.

  Para que não se sofra com bugs no ordenamento da aplicação de recursos opcionais em determinados argumentos dentro construtor
  o recomendado é a criação de type ou interface que recebam esses atributos, então é possível trabalhar os recursos opcionais sem
  se importar com a ordem.

  ref: src/category/domain/entities/category.ts linha 1 a 11

* Segundo o domain expert caso nao tenhamos nenhuma informação a principio a categoria ja estará ativa e a data de criação será gerada
  a partir da linguagem e nao o banco ou ORM.

</hr>
Sobre a archetura do projeto
* Criar setters mesmo que publicos, não há problema, a questão é como estamos operando a lógica de uma entidade, fugindo da forma habitual de trabalho
  Esse comportamento sem intenção faz que sua entidade fique anêmica.
  Setters no contexto das entidades desse projeto são usados para encapsular as lógicas do construtor.

</hr>
Casos de teste de categoria
* Criar uma categoria passando o nome
  Criar uma categoria passando nome e descrição
  Criar uma categorias configurando datas e is_actives


