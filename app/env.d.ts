/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_WEBSOCKET_URL: string;
  readonly VITE_DEFAULT_N8N_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_DESCRIPTION: string;
  readonly VITE_NODE_ENV: string;
  readonly VITE_DEBUG_MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
