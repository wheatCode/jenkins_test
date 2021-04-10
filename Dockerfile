FROM ubuntu:latest
RUN mkdir /data
COPY . /app
WORKDIR /app
ENV TZ=America/Los_Angeles
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install sudo -y
RUN apt-get install curl -y
# RUN apt-get purge cmdtest -y
RUN apt-get install nodejs -y
RUN apt-get install npm -y
RUN npm install yarn -g -y
RUN sudo chown -R  deploy /var/lib/.config
# RUN yarn config delete https-proxy
# RUN yarn config delete proxy
RUN ls
