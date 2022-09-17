/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        wavey: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23f2f4f6' fill-opacity='1' d='M0,288L30,266.7C60,245,120,203,180,197.3C240,192,300,224,360,218.7C420,213,480,171,540,165.3C600,160,660,192,720,213.3C780,235,840,245,900,256C960,267,1020,277,1080,272C1140,267,1200,245,1260,218.7C1320,192,1380,160,1410,144L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z'%3E%3C/path%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [],
};
