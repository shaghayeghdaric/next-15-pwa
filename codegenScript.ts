const { execSync } = require("child_process");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, ".env") });

// Get the base URL from the .env file
const baseUrl = process.env.NEXT_PUBLIC_BASE_ENDPOINT || "http://91.107.145.174/swagger/";

// Step 1: Generate API client using the OpenAPI spec
const generateApiClient = () => {
  const endpoints = [
    {
      name: "pms",
      url: process.env.SWAGGER_ENDPOINT, // Updated to use direct Swagger URL
      command: "",
    },
  ];

  endpoints.forEach((endpoint) => {
    const openapiCommand = `bun run openapi-rq -i ${endpoint.url} -o src/services/${endpoint.name} ${endpoint.command} --request request.ts --format biome --lint biome --operationId --enums typescript --base ${baseUrl}`;
    try {
      execSync(openapiCommand, { stdio: "inherit" });
      // biome-ignore lint/suspicious/noConsoleLog: <explanation>
      console.log(`Successfully generated API client for ${endpoint.name}`);
    } catch (error) {
      console.error(`Error executing code generation script for ${endpoint.name}:`, error);
      process.exit(1);
    }
  });
};

const run = () => {
  generateApiClient();
};

run();
