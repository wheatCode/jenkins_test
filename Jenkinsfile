pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    } 
  }
  stages { 
        stage("Build") {
          steps {
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
