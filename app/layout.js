// "use client"
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Yintorion Ai Publications',
  description: '',
}

export default function RootLayout({ children }) {
 
// }
  return (
    <html lang="en">
     
      


      <body>
        <Navbar/>
        {children}

      </body>


      
    </html>
  )
}
