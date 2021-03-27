pipeline {
  agent {
    dockerfile true 
  }
  stages { 
        stage("Build") {
          steps {
            sh 'node --version'
            sh 'npm --version'
            sh 'ls'
            sh 'npm run build'
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
