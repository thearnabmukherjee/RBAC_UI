## Angular Application Setup and Usage Guide

**Step 1: Prerequisites**
Before starting, ensure the following tools are installed on your machine:
Node.js (LTS version)
You can download it from the official Node.js website: https://nodejs.org/.
Verify installation by running:

```js
node -v
```
```js
npm -v
```
If these commands return versions of node and npm, it means they are correctly installed.

**Angular CLI**

Angular CLI is required to build, run, and serve the Angular application.
Install Angular CLI globally using npm:
```js
npm install -g @angular/cli
```
Verify installation by running:
```js
ng version
```
________________________________________
**Step 2: Install Project Dependencies**
Install dependencies:

•	Navigate to the project directory:

•	Run the following command to install all the dependencies defined in the package.json file:
```js
npm install
```
________________________________________
**Step 3: Run the Application**
1.	Serve the application:
2. After the dependencies are installed, run the Angular development server by executing:
```js
ng serve
```

3.This will start the application and serve it on http://localhost:4200/.

4. Access the application:
5. Open your browser and go to http://localhost:4200/ to view the login page.
________________________________________
**Step 4: Test the Application**
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
**Step 5: Stopping the Application**
1.	Stop the running server:
o	In the command line,
press Ctrl + C to stop the application.
________________________________________
**Step 6: Build the Application for Production**
1.	Create a production build:
o	If you want to create a production-ready build (optimized for performance), use the following command:
```js
ng build --prod
```

2.	Serve the production build:
o	After the build is complete, the production files will be located in the dist/ folder. You can use any web server to serve these files.
________________________________________
**Step 7: Troubleshooting Commands**
1.	If there are issues with dependencies, try installing them with the following command:
```js
npm install --legacy-peer-deps
```
2.	Change the port (if localhost:4200 is occupied by another service):
 ```js
ng serve --port 4300
```
3.	Clear npm cache (if there are issues with npm packages):
```js
npm cache clean --force
```


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



### **Project Description: Angular RBAC_UI**

This Angular application provides a user-friendly interface for managing users. It supports two roles: **Admin** and **User**, each with distinct functionalities and dashboards.

---

### **How the Application Works**

1. **Login Page**:
   - When the application starts, the user is greeted with a login page.
   - Users must enter their email, password, and role (Admin/User) to log in.
   - Credentials are validated using the `AuthService`.

2. **Roles and Dashboards**:
   - **Admin Role**:
     - After logging in as an Admin, the user is redirected to the **Admin Dashboard**.
     - The Admin Dashboard allows administrators to manage the users in the system:
       - **View User List**: Displays all registered users with their details.
       - **Add User**: Opens a modal where a new user can be added by filling in their name, email, and role.
       - **Edit User**: Opens a modal pre-filled with user details to update.
       - **Delete User**: Removes a user from the system.
     

   - **User Role**:
     - After logging in as a User, the user is redirected to the **User Dashboard**.
     - The User Dashboard provides a simplified interface:
       - Displays the user's current status (e.g., Student, Employed, Unemployed).
       - Allows users to update their status using a dropdown menu.
       

---

### **Core Functionalities**

#### **Authentication (Login)**:
- Users must enter valid credentials to access the respective dashboards.
- Validation ensures only valid combinations of email, password, and role are allowed.
- Admins and users are directed to their specific dashboards after successful login.

#### **Admin Dashboard**:
- **Add User**: Allows the admin to register a new user with basic details.
- **Edit User**: Enables the admin to update user details.
- **Delete User**: Lets the admin remove a user from the list.
- **User List Display**: A table shows all users, their roles, and actions to edit or delete them.

#### **User Dashboard**:
- **View Current Status**: Displays the logged-in user's current role/status.
- **Update Status**: Users can change their status using a dropdown menu.
- The updated status is saved and displayed in real-time.

#### **Global Logout**:
- Clears the session and returns the user to the login screen.

---

### **Key Features**

1. **Role-Based Access Control**:
   - Admins have full control over user management.
   - Users can only view and update their own status.

2. **Modular Design**:
   - Separate components for login, admin dashboard, user dashboard, and modals for adding/editing users.

3. **Data Persistence**:
   - Users and their details are managed via a service (`UserService`), simulating a backend.

4. **Dynamic Modal**:
   - Reusable modal component for adding or editing users.

5. **Responsive UI**:
   - Uses Bulma CSS for styling, ensuring a clean and responsive layout.

---

### **How to Login and Navigate**

#### **Admin Login**:
1. Enter email: `admin@example.com`.
2. Enter password: `admin123`.
3. Select the role: `Admin`.
4. Click "Login".
   - You will be redirected to the Admin Dashboard with the ability to manage users.

#### **User Login**:
1. Enter email: `user@example.com`.
2. Enter password: `user123`.
3. Select the role: `User`.
4. Click "Login".
   - You will be redirected to the User Dashboard to view and update your status.

---

### **Technologies Used**

- **Frontend Framework**: Angular
- **Styling**: Bulma CSS
- **Data Management**: Angular Services
- **Routing**: Angular Router for navigation between pages
- **Dynamic UI**: Angular Two-Way Binding (`ngModel`) and Event Binding

---

### **Purpose of the Application**

This application demonstrates how to:
1. Build a role-based authentication and authorization system in Angular.
2. Implement CRUD operations for user management.
3. Create reusable components like modals for dynamic forms.
4. Use Angular's routing and services to create a modular, scalable architecture.

It is suitable for learning purposes and can be expanded to include a real backend and additional features such as search, filtering, and pagination for the user list.

