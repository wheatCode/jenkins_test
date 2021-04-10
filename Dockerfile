FROM ubuntu:latest
RUN mkdir /data
COPY . /app
WORKDIR /app
ENV TZ=America/Los_Angeles
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install curl -y
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.20.0/install.sh | bash \
RUN . $NVM_DIR/nvm.sh \
RUN nvm install $NODE_VERSION \
RUN nvm alias default $NODE_VERSION \
RUN nvm use default
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/v$NODE_VERSION/bin:$PATH
RUN ls
