module.exports = {
  content: [
    './assets/html/*.html',
    './src/*.js',
    './assets/styles/*.css',
  ],
  theme: {
    extend: {
      keyframes: {
        gentlePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gentleGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.4), 0 0 15px #f8587b' },
          '50%': { boxShadow: '0 0 10px rgba(255, 255, 255, 0.6), 0 0 25px #f8587b' },
        },
      },
      animation: {
        gentlePulse: 'gentlePulse 2s ease-in-out infinite',
        gentleFloat: 'gentleFloat 4s ease-in-out infinite',
        gentleGlow: 'gentleGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
