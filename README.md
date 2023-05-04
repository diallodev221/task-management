

# Task Manager App

This is a simple project for a task manager application using Node.js and Angular. The application allows users to create, update, and delete tasks, as well as mark them as completed or not completed.

## Installation

### Backend

1. Clone the repository.
2. Install the required packages using `npm install`.
3. Create a `.env` file in the root directory with the following environment variables:

```
PORT=3000
MONGODB_URI=<your-mongodb-uri>
```

4. Run the backend using `npm start`.

### Frontend

1. Navigate to the `frontend` directory.
2. Install the required packages using `npm install`.
3. Run the frontend using `ng serve`.

## Usage

1. Navigate to `http://localhost:4200` in your browser.
2. To create a task, click on the "New Task" button and fill in the form.
3. To edit a task, click on the task's title and make the necessary changes in the form.
4. To mark a task as completed or not completed, click on the checkbox next to the task's title.
5. To delete a task, click on the trash can icon next to the task's title.

## Dependencies

### Backend

- `express` - A web framework for Node.js
- `mongoose` - A MongoDB object modeling tool designed to work in an asynchronous environment
- `dotenv` - A zero-dependency module that loads environment variables from a `.env` file into `process.env`

- `cors` CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API

### Frontend

- `Angular` - A TypeScript-based open-source web application framework
- `rxjs` - A library for reactive programming using Observables

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.