/// <reference types="vite/client" />

declare module '*.css' {
  const content: string
  export default content
}

declare module 'bootstrap/dist/css/bootstrap.min.css'
declare module 'bootstrap/dist/js/bootstrap.bundle.min.js'
declare module '../src/styles/backfill.css'
