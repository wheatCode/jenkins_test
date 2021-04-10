pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    } 
  }
  stages { 
        stage("Build") {
          steps {
            sh 'yarn config set registry http://registry.npm.taobao.org/'
            sh 'yarn config set registry https://registry.npmjs.org/'
            sh 'node --version'
            sh 'yarn --version'
            sh 'ls'
            sh 'yarn install'
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
