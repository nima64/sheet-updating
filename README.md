# My Express App

This is a simple Express application built with TypeScript. It serves as a template for creating a web application using Express and TypeScript.

## Project Structure

```
my-express-app
├── src
│   ├── app.ts               # Entry point of the application
│   ├── controllers          # Contains controller files
│   │   └── index.ts         # Index controller
│   ├── routes               # Contains route files
│   │   └── index.ts         # Route definitions
│   └── types                # Contains type definitions
│       └── index.ts         # Custom types for requests and responses
├── package.json             # NPM package configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd my-express-app
npm install
```

## Usage

To run the application, use the following command:

```bash
npm start
```

This will start the Express server on the default port (3000).

## API Endpoints

- `GET /` - Returns a welcome message from the IndexController.

## Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see.

## License

This project is licensed under the MIT License.