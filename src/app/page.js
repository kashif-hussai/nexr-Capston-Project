
import 'bootstrap/dist/css/bootstrap.css'
import Script from 'next/script'
import Homepage from './pages/Home page/Home page'



export default function Home() {
  return (
   <div>
   <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
   <Homepage/>
  
   </div>
  )
};
