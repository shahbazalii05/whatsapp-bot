/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navbackground: "rgb(32, 44, 51)",
        foreground: "var(--foreground)",
        companycolor:"var(42A9C4)",
        glass:"rgb(209, 215, 219)",
        navbarborder:"rgba(134, 150, 160, .15)",
        icondiv:"bg-[#2a3942]",
        toolip:"rgb(255, 255, 255)",
        backgrounddefault:"#111b21",
        chats:"rgb(233, 237, 239)",
        bginput:"rgb(32, 44, 51)",
        btncolor:"rgb(134, 150, 160)",
        sidebg:"rgb(34, 46, 53)",
        sidepara:"rgb(174, 186, 193)",
        sidebtn:"rgb(0, 168, 132)",
        sidepara1:"rgb(102, 119, 129)",
        divbg:"rgb(209, 215, 219)",
        btn1color:"rgb(0, 168, 132)",
        btnactive:"rgb(10, 51, 44)"
       
      },
      fontFamily: {
        segoe: ['SegoeUI', 'sans-serif'],
        droid: ['DroidSerif', 'serif'],
        sfpro: ['SFProDisplay', 'sans-serif'],
    },
    },
  },
  plugins: [],
};
