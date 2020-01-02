FROM ubuntu:18.04

# Dependencies
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential curl libkrb5-dev imagemagick ghostscript poppler-utils
RUN apt update && apt install -y libsm6 libxext6

# Install tesseract
RUN apt-get -y install tesseract-ocr libtesseract-dev tesseract-ocr-spa

# Install nodejs
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get install nodejs -y

# Create folder and install node dependencies
RUN mkdir -p /var/api
WORKDIR /var/api

ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}






