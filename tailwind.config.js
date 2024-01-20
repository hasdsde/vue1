/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        screens: {
            'mobile': '640px',
            'laptop': '1080px',
            'monitor': '2160px'
        }
    },
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'login-bg': "url('/public/img/bg.jpg')",
            }
        },
    },
    plugins: [],
}

