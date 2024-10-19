Node.js app with docker is a perfect way to ensure that it runs smoothly across different devices.

Step 1: Install Docker
https://www.docker.com/products/docker-desktop/

For Windows, open the docker desktop and run the command in terminal: 
docker –version

Step 2: Pull the docker image

Run the following command to pull the image:
docker pull utsavbajracharya/weather-app

Step 3: Run the Docker image locally to ensure it works:

Run the following command in the same directory where your docker file is located:
docker run -p 3000:3000 my-weather-app

Step 4: Ensure the application is Running

a. Open a browser and go to:
http://localhost:3000

 


b. To list all running containers and find the container_id
Run command: docker ps

You can view it in the docker desktop as well, 

 
