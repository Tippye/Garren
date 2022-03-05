module.exports = {
    content: [],
    purge: ['/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}
