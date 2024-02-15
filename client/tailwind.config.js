/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-banner": "url('./src/assets/banner/bg-banner.jpg')",
        "bg-share": "url('./src/assets/banner/shareImg.jpg')",
        "bg-shop": "url('./src/assets/banner/bannerShop.jpg')",
      },
    },
  },
  plugins: [],
};
