/// <reference types="vite/client" />

interface Window {
  Tawk_API?: {
    maximize: () => void;
    minimize: () => void;
    toggle: () => void;
  };
}
