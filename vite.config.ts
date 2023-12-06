import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {
  // Common configuration for all environments
  const commonConfig = {
    plugins: [react()],
  };

  // Local configuration
  const localConfig = {
    ...commonConfig,
    define: {
      "process.env": { 
        REACT_APP_ENV: "local",
    }, 
  },
  };

  if (mode === "local") {
    return defineConfig(localConfig);
  }
  return defineConfig(commonConfig);
};
  // Production configuration
