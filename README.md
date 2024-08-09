# Redirector
A simple URL redirect service using an in-memory JSON file. This project is built with TypeScript and Express.js.

## Project Structure

```
redirector/
├── .gitignore
├── Dockerfile
├── package.json
├── tsconfig.json
└── src/
    ├── app.ts
    ├── redirects.json
    └── redirect.ts
```

## Setup
### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/itaibo/redirector.git
    cd redirector
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Configuration

The URL redirects are configured in the `src/redirects.json` file. Here is an example:

```json
{
  "example": "https://www.example.com",
  "example/nested": "https://nested.example.com"
}
```

### Build

To build the project, run:

```bash
npm run build
```

### Run

To start the project, run:

```bash
npm start
```

The service will be available at `http://localhost:3000`, unless specified another one in the `PORT` env variable.

### Docker

To build and run the project using Docker:

1. Build the Docker image:
    ```bash
    docker build -t redirector .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 3000:3000 redirector
    ```

The service will be available at `http://localhost:3000`.

## Development

### Code Formatting

This project uses Prettier for code formatting. To format the code, run:

```bash
npm run format
```

### Project Files

- **src/app.ts**: Entry point of the application
- **src/redirect.ts**: Module responsible for loading and serving redirects
- **src/redirects.json**: JSON file containing URL redirects

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
