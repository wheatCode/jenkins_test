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
              zip zipFile: '${GIT_BRANCH}.zip', archive: true, dir: '/'
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
            sshagent (credentials: ['10.2.9.100']) {
              sh "ssh -vvv -o StrictHostKeyChecking=no -T deploy@10.2.9.100"
              sh "ls -al"
            }
          }
        }
  }
  post {
      always {
          archiveArtifacts artifacts: '${GIT_BRANCH}.zip', fingerprint: true
      }
  }
}
