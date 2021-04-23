FROM ubuntu:20.04
RUN mkdir /data
COPY . /app
WORKDIR /app
ENV TZ=Asia/Taipei
ENV NODE_VERSION 14.16.1
ENV NVM_DIR /usr/local/nvm
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install curl -y
RUN apt-get install sudo -y
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
RUN . $NVM_DIR/nvm.sh 
RUN nvm install $NODE_VERSION 
RUN nvm alias default $NODE_VERSION 
RUN nvm use default
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
