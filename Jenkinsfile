pipeline {
  agent {
    dockerfile true 
  }
  stages { 
        stage("Build") {
          steps {
            sh 'nginx -t'
            sh 'node --version'
            sh 'npm --version'
            sh 'sudo npm install'
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
