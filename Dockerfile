FROM iojs:1.2.0

MAINTAINER André König <andre.koenig@posteo.de>

RUN useradd --create-home cahoots

RUN npm i -g serve

ENV PORT 8080
EXPOSE 8080

ADD ./ /home/cahoots/

USER cahoots
CMD ["serve", "/home/cahoots", "-p", "8080"]
