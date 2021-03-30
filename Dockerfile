FROM ubuntu:latest
ENV TZ=America/Los_Angeles
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install sudo -y
RUN apt-get install nodejs -y
RUN apt-get install npm -y
RUN apt-get install nginx -y
RUN sudo npm install -g --save dompurify@2.0.8 redoc-cli
RUN sudo npm update
RUN nginx
COPY . /var/www/
WORKDIR /var/www/
