pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    } 
  }
  environment {
      npm_config_cache = 'npm-cache'
      build_version = 'v1.0.0'
  }
  stages { 
    stage("Version") {
      steps {
        sh 'node --version'
        sh 'npm --version'
      }
    }
    stage("Build") {
      steps {
        sh 'rm -rf frontend-build.zip'
        sh 'rm -rf frontend.zip'
        sh 'npm install'
        sh 'CI= npm run build'
        dir("html") {
            sh "ls -al"
        }
        script{
            zip zipFile: "frontend-${build_version}.zip", archive: true, dir: ''
            zip zipFile: "frontend-build-${build_version}.zip", archive: false, dir: 'html'
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
            s3Upload acl: 'PublicRead', bucket: 'monosparta-test', file: "frontend-build-${build_version}.zip",path:"Jenkins/frontend-build-${build_version}.zip"
          }
      }
    } 
  }  
  post {
      always {
          archiveArtifacts artifacts: "frontend-build-${build_version}.zip", fingerprint: true
      }
  }
}
