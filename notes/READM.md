Padrão comum para criação de pastas em DDD e Clean Arch
* Pode utilizar uma estrutura de pastas:
    application = camadas referente a recursos da aplicação e casos de uso
    domain = camada de entidades da aplicação
    infra = camada de frameworks, recursos que se comunicam com o mundo externo

* Para esse projeto trabalharemos com um conceito que chamo de micro-softwares:
    Esse conceito consiste em uma forma de organização de pastas e estrutura de projeto
    de uma forma semelhante a do NestJS que divide a aplicação em recursos menores dentro de cada
    camada, o que chamamos de módulos que futuramente se integram formando a aplicação.