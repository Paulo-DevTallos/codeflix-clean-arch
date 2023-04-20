FROM node:16-alpine

## USER paulodevtallos - 1000

WORKDIR /home/node/app

CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]

# imagens slim e alpine são comumente utilizadas para produção
# recomendado: carregar imagens originais 
# configurar USER <usermood> - 1000 para trabalhar com mínimos privilégios