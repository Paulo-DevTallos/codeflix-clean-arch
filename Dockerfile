FROM node:16-alpine

## USER node - 1000

WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null" ]