  // tailwind.config.js
  module.exports = {
    // purge: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
      fontFamily: {
        'roboto': 'Roboto, sans-serif',
        'robotoFlex': 'Roboto Flex, sans-serif',
        'consolas': 'Consolas, sans-serif'
      },

      // borderWidth: {
      //   DEFAULT: '1px',
      //   '0': '0',
      //   'adaptiv': '0px 22.5vh'
      // },
  
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '100%': '100%',
        '150%': '150%', 
        '200%': '200%', 
      },

      // borderWidth: {
      //   'custom': '0 22.5vh',
      // },
  
      extend: {
        backgroundImage: {
          'todoList': 'url(/image_to_posts/todo.png)',
        }
      },
        content: {
          'menuMoore': 'url(/image_to_posts/menuMoore.png)',
        }
    },
     variants: {
       extend: {},
     },
     plugins: [],
   }