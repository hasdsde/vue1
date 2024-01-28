/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'mobile': '640px',
            'laptop': '1080px',
            'monitor': '2160px'
        },
        extend: {
            backgroundImage: {
                'login-bg': "url('/public/img/bg.jpg')",
            },
            margin: {
                '5px': '5px',
            }
        },
    },
    plugins: [],
}

