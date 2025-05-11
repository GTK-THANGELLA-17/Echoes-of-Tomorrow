
import type { Config } from "tailwindcss";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'birthday': ['"Pacifico"', 'cursive'],
				'dancing': ['"Dancing Script"', 'cursive'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				capsule: {
					purple: '#9b87f5',
					'purple-dark': '#7E69AB',
					'soft-gray': '#F1F0FB',
					'soft-purple': '#E5DEFF',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'reveal': {
					'0%': {
						opacity: '0',
						filter: 'blur(15px)',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						filter: 'blur(0)',
						transform: 'scale(1)'
					}
				},
				'celebrate': {
					'0%': {
						transform: 'scale(0) rotate(0deg)',
						opacity: '0'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						transform: 'scale(1.5) rotate(10deg)',
						opacity: '0'
					}
				},
				'celebrate-premium': {
					'0%': {
						transform: 'scale(0) rotate(0deg)',
						opacity: '0',
						filter: 'blur(4px)'
					},
					'25%': {
						opacity: '1',
						filter: 'blur(0)'
					},
					'50%': {
						transform: 'scale(1.2) rotate(5deg)'
					},
					'75%': {
						opacity: '1',
						transform: 'scale(1.1) rotate(-3deg)'
					},
					'100%': {
						transform: 'scale(1.8) rotate(10deg)',
						opacity: '0',
						filter: 'blur(8px)'
					}
				},
				'confetti': {
					'0%': {
						transform: 'translateY(0) rotateZ(0)',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100vh) rotateZ(720deg)',
						opacity: '0'
					}
				},
				'confetti-special': {
					'0%': {
						transform: 'translateY(0) rotateZ(0) scale(0.5)',
						opacity: '0'
					},
					'10%': {
						opacity: '1',
						transform: 'translateY(5vh) rotateZ(45deg) scale(1)'
					},
					'40%': {
						transform: 'translateY(40vh) rotateZ(180deg) scale(1.25)',
						opacity: '0.8'
					},
					'70%': {
						transform: 'translateY(70vh) rotateZ(360deg) scale(1)',
						opacity: '0.6'
					},
					'100%': {
						transform: 'translateY(120vh) rotateZ(720deg) scale(0.75)',
						opacity: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(-20px) rotate(5deg)'
					}
				},
				'float-premium': {
					'0%': {
						transform: 'translateY(0) rotate(0deg) scale(1)',
						filter: 'drop-shadow(0 0 0px rgba(255,192,203,0))'
					},
					'25%': {
						transform: 'translateY(-15px) rotate(3deg) scale(1.1)',
						filter: 'drop-shadow(0 5px 10px rgba(255,192,203,0.5))'
					},
					'50%': {
						transform: 'translateY(-25px) rotate(5deg) scale(1.05)',
						filter: 'drop-shadow(0 8px 15px rgba(255,192,203,0.3))'
					},
					'75%': {
						transform: 'translateY(-10px) rotate(2deg) scale(1.1)',
						filter: 'drop-shadow(0 5px 10px rgba(255,192,203,0.5))'
					},
					'100%': {
						transform: 'translateY(0) rotate(0deg) scale(1)',
						filter: 'drop-shadow(0 0 0px rgba(255,192,203,0))'
					}
				},
				'sparkle': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.5)',
						opacity: '0.5'
					}
				},
				'sparkle-premium': {
					'0%': {
						transform: 'scale(0.8) rotate(0deg)',
						opacity: '0.3',
						filter: 'blur(0px) brightness(1)'
					},
					'25%': {
						transform: 'scale(1.2) rotate(15deg)',
						opacity: '1',
						filter: 'blur(0px) brightness(1.5)'
					},
					'50%': {
						transform: 'scale(1.5) rotate(0deg)',
						opacity: '0.7',
						filter: 'blur(2px) brightness(2)'
					},
					'75%': {
						transform: 'scale(1.2) rotate(-15deg)',
						opacity: '1',
						filter: 'blur(0px) brightness(1.5)'
					},
					'100%': {
						transform: 'scale(0.8) rotate(0deg)',
						opacity: '0.3',
						filter: 'blur(0px) brightness(1)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '0.5',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05)'
					}
				},
				'pulse-grow': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.05)'
					}
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'reveal': 'reveal 1s ease-out forwards',
				'celebrate': 'celebrate 1.5s ease-out infinite',
				'celebrate-premium': 'celebrate-premium 3s ease-out infinite',
				'confetti': 'confetti 4s ease-out forwards',
				'confetti-special': 'confetti-special 6s ease-out forwards',
				'float': 'float 3s ease-in-out infinite',
				'float-premium': 'float-premium 6s ease-in-out infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'sparkle-premium': 'sparkle-premium 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'pulse-grow': 'pulse-grow 2s ease-in-out infinite',
				'float-slow': 'float 8s ease-in-out infinite',
				'float-medium': 'float 6s ease-in-out infinite',
				'float-fast': 'float 4s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
