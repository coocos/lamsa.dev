/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        swirl: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 440' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1441 390.002L1360.94 408.484C1280.89 426.276 1120.78 464.277 960.667 417.639C800.556 371.002 640.444 243.18 480.333 187.388C320.222 132.632 160.111 149.905 80.0556 159.751L6.61612e-06 168.906V58.3579H80.0556C160.111 58.3579 320.222 58.3579 480.333 58.3579C640.444 58.3579 800.556 58.3579 960.667 58.3579C1120.78 58.3579 1280.89 58.3579 1360.94 58.3579H1441V390.002Z' fill='%23DB2878'/%3E%3Cpath d='M1441 331.644L1360.94 350.126C1280.89 367.918 1151.62 225.648 991.51 179.011C831.399 132.373 628.489 214.192 468.378 158.4C308.267 103.644 160.111 91.5476 80.0556 101.393L6.61612e-06 110.548V0H80.0556C160.111 0 320.222 0 480.333 0C640.444 0 800.556 0 960.667 0C1120.78 0 1280.89 0 1360.94 0H1441V331.644Z' fill='url(%23paint0_linear_25_16)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_25_16' x1='-15.7045' y1='7.65776e-05' x2='1276.34' y2='-597.326' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23EC4899'/%3E%3Cstop offset='0.317708' stop-color='%23DB2878'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A")`,
      },
    },
  },
  plugins: [],
};
