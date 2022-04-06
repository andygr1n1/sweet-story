const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    corePlugins: {
        preflight: false,
    },
    prefix: 'tw-',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            caveat: ['Caveat', ...defaultTheme.fontFamily.sans],
            sans: [defaultTheme.fontFamily.sans],
            serif: [defaultTheme.fontFamily.serif],
            mono: [defaultTheme.fontFamily.mono],
        },
        extend: {},
    },
    plugins: [],
}
