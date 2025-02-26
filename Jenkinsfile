pipeline {
    agent any

    environment {
        DOCKER_USER = "moyoboza"  // ⚠️ Mets ton username Docker Hub
        FRONT_IMAGE = "$DOCKER_USER/site-ecom-frontend"
        BACK_IMAGE = "$DOCKER_USER/site-ecom-backend"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/moyoboza/site-e-commerce' // ⚠️ Modifie avec ton repo GitHub
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                script {
                    sh 'docker build -t $FRONT_IMAGE:$DOCKER_TAG -f frontend/Dockerfile.frontend frontend/'
                }
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                script {
                    sh 'docker build -t $BACK_IMAGE:$DOCKER_TAG -f backend/Dockerfile backend/'
                }
            }
        }

        stage('Run Tests (Backend avec Jest)') {
            steps {
                script {
                    sh 'docker run --rm $BACK_IMAGE:$DOCKER_TAG npm test -- --ci --coverage --passWithNoTests --forceExit'
                }
            }
        }

        stage('Push Docker Images to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'DOCKER_HUB', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    script {
                        sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                        sh 'docker push $FRONT_IMAGE:$DOCKER_TAG'
                        sh 'docker push $BACK_IMAGE:$DOCKER_TAG'
                    }
                }
            }
        }

        stage('Deploy Containers') {
            steps {
                script {
                    sh 'docker compose up -d'
                    // ⚠️ Vérifie que ton `docker-compose.yml` est bien configuré pour lancer frontend et backend
                }
            }
        }
    }

    post {
        success {
            echo "🚀 Déploiement réussi !"
        }
        failure {
            echo "❌ Échec du pipeline"
        }
    }
}

