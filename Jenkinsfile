pipeline {
  agent {
    dockerfile true 
  }
  stages { 
        stage("Build") {
          steps {
            sh 'node --version'
            sh 'npm --version'
            sh 'sudo chown -R 112:117 "/.npm"'
            sh 'npm install'
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
