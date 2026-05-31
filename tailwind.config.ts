import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				cyber: {
					dark: '#0c0c0c',     // Fondo principal
					green: '#4af626',    // Fósforo verde (acento principal)
					amber: '#ffb000',    // Fósforo ámbar (para alertas o temas alternativos)
					light: '#d4d4d4',    // Texto principal
					gray: '#333333'      // Bordes sutiles
				}
			}
		}
	},
	plugins: []
} satisfies Config;
