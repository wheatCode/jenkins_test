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
            archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true
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
  // post {
  //     always {
  //         archiveArtifacts artifacts: '*', fingerprint: true
  //         // junit 'build/reports/**/*.xml'
  //     }
  // }
}
