

import React,{useEffect} from 'react';
import Parser from 'html-react-parser';
import { useRouter } from 'next/router';
import {FaArrowAltCircleLeft,FaHome} from 'react-icons/fa';

const index = ({body}) => {
  
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({
        top:200,
        behavior: 'smooth'
    })
   },[body])
    
    
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center'>
            <span className='btn btn-matt p-3 m-1 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>
        <span className='btn btn-matt p-3 m-1 float-right' onClick={() => router.push('/')}><FaHome/></span>

            </div>
      <div>
      {body.map((data) => (
        data.children.map(d => (
            <div>{Parser(d.text)}</div>
        ))
      ))}
      </div>
     </div>
  )
}

export default index

export async function getServerSideProps(context){
    const {params} = context;
    const {slug} = params
    const query = encodeURIComponent(`*[_type == "banglapaper" && slug.current == "${slug}"]`)
   const res= await fetch(`https://jj3j3gmk.api.sanity.io/v2021-10-21/data/query/production?query=${query}
   `,{cache:"no-store"}).then(d => d.json())
   return{
    props:{
        body : res.result[0].body,

    }
   }
}
