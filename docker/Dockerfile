# Check out https://hub.docker.com/_/node to select a new base image
FROM node:11.15-alpine

# Install java
ENV JAVA_HOME=/usr/lib/jvm/zulu8-ca

RUN wget --quiet https://cdn.azul.com/public_keys/alpine-signing@azul.com-5d5dc44c.rsa.pub -P /etc/apk/keys/ && \
    echo "https://repos.azul.com/zulu/alpine" >> /etc/apk/repositories && \
    apk --no-cache add zulu8-jdk=8.0.232-r3

# Install python
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python
RUN npm install --quiet node-gyp -g

#RUN echo 'deb http://archive.ubuntu.com/ubuntu bionic universe' >> /etc/apt/sources.list

RUN apk upgrade --update

# Install teserract
RUN apk --no-cache add ffmpeg cmake tesseract-ocr libtesseract-dev tesseract-ocr-spa
#    && wget --no-check-certificate https://github.com/tesseract-ocr/tessdata/raw/3.04.00/spa.traineddata -P /usr/share/tessdata

# Create app directory (with user `node`)
RUN mkdir -p /var/api

WORKDIR /var/api

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package*.json /var/api/
#
#RUN npm install

# Bundle app source code
COPY . .

# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}
#CMD [ "npm", "run", "start" ]
