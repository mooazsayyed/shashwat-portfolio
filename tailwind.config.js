/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'neon-blue': 'rgb(var(--color-neon-blue) / <alpha-value>)',
				'neon-pink': 'rgb(var(--color-neon-pink) / <alpha-value>)',
				'neon-green': 'rgb(var(--color-neon-green) / <alpha-value>)',
				'neon-purple': 'rgb(var(--color-neon-purple) / <alpha-value>)',
				space: 'rgb(var(--color-space) / <alpha-value>)',
				'space-light': 'rgb(var(--color-space-light) / <alpha-value>)',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			backgroundImage: {
				'space-gradient': 'linear-gradient(to bottom, #0a0c23, #141941)'
			},
			animation: {
				'spin-slow': 'spin 15s linear infinite',
				'spin-reverse-slow': 'spin 25s linear infinite reverse',
				blink: 'blink 1s step-end infinite',
				float: 'float 6s ease-in-out infinite',
				'spin-slower': 'spin 20s linear infinite reverse'
			},
			keyframes: {
				float: {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};