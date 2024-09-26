// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';


export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.API_KEY':JSON.stringify(process.env.API_KEY)
  }
});
