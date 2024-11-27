Angular Application Setup and Usage Guide
Step 1: Prerequisites
Before starting, ensure the following tools are installed on your machine:
Node.js (LTS version)
You can download it from the official Node.js website: https://nodejs.org/.
Verify installation by running:
node -v
npm -v
If these commands return versions of node and npm, it means they are correctly installed.

Angular CLI

Angular CLI is required to build, run, and serve the Angular application.
Install Angular CLI globally using npm:
npm install -g @angular/cli
Verify installation by running:
ng version
________________________________________
Step 2: Install Project Dependencies
Install dependencies:

•	Navigate to the project directory:
•	Run the following command to install all the dependencies defined in the package.json file:
npm install
________________________________________
Step 3: Run the Application
1.	Serve the application:
o	After the dependencies are installed, run the Angular development server by executing:
ng serve
o	This will start the application and serve it on http://localhost:4200/.
2.	Access the application:
o	Open your browser and go to http://localhost:4200/ to view the login page.
________________________________________
Step 4: Test the Application
1.	Login as Admin:
o	Email: admin@example.com
o	Password: admin123
o	Role: Select "Admin" from the dropdown and click Login.
o	You will be redirected to the Admin Dashboard.
2.	Login as User:
o	Email: user@example.com
o	Password: user123
o	Role: Select "User" from the dropdown and click Login.
o	You will be redirected to the User Dashboard.
________________________________________
Step 5: Stopping the Application
1.	Stop the running server:
o	In the command line, press Ctrl + C to stop the application.
________________________________________
Step 6: Build the Application for Production
1.	Create a production build:
o	If you want to create a production-ready build (optimized for performance), use the following command:
ng build --prod
2.	Serve the production build:
o	After the build is complete, the production files will be located in the dist/ folder. You can use any web server to serve these files.
________________________________________
Step 7: Troubleshooting Commands
1.	If there are issues with dependencies, try installing them with the following command:
npm install --legacy-peer-deps
2.	Change the port (if localhost:4200 is occupied by another service):
ng serve --port 4300
3.	Clear npm cache (if there are issues with npm packages):
npm cache clean --force


