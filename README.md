# Todo App

This is a simple Todo application built with React. It allows users to add, edit, delete, and mark todo items as completed or pending.

## Project Structure

The project consists of the following main files:

- `src/App.jsx`: The main component that manages the state of todos and renders other components.
- `src/components/Header.jsx`: A component for the app header (not provided in the code snippets).
- `src/components/AddTodo.jsx`: A component for adding new todo items.
- `src/components/ToDoList.jsx`: A component for displaying and managing the list of todos.
- `src/main.jsx`: The entry point of the application.

## Features

- Add new todo items with a title and description
- Edit existing todo items
- Mark todo items as completed or pending
- Delete todo items
- View a list of all todo items

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running:

```
npm install
```

## Running the Application

To run the application in development mode:

1. Navigate to the project directory in your terminal.
2. Run the following command:

```
npm run dev
```

3. Open your browser and go to `http://localhost:5173` (or the port specified in your terminal).

## Building for Production

To build the app for production:

1. Run the following command:

```
npm run build
```

2. The built files will be in the `dist` directory.

## Development Notes

- The project uses React with hooks for state management.
- PropTypes validation is missing and should be added to improve code quality and catch potential errors.
- The React import in some components is unused and can be removed if not needed for JSX transformation in your build setup.
