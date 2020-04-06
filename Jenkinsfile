pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') { 
            steps {
                sh "npm install --silent gh-pages@2.1.1"
                sh 'npm run deploy' 
            }
        }
        
    }
}