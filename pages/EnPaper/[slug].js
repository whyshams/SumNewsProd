import React,{useEffect,useState} from 'react';
import { useRouter } from 'next/router';
import Parser from 'html-react-parser';
import Head from 'next/head';
import {FacebookShareButton,FacebookIcon,FacebookMessengerShareButton,FacebookMessengerIcon,WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon,TelegramShareButton,TelegramIcon} from 'react-share';

import {FaArrowAltCircleLeft,FaHome} from 'react-icons/fa';

const Slug = ({body,title,description}) => {
  const [href,setHref] = useState([])
  
  const router = useRouter();
  
  useEffect(() => {
     setHref(window.location.href)
  },[])
  useEffect(() => {
    window.scrollTo({
        top:200,
        behavior: 'smooth'
    })
   },[body])
    
    
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={description}/>
      </Head>
      <div className='d-flex justify-content-center align-items-center'>
            <span className='btn btn-matt p-3 m-1 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>
        <span className='btn btn-matt p-3 m-1 float-right' onClick={() => router.push('/')}><FaHome/></span>

            </div>
      <div>
      {body.map((data) => (
        data.children.map(d => (
         
<div key={d.title}>{Parser(d.text)}</div>

        
        ))
      ))}
      </div>
      <div className='col-md-12 mt-5 mb-4'>
                                  <h4 className='contentparatitle text-white'>Share this window in:</h4>
                                  <div className='sharebutton'>
                                <FacebookShareButton url={href}><FacebookIcon/></FacebookShareButton>
                                <FacebookMessengerShareButton url={href} appId='611096880759273'><FacebookMessengerIcon/></FacebookMessengerShareButton>              
                                <WhatsappShareButton url={href} title={`${description}`}><WhatsappIcon/></WhatsappShareButton>
                                <TwitterShareButton url={href} title={`${description}`} ><TwitterIcon/></TwitterShareButton>
                                <TelegramShareButton url={href} title={`TITLE : ${description}`}><TelegramIcon/></TelegramShareButton>
                                </div>
                            </div>
     </div>
  )
}

export default Slug

export async function getServerSideProps(context){
    const {params} = context;
    const {slug} = params
   

    const query = encodeURIComponent(`*[_type == "englishpaper" && slug.current == "${slug}"]`)
   const res= await fetch(`https://jj3j3gmk.api.sanity.io/v2021-10-21/data/query/production?query=${query}
   `,{cache:"no-store"}).then(d => d.json())

   return{
    props:{
        body : res.result[0].body,
        title : res.result[0].title,
        description : res.result[0].title

    }
   }
}
