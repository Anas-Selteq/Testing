pipeline { 
	 agent any 
	 stages { 
		 stage('Clone repository') { 
			 steps { 
				 sh 'cd /home/microservices'
				 git credentialsId: 'gitcredentional', url: 'https://github.com/rubnawazgondal/expert-staging-net.git'
			 } 
		 }
		stage('Build') { 
			 steps  {
				 sh 'docker build -t selteq2/expert-staging-net:latest -f Dockerfile .'
				 sh 'docker images'
				 sh 'docker stop expert-staging-net' 
				 sh 'docker rm expert-staging-net' 
				 sh 'docker create --name expert-staging-net -p 6995:3000 selteq2/expert-staging-net:latest' 
				 sh 'docker ps' 
				 sh 'docker start expert-staging-net' 
				 sh 'docker push selteq2/expert-staging-net:latest' 
			 } 
		 } 
	 } 
 } 
