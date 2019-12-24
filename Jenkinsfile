pipeline {
  environment {
    registry = "whoami7/server-app"
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/yarovyjyurets/Docker-CI-CD.git'
      }
    }
    
    stage('Docker version check') {
      steps {
        sh 'docker -v'
      }
    }

    stage('Building image') {
      steps{
        script {
          def imageName = registry + ":$BUILD_NUMBER";
          sh "echo ${imageName}";
          docker.build(imageName, "-f ./server/Dockerfile ./server");
        }
      }
    }
  }
}