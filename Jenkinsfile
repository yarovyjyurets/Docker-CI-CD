pipeline {
  agent any

  stages {
      stage('Build') {
          steps {
              echo 'Building...'
          }
      }
      stage('Test') {
          steps {
              echo 'Testing..'
          }
      }
      stage('Deploy') {
          steps {
              echo 'Deploying....'
          }
      }
  }

  // stages {
  //   stage('Cloning Git') {
  //     steps {
  //       git 'https://github.com/yarovyjyurets/Docker-CI-CD.git'
  //     }
  //   }
    
  //   stage('Docker version check') {
  //     steps {
  //       sh 'docker -v'
  //     }
  //   }

  //   stage('Building image') {
  //     steps{
  //       script {
  //         def imageName = registry + ":$BUILD_NUMBER";
  //         sh "echo ${imageName}";
  //         docker.build(imageName, "-f ./server/Dockerfile ./server");
  //       }
  //     }
  //   }
  // }
}