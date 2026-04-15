pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t simple-ui-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f simple-container || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name simple-container simple-ui-app'
            }
        }
    }
}