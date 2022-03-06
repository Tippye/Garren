module.exports = {
    content: [],
    purge: ['/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            keyframes: {
                bounce: {
                    'from,20%, 53%, to': {
                        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                        transform: 'translate3d(0, 0, 0)'
                    },
                    '40%,43%': {
                        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
                        transform: 'translate3d(0, -30px, 0) scaleY(1.1)'
                    },
                    '70%': {
                        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
                        transform: 'translate3d(0, -15px, 0) scaleY(1.05)'
                    },
                    '80%': {
                        transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                        transform: 'translate3d(0, 0, 0) scaleY(0.95)'
                    },
                    '90%': {
                        transform: 'translate3d(0, -4px, 0) scaleY(1.02)'
                    }
                },
                bounceIn: {
                    'from,20 %,40 %,60 %,80 %,to': {
                        animationTimingFunction: 'cubic - bezier(0.215, 0.61, 0.355, 1)'
                    },
                    '0%': {
                        opacity: 0,
                        transform: 'scale3d(0.3, 0.3, 0.3)'
                    },
                    '20%': {
                        transform: 'scale3d(1.1, 1.1, 1.1)'
                    },
                    '40%': {
                        transform: 'scale3d(0.9, 0.9, 0.9)'
                    },
                    '60%': {
                        opacity: 1,
                        transform: 'scale3d(1.03, 1.03, 1.03)'
                    },
                    '80%': {
                        transform: 'scale3d(0.97, 0.97, 0.97)'
                    },
                    'to': {
                        opacity: 1,
                        transform: 'scale3d(1, 1, 1)'
                    }
                },
                bounceInDown: {
                    'from,60%,75%,90%,to': {
                        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
                    },
                    '0%': {
                        opacity: 0,
                        transform: 'translate3d(0, -3000px, 0) scaleY(3)'
                    },
                    '60%': {
                        opacity: 1,
                        transform: 'translate3d(0, 25px, 0) scaleY(0.9)'
                    },
                    '75%': {
                        transform: 'translate3d(0, -10px, 0) scaleY(0.95)'
                    },
                    '90%': {
                        transform: 'translate3d(0, 5px, 0) scaleY(0.985)'
                    },
                    'to': {
                        transform: 'translate3d(0, 0, 0)'
                    }
                },
                slideInUp: {
                    'from': {
                        transform: 'translate3d(0, 100%, 0)',
                        visibility: 'visible'
                    },

                    'to': {
                        transform: 'translate3d(0, 0, 0)'
                    }
                },
                slideInLeft: {
                    'from': {
                        transform: 'translate3d(-100%, 0, 0)',
                        visibility: 'visible'
                    },
                    'to': {
                        transform: 'translate3d(0, 0, 0)'
                    }
                },
                slideInRight: {
                    'from': {
                        transform: 'translate3d(100%, 0, 0)',
                        visibility: 'visible'
                    },
                    'to': {
                        transform: 'translate3d(0, 0, 0)'
                    }
                }
            },
            animation: {
                bounce: 'bounce 1s',
                bounceIn: 'bounceIn 0.75s',
                bounceInDown: 'bounceInDown 1s',

                slideInUp: 'slideInUp 1s',
                slideInLeft: 'slideInLeft 1s',
                slideInRight: 'slideInRight 1s'
            }
        },
    },
    variants: {
        extend: {
            animation: ['hover', 'group-hover']
        }
    }
    ,
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}
