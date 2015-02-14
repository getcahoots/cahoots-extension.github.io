FROM iojs:1.2.0

MAINTAINER André König <andre.koenig@posteo.de>

RUN npm i -g serve

ENV PORT 8080
EXPOSE 8080

ADD ./ /root/

CMD ["serve", "/root", "-p", "8080"]

