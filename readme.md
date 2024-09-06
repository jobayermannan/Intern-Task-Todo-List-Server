
### Backend README.md

Here's the [`README.md`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FJob_task_from_Company%2FInternShala-Task%2FTask-todo-list-client%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Job_task_from_Company\InternShala-Task\Task-todo-list-client\README.md") file for the backend, which you can place in the root of your backend directory:

```markdown
# To-Do List Application - Backend

This is the backend part of the To-Do List application built using Node.js, Express, and MongoDB.

## Requirements

### Endpoints:
- **GET**: Fetch all tasks.
- **POST**: Add a new task.
- **PUT**: Update a task's content or status (complete/incomplete).
- **DELETE**: Delete a task.

### Schema:
- **Task name**: String, required
- **Task description**: String, optional
- **Status**: Boolean, default: false

## Installation and Setup

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

### Setup
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>/backend
