pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    } 
  }
  environment {
      npm_config_cache = 'npm-cache'
  }
  stages { 
        stage("Build") {
          steps {
            // sh 'chown -R $USER:$GROUP ~/.yarn'
            // sh 'chown -R $USER:$GROUP ~/.config'
            // sh 'yarn config set registry http://registry.npm.taobao.org/'
            // sh 'yarn config set registry https://registry.npmjs.org/'
            sh 'node --version'
            sh 'npm --version'
            sh 'ls'
            sh 'npm install'
          }
        }
        stage('Test') {
          steps {
              echo 'Testing'
          }
        }
        stage('Deploy') {
          steps {
              echo 'Deploy'
          }
        }
  }
}
