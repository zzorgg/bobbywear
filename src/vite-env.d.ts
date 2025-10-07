/// <reference types="vite/client" />

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module 'swiper/css';
declare module 'swiper/css/effect-fade';