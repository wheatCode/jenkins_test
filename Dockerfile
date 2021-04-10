FROM ubuntu:latest
RUN mkdir /data
COPY . /app
WORKDIR /app
ENV TZ=America/Los_Angeles
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install curl -y
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
RUN export NVM_DIR="$([ -z '${XDG_CONFIG_HOME-}'' ] && printf %s '${HOME}/.nvm' || printf %s '${XDG_CONFIG_HOME}/nvm')"
[ -s 'NVM_DIR/nvm.sh' ] && \. '$NVM_DIR/nvm.sh'
RUN nvm install node
RUN ls
