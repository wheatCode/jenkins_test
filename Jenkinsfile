pipeline {
  agent {
    dockerfile true 
  }
  stages { 
        stage("Build") {
          steps {
            sh 'node --version'
            sh 'yarn --version'
            sh 'yarn install'
            sh 'nginx -t'
            sh 'nginx'
            // sh 'npm run build'
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
