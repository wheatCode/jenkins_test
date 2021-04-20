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
    stage("Environment") {
      steps {
        sh 'node --version'
        sh 'npm --version'
        sh 'rm -rf frontend.zip'
      }
    }
    stage("Build") {
      steps {
        sh 'npm install'
        sh 'CI='' npm run build'
        sh 'ls -al'
      }
    }
    stage('Test') {
      steps {
          echo 'Testing'
      }
    } 
  }  
  post {
      always {
          archiveArtifacts artifacts: 'frontend.zip', fingerprint: true
      }
  }
}
