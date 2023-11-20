FROM preston159/node-python3-nginx:16.13.1-3.9.7-1.20.2

EXPOSE 8080:80

WORKDIR /documentation
ADD docs/ /documentation/docs/
ADD styles/ /documentation/styles/
ADD mkdocs.yml gulpfile.js package.json /documentation/

RUN apk update && apk add python3-dev gcc libc-dev
RUN npm run setup
RUN npm run build
RUN mv /documentation/site/* /www/

CMD [ "/usr/sbin/nginx", "-g", "daemon off;" ]
