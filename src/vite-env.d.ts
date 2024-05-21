/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly VITE_SOME_KEY: number;
    // add more environment variables here as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }