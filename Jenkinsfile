pipeline {
    agent {
        docker {
            image 'node:lts'
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
                sh "git config --global user.email 'jimchiang001@gmail.com' && git config --global user.name 'dohkno'"
                sh "npm install --silent gh-pages@2.1.1"
                sh 'npm run deploy' 
            }
        }
        
    }
}