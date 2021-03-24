FROM ubuntu:latest
COPY . /app
WORKDIR /app
ENV TZ=America/Los_Angeles
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt update -y
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install sudo -y
RUN apt install curl -y
RUN apt-get install nodejs -y
RUN apt-get install npm -y
RUN sudo npm install -g n -y
RUN sudo npm cache clean --force 
RUN apt-get install nginx -y
