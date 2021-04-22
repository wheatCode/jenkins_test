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
        sh 'rm -rf frontend-build.zip'
        sh 'rm -rf frontend.zip'
      }
    }
    stage("Build") {
      steps {
        sh 'npm install'
        sh 'CI="" npm run build'
        script{
            // zip zipFile: 'frontend.zip', archive: true, dir: ''
            zip zipFile: 'frontend-build.zip', archive: false, dir: './build/*.*'
          }
        sh 'ls -al'
      }
    }
    stage('Test') {
      steps {
          echo 'Testing'
      }
    } 
    stage('Upload S3') {
      steps {
          withAWS(credentials: 'AWS_S3', region: 'ap-northeast-1') {
            s3Upload acl: 'PublicRead', bucket: 'monosparta-test', file: 'frontend-build.zip',path:"Jenkins/frontend-build.zip"
          }
      }
    } 
  }  
  post {
      always {
          archiveArtifacts artifacts: 'frontend.zip', fingerprint: true
      }
  }
}
