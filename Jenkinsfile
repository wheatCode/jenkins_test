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
            // archiveArtifacts artifacts: '*.* jar', fingerprint: true
            sh 'node --version'
            sh 'npm --version'
            sh 'npm install'
            sh 'npm run build'
            archiveArtifacts '*.*'
            sh 'ls -al'
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
              archive 'app/build/**'
              sh 'ls -al'
          }
        }
  }
  post {
      always {
          archiveArtifacts artifacts: '*', fingerprint: true
      }
  }
}
