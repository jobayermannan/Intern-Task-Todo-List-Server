To-Do List Application Backend
This is the backend for a basic to-do list application built using the MERN stack. The backend is built with Node.js, Express, and MongoDB. It provides endpoints to create, read, update, and delete tasks.

Requirements
- Node.js
- MongoDB

Getting Started
1. Clone the Repository

```sh
git clone https://github.com/yourusername/todo-server-task.git
cd todo-server-task
```

2. Install Dependencies

```sh
npm install
```

3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following:

```sh
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

4. Run the Server

```sh
npm start
```

The server will start on the port specified in the `.env` file (default is 5000).

API Endpoints
- Fetch All Tasks
	- URL: `/api/tasks`
	- Method: GET
	- Description: Fetch all tasks.

- Add a New Task
	- URL: `/api/tasks`
	- Method: POST
	- Description: Add a new task.
	- Body:

		```sh
		{
			"name": "Task Name",
			"description": "Task Description",
			"status": false
		}
		```

- Update a Task
	- URL: `/api/tasks/:id`
	- Method: PUT
	- Description: Update a task's content or status.
	- Body:

		```sh
		{
			"name": "Updated Task Name",
			"description": "Updated Task Description",
			"status": true
		}
		```

- Delete a Task
	- URL: `/api/tasks/:id`
	- Method: DELETE
	- Description: Delete a task.

Project Structure

```
root/
├── config/
│   └── db.js
├── model/
│   └── taskModel.js
├── routes/
│   └── taskRoutes.js
├── server.js
└── vercel.json
```
