Development:
 - Run **yarn add** to add dependencies.
 - Run **yarn start** to start dev mode.

Production Prerequisites:
 - **Google Client ID**: Since OAUTH requires a Google Client ID, add one via the Google Developer Console. Steps can be found here: https://developers.google.com/identity/sign-in/web/sign-in
 - Make sure to add **http://localhost:80** and **http://localhost:3000** to  Authorized JavaScript origins section of the Client ID
 - Save the Client ID created to be used in the next section.

Production Execution:
 1. In the project root folder, build the Docker Image using **docker build --build-arg REACT_APP_GOOGLEOAUTHID=OAUTH_CLIENT_ID_CREATED_ABOVE -t budget-planner .**
 2. Run the Docker Image using  **docker run -p 80:80 --rm budget-planner:latest**
 3. Visit **localhost:80** 

  
 
 
