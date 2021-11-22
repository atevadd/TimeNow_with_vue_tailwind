// tailwind.config.js
module.exports = {
    corePlugins: {
        preflight: false,
    },
    mode: 'jit',
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            desktop: '1440px',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            orange: ' #ff7d1a',
            'pale-orange': '#ffede0',
            'very-dark-blue': '#1d2025',
            'dark-grayish-blue': '#68707d',
            'grayish-blue': '#b6bcc8',
            'light-grayish-blue': '#f7f8fd',
            'black-75': '#000000;',
        },
        extend: {

        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}