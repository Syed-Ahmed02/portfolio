import { Inter, Roboto_Mono,Libre_Bodoni } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const libre_bodoni = Libre_Bodoni({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-libre-bodoni',
})