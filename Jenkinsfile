pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t lost-found-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker stop lost-found-container || exit 0'
                bat 'docker rm lost-found-container || exit 0'
                bat 'docker run -d --name lost-found-container -p 3000:3000 lost-found-app'
            }
        }
    }
}