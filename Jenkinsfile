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
        post {
          always {
              archiveArtifacts artifacts: 'generatedFile.jar', onlyIfSuccessful: true
          }
        }
        stage("Build") {
          steps {
            sh 'node --version'
            sh 'npm --version'
            // sh 'npm install'
            sh 'ls -al'
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
