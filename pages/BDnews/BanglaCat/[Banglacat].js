import {useState} from 'react';

import { useRouter } from 'next/router';
import axios from 'axios';
import moment from 'moment';
import {FaAngleDown,FaArrowAltCircleLeft} from 'react-icons/fa';
import { IconContext } from "react-icons";
import Head from 'next/head';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Pagination from '../../../components/Pagination';
import Link from 'next/link';
import {FacebookShareButton,FacebookIcon,FacebookMessengerShareButton,FacebookMessengerIcon,WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon,TelegramShareButton,TelegramIcon} from 'react-share';





const Banglacat = ({Data,Banglacat}) => {
  
    
    const[banglaText,setBanglaText] = useState();
    
    
    

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/BDnews/BanglaCat/${banglaText}`)

    }

 


        {/* Pagination algo*/}
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(8);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = Data.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div>
      <Head>
        <title>বাংলা সংবাদ </title>
        <meta name="description" content="বিভাগ অনুযায়ী বাংলাদেশের প্রত্যেক দৈনিক পত্রিকা এবং অনলাইন পত্রিকার সর্বশেষ বাংলা সংবাদ"/>
        <meta name="keywords" content="Bangla News,bangla newspaper,Bd News,Bd,Bangladesh News,Divisional Bangla News,Bangla,News,সংবাদ, বাংলা সংবাদ,বিভাগীয় সংবাদ, বাংলাদেশ,বাংলাদেশ সংবাদ"/>
        <meta name="author" content="Nuren Shams Chowdhury"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4327171076361001"
     crossOrigin="anonymous"></script>
        
      </Head>
      
      
      <div className='row'>
        <div className='col-md-12'> 
       
        <div className='MainPageTitle'>
        <span className='btn btn-matt m-3 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>

          <h2 className=' mainpagetitle d-flex justify-content-center align-items-center'>
            বিষয় অনুযায়ী বাংলা সংবাদ
          </h2>
        </div>
        </div>
      </div>

      
      <section>
      <div className='select rounded'>
      <div className='row'>
            <div className='col-md-12'>
      <div className='b-block'>
        <div className='m-2'>
        <h6 className='selecttitle d-flex justify-content-center align-items-center mt-3 mb-4'>বিষয় পরিবর্তন করে উক্ত বিষয়ের সর্বশেষ সংবাদ দেখুন</h6>
        
        <form className=' d-flex justify-content-center align-items-center' onSubmit={handleSubmit}>
            <label>
            <div className='optiontitle mb-3 '>বিষয় পরিবর্তন করুন  <IconContext.Provider value={{className:"fa-bounce"}}> <FaAngleDown/></IconContext.Provider> </div>
            <select className=' rounded option' value={banglaText} onChange={(e) => setBanglaText(e.target.value)}>
            <option value='খেলাধুলা'>খেলাধুলা</option>
            <option value='আন্তর্জাতিক'>আন্তর্জাতিক</option>
            <option value='জাতীয়'>জাতীয়</option>
            <option value='রাজনীতি'>রাজনীতি</option>
            <option value='ব্যবসা-বাণিজ্য'>ব্যবসা-বাণিজ্য</option>
            <option value='বিনোদন'>বিনোদন</option>
            <option value='তথ্যপ্রযুক্তি'>তথ্যপ্রযুক্তি</option>
            <option value='শিক্ষা'>শিক্ষা</option>
            <option value='স্বাস্থ্য'>স্বাস্থ্য</option>
            <option value='জীবনযাপন'>জীবনযাপন</option>
            <option value='সাহিত্য'>সাহিত্য</option>

            
            
            </select>
          <button className='btn selectbutton btn-light' type='submit'>Submit</button>


            </label>
       

        </form>
        </div>
        
        </div>
    </div>
    
          </div>
    </div>

      </section>
   

      
      
     
      <div className='pagenamecard'>
      <div className=''>
        <p className='d-flex justify-content-center align-items-center pagenametitle'>বর্তমান বিষয়</p>
        <div >
        <div className='d-flex justify-content-center align-items-center cCat2'>

        <h1 className='pagename'>{Banglacat}</h1>
        </div>
       </div>
      </div>

      </div>
     

    
       <section>
       <div className='container-fluid'>
          
          <div className='row'>
          <div className='col-md-12 d-flex flex-wrap'>
              
          {
      paginatedData?.map((data)=>(
        <div key={data.title} className='col-md-6 col-12'>
          <div className='m-3'>
          <div  className='row col-md-12 contentcard'>
          <div className='col-md-12 col-12'>
            
            <img className='rounded image ' src={data.media} alt={data.title}/>
  
          </div>
          <div className='col-md-12 col-12'>
          <div className=' maincontent'>
            <h3 className='contenttitle fontFat mb-2 d-flex justify-content-center align-items-center'>{data.title}</h3>
            
            
            
               <div><p className='contentpara'><strong className='contentparatitle'>Description :</strong> {data.summary.split(" ").splice(0,40).join(" ")}</p></div>
            
            
            
  
            <div className='d-block m-5'>
              <h5 className='  m-2 contentparatitle  d-flex justify-content-center align-items-center' >{moment(data.published_date).fromNow()}</h5> 
              <div className=' d-flex justify-content-center align-items-center'>
              <h6 >by </h6>
  
              </div>
              <div className='d-flex justify-content-center align-items-center'>
              <p className='sourcename'>{data.rights.toUpperCase()}</p>
              </div>
            </div>
             
            
            <div className='row contentbutton'>
                                        
                                        
                                        
                                   
                                <div className=' col-12 col-md-12 d-flex d-md-flex justify-content-center'>
                                <a target="_blank" rel="noreferrer" className=' btn  button btn-light m-3' href={data.link}>Read Full News</a>
                                
                                <CopyToClipboard text={data.media} >
                                       
                                <div className=' button btn btn-light m-3'><Link href='/EditImage/Editor'>Copy Image Link </Link></div>

                                </CopyToClipboard>
                                                                          
  
                                </div>
                                <div className='col-md-12'>
                                  <h4 className='contentparatitle'>Share this News</h4>
                                  <div className='sharebutton'>
                                <FacebookShareButton url={data.link}><FacebookIcon/></FacebookShareButton>
                                <FacebookMessengerShareButton url={data.link} appId='611096880759273'><FacebookMessengerIcon/></FacebookMessengerShareButton>              
                                <WhatsappShareButton url={data.link} title={`TITLE : ${data.title}`}><WhatsappIcon/></WhatsappShareButton>
                                <TwitterShareButton url={data.link} title={`TITLE : ${data.title}`} ><TwitterIcon/></TwitterShareButton>
                                <TelegramShareButton url={data.link} title={`TITLE : ${data.title}`}><TelegramIcon/></TelegramShareButton>
                                </div>
                            </div>

                                 </div>
  
          <hr/>
  
            </div>
            
  
  
          </div>
        
  
  </div>

          </div>
          
      
  
        </div>
        
          
         
      ))}
          </div>
          
      <hr className='text-muted'/>

          <div className='col-md-12'>
                          <div className='pagination mt-3 d-flex justify-content-center mt-3 align-items-center'>
                  <Pagination
                       postsPerPage={postsPerPage}
                        totalPosts={Data.length}
                        paginate={paginate}
                    />
  
                  </div>
  
                          </div>
                          <hr className='text-muted'/>
                          
       
          </div>
  
          </div>

       </section>
       

    </div>
  )
}

export default Banglacat



export async function getServerSideProps(context) {
        const {params} = context
        const {Banglacat} = params 
      
       const res = await axios.request({
        method: 'GET',
        url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
        params: {
          q: `${Banglacat}`,
          lang: 'bn',
          sort_by: 'date',
          country: 'BD',
          page: '1',
          media: 'True'
        },
        headers: {
          'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',
          'X-RapidAPI-Key': '3c84603cf9msh4143e6aff6a8074p1c4935jsnf23b029efa30',
          'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
        }
       })
       const Data = res.data.articles;
       
       
   
    return {
      props: {Data : Data,Banglacat}, 
    }
  }
