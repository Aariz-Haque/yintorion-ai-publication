// "use client"
// import './globals.css'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import Script from 'next/script'
import ImportBsJS from '@/components/Bootstrap'
// import dynamic from 'next/dynamic';

// const DynamicBootstrap = dynamic(
//   () => require('bootstrap/dist/js/bootstrap.min.js'),
//   { ssr: false }
// );

export default function RootLayout({ children }) {
 
  

  return (
    <html lang="en">
     
      
      

      <body>
        <ImportBsJS/>
        <Navbar/>
        {children}
        
        {/* <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></Script> */}
      </body>


      
    </html>
  )
}
