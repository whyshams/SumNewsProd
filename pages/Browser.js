import {useEffect,useState} from 'react';
import { useRouter } from 'next/router';
import {FaArrowAltCircleLeft,FaHome} from 'react-icons/fa';
import { useResultContext } from '../Contexts/ResultContextProvider';



const Browser = () => {
    const router = useRouter();
    const {browserUrl,setBrowserUrl} = useResultContext()
    const [error,setError] = useState(false)

    

    useEffect(() => {
        window.scrollTo({
            top:200,
            behavior: 'smooth'
        })
       },[])
      
  return (
    <div>

        <div className='container'>
            <div className='d-flex justify-content-center align-items-center'>
            <span className='btn btn-matt p-3 m-1 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>
        <span className='btn btn-matt p-3 m-1 float-right' onClick={() => router.push('/')}><FaHome/></span>

            </div>
      
        
        <iframe src={browserUrl} allowFullScreen={true} title="Browser for Sumnews to check  ">
            
         </iframe>
         
        </div>
    </div>
  )
}

export default Browser