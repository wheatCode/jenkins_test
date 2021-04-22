pipeline {
  agent any
  environment {
      npm_config_cache = 'npm-cache'
  }
  stages { 
    // stage("Environment") {
    //   steps {
    //     sh 'node --version'
    //     sh 'npm --version'
    //     sh 'rm -rf frontend.zip'
    //   }
    // }
    // stage("Build") {
    //   steps {
    //     sh 'npm install'
    //     sh 'CI="" npm run build'
    //     script{
    //         zip zipFile: 'frontend.zip', archive: true, dir: ''
    //       }
    //     sh 'ls -al'
    //   }
    // }
    // stage('Test') {
    //   steps {
    //       echo 'Testing'
    //   }
    // } 
    stage('Upload S3') {
      steps {
          script{
            zip zipFile: 'frontend.zip', archive: true, dir: ''
          }
          withAWS(credentials: 'AWS_S3', region: 'ap-northeast-1') {
            s3Upload acl: 'PublicRead', bucket: 'monosparta-test', file: 'https://jenkins.monosparta.org/job/go-hiking-web-delpoy/lastSuccessfulBuild/artifact/frontend.zip',path:"Jenkins/frontend.zip"
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
