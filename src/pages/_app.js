import { Footer } from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
//CALLING THE FONT FROM THE GOOGLE FONT
import { Montserrat } from "next/font/google";
import { Roboto } from "next/font/google";

//INITIALIZING THE FONT
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});
// const roboto = Roboto({
//   subsets: ["latin"],
//   variable: "--font-rob",
//   weight: ['700'],
// });

export default function App({ Component, pageProps }) {

  //FOR USING FONT FAMILY IN OUR PROGRAM WE USE THIS...

  return (
    //DECLARING THE FONTS...

    //ALWAYS AFTER CREATING A COMPONENT IMPORT IT...
    <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
