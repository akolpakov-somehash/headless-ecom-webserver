import * as dotenv from 'dotenv'
dotenv.config()

interface Env {
  CATALOG_GRPC_SERVER: string
  QUOTE_GRPC_SERVER: string
  SERVER_PORT: string
  DEFAULT_USER_ID: number
}

// Helper function to safely get environment variables with default values
function getEnvVar (name: string, defaultValue: string): string {
  const value = process.env[name]
  if (value === undefined || value === null || value === '') {
    return defaultValue
  }
  return value
}

const env: Env = {
  CATALOG_GRPC_SERVER: getEnvVar('CATALOG_GRPC_SERVER', 'localhost:50051'),
  QUOTE_GRPC_SERVER: getEnvVar('QUOTE_GRPC_SERVER', 'localhost:50052'),
  SERVER_PORT: getEnvVar('SERVER_PORT', '3000'),
  DEFAULT_USER_ID: parseInt(getEnvVar('DEFAULT_USER_ID', '-1'), 10)
}

export default env
