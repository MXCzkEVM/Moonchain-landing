/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-in": {
          "from": { boxShadow: "inset 0 0 0 0.01px rgb(82 82 91)" },
          "to": { boxShadow: "inset 10em 0 0 0.01px rgb(82 82 91)", color: "#fff" },
        },
        "slide-out": {
          "from": { boxShadow: "inset -10em 0 0 0.01px rgb(82 82 91)", color: "#fff" },
          "to": { boxShadow: "inset 0 0 0 0.01px rgb(82 82 91)" },
        },
        "slide-in-dark": {
          "from": { boxShadow: "inset 0 0 0 0.01px rgb(156 163 175)" },
          "to": { boxShadow: "inset 10em 0 0 0.01px rgb(156 163 175)", color: "#000" },
        },
        "slide-out-dark": {
          "from": { boxShadow: "inset -10em 0 0 0.01px rgb(156 163 175)", color: "#000" },
          "to": { boxShadow: "inset 0 0 0 0.01px rgb(156 163 175)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in": "slide-in 0.4s forwards",
        "slide-out": "slide-out 0.4s forwards",
        "slide-in-dark": "slide-in-dark 0.4s forwards",
        "slide-out-dark": "slide-out-dark 0.4s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}