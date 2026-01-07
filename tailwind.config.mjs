const config = {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: '#1A304D',
                    light: '#2A4060',
                    dark: '#0F2035',
                },
                teal: {
                    DEFAULT: '#6DBBB5',
                    hover: '#5AA6A0',
                    light: '#E0F2F1',
                },
                gold: {
                    DEFAULT: '#C9A75C',
                    hover: '#B8964B',
                    light: '#F5E6C4',
                },
                slate: {
                    50: '#F8FAFC',
                    100: '#F1F5F9',
                    800: '#1E293B',
                    900: '#0F172A',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Playfair Display', 'serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};

export default config;