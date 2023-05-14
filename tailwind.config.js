module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js',
    './app/javascript/**/*.tsx',
    './app/javascript/**/*.ts'
  ],
  theme: {
    extend: {
      colors: {
        "bb-purple": "#5469D4",
        "bb-env": "#F1F5F9",
        "bb-border": "#E4E4E7",
        "bb-gray-700": "#37415",
        "bb-gray-600": "#4B5563",
        "bb-red": "#F56565",
        "bb-green": "#31C48D",
        "bb-yellow": "#F6B100",
        "nitro-gray-800": "#1F2937",
      },
      keyframes: {
        blurify: {
          '0%': { 'backdrop-filter': 'blur(0px)' },
          '100%': { 'backdrop-filter': 'blur(15px) ' },
        },
        stretch:{
          '0%':{transform: 'scale(1,0.5)'},
          '100%':{transform: 'scale(1,1)'},
        },
        appear:{
          '0%':{transform: 'translateY(100%)'},
          '100%':{transform: 'translateY(0%)'}
        } 
      },
      animation: {
        blurify: 'blurify 1s ease-in-out',
        stretch: 'stretch 0.25s ease-in-out',
        appear: 'appear 0.5s ease-out'
      },
      boxShadow: {
        "custom-box-shadow": "10px 10px 5px 200px rgba(0,0,0,1)",
      },
      fontFamily: {
        sans: ['Inter var'],
      },
    },
  }
}
