/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',  // Ensure this path matches where your HTML files are located
    './bookings/templates/**/*.html',  // Add paths to your app's templates
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
