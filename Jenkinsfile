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
            script{
              zip zipFile: 'frontend.zip', archive: true, dir: '/'
            }
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
              sh 'ls -al'
          }
        }
  }
  post {
      always {
          archiveArtifacts artifacts: 'frontend.zip', fingerprint: true
      }
  }
}
