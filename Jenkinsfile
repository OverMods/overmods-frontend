node {
    def app

    stage('Clone') {
        checkout scm
    }

    stage('Build') {
        withEnv(['DOCKER_BUILDKIT=1']) {
            app = docker.build('mykola2312/overmods-frontend')
        }
    }

    stage('Push') {
        docker.withRegistry('https://registry.hub.docker.com', 'a2aa5264-dce1-4054-8828-8db95e3c6c3c') {
            app.push('v0.1.0')
        }
    }

    stage('Rollout') {
        sh('kubectl apply -f k8s/')
        sh('kubectl rollout restart statefulset frontend -n overmods')
    }
}
