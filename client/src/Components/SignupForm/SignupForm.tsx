// npm modules
import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import blackRect from './Rectanglefill.png'
import whiteRect from './Rectanglenofill.png'
import conan from './Conan.png'
import erick from './Erick.png'
import hannah from './Hannah.png'
import hansel from './Hansel.png'
import { TiArrowSync } from 'react-icons/ti';
import { BsArrowLeftShort } from 'react-icons/bs';
import { FiFlag } from 'react-icons/fi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { HiOutlineDocumentReport } from 'react-icons/hi';

// services
import * as authService from '../../Services/authService'

//images
import rocket from './rocket1.svg'

// types
import { AuthFormProps } from '../../Types/props'
import { SignupFormData, PhotoFormData } from '../../Types/forms'
import { handleErrMsg } from '../../Types/validators'

const SignupForm = (props: AuthFormProps): JSX.Element => {
  const [page1, setPage1] = useState(whiteRect)
  const [page2, setPage2] = useState(whiteRect)
  const [page3, setPage3] = useState(whiteRect)
  const [page4, setPage4] = useState(whiteRect)
  const [page, setPage] = useState(1)
  const {updateMessage, handleAuthEvt} = props
  const navigate = useNavigate()

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  const [photoData, setPhotoData] = useState<any>()

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    updateMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handlePhotoChange = (person:any):any => {
      setPhotoData(person)
  }



  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    if(isSubmitted) return
    try {
      setIsSubmitted(true)
      await authService.signup(formData, photoData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      handleErrMsg(err, updateMessage)
      setIsSubmitted(false)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = (): boolean => {
    return !(name && email && password && password === passwordConf)
  }
  function changePage(){
    switch(page){
      case 1:
        if(email == "" || password == "" || passwordConf == "") {
          alert("fields missing!")
        }else if(password != passwordConf) {
          alert('passwords do not match')
        }else{
        setPage1(blackRect)
        setPage(prev => prev +1)
        }
        break
      case 2:
        setPage2(blackRect)
        setPage(prev => prev +1)
        break
      case 3:
        setPage3(blackRect)
        setPage(prev => prev +1)
        break
      case 4:
        setPage4(blackRect)
        setPage(prev => prev +1)
        navigate('/login')
        break
    }
  }
  const goBack = () => {
    switch(page){
      case 1:
       setPage1(whiteRect)  
        navigate('/')
       break
        case 2:
          console.log(page)
         setPage2(whiteRect)  
         setPage(prev => prev -1)
         break
      case 3:
        console.log(page)
        setPage3(whiteRect)
        setPage(prev => prev -1)
        break
      case 4:
        console.log(page)
        setPage4(whiteRect)
        setPage(prev => prev -1)
        break
    }
  }

  return (
    <>
    <div className='flex gap-4 h-fit absolute top-5'>
      <img src={page1} alt=""/>
      <img src={page2} alt=""/>
      <img src={page3} alt=""/>
      <img src={page4} alt=""/>
    </div>
      <div onClick={goBack} className='absolute top-2 left-2 text-3xl'><BsArrowLeftShort/></div>
    <div className='flex flex-col items-center justify-center'>
      
    <form onSubmit={handleSubmit}>
  
   {page == 1?
   <> 
    <h1 className='text-2xl text-center font-nunito font-boldest mt-[-2rem] mb-10'>Welcome to Addventures!</h1>
    <div className="flex flex-col h-32">
      <div className='flex'>
        <label htmlFor="email" className="font-nunito font-bolder text-xl  mr-auto ml-6" >Email</label>
        <label htmlFor="email" className='font-nunito font-bolder mr-6'>required*</label>
      </div>
        <input type="text" className="border-gray-400 border-[1px] mx-auto w-[90%] bg-asteroidGray rounded-lg h-[50%]" value={email} name="email"onChange={handleChange}/>
      </div>

      <div className="flex flex-col h-32">
        <label htmlFor="name" className="font-nunito font-bolder text-xl ml-6">Screen Name</label>
        <input type="text" className="border-gray-400 border-[1px] w-[90%] mx-auto bg-asteroidGray rounded-lg h-[50%] " value={name} name="name" onChange={handleChange}/>
      </div>

      <div className="flex flex-col h-32">
      <div className='flex'>
        <label htmlFor="password" className="font-nunito font-bolder ml-6 text-xl  mr-auto">Password</label>
        <label htmlFor="email" className='font-nunito font-bolder mr-6'>required*</label>
        </div>
        <input className="border-gray-400 border-[1px] rounded-lg w-[90%] mx-auto bg-asteroidGray h-[50%]" type="password" value={password} name="password" onChange={handleChange}/>
      </div>

      <div className="flex flex-col h-32">
      <div className='flex'>
        <label htmlFor="confirm" className="font-nunito font-bolder text-xl ml-6 mr-auto">Confirm Password</label>
        <label htmlFor="email" className='font-nunito font-bolder mr-6'>required*</label>
      </div>
       <input className="border-gray-400 border-[1px] rounded-lg w-[90%] mx-auto bg-asteroidGray h-[50%]" type="password" value={passwordConf} name="passwordConf" onChange={handleChange}/>
      </div>
      </>
      :null}        
       {page == 2? 
       <>
           <h1 className='text-2xl text-center font-nunito font-boldest mt-[-2rem] mb-10'>Choose Your Avatar</h1>
                <div className='flex flex-col items-center'>
                  <div className="flex p-4"> 
                    <img src={hannah} onClick={(e) => handlePhotoChange(hannah)} className="outline-yellow-500 hover:outline rounded-[50%]" />
                    <img src={erick} onClick={(e) => handlePhotoChange(erick)} className="ml-2 outline-yellow-500 hover:outline rounded-[50%]" />
                  </div>
                  <div className='flex p-4'>
                    <img src={hansel} onClick={(e) => handlePhotoChange(hansel)} className="mr-1 outline-yellow-500 hover:outline rounded-[55%]"/>
                    <img src={conan} onClick={(e) => handlePhotoChange(conan)} className="outline-yellow-500 hover:outline rounded-[50%]" />
                  </div>
              </div>
              <div className='flex font-nunito font-bolder items-center justify-center mt-12'><TiArrowSync /> Randomize</div>
              </>
              :null}

        {page == 3? 
       <>
           <h1 className='text-[3rem] text-center font-nunito font-boldest mt-[-8rem]'>Grade Level</h1>
                <div className='flex gap-20 w-screen items-center justify-center'>
                  <div className="flex flex-col gap-16"> 
                      <div className="border-orbitOrange border-2 rounded-[50%] w-fit px-2 scale-[2] text-orbitOrange font-nunito text-bolder">K</div>
                      <div className="border-orbitOrange border-2 rounded-[50%] w-fit px-2 scale-[2] text-orbitOrange font-nunito text-bolder">K</div>
                      <div className="border-orbitOrange border-2 rounded-[50%] w-fit px-2 scale-[2] text-orbitOrange font-nunito text-bolder">K</div>
                  </div>
                  <div className="flex flex-col gap-16 mt-[24rem] "> 
                      <div className="border-orbitOrange border-2 rounded-[50%] w-fit scale-[2] px-2 text-orbitOrange font-nunito text-bolder">K</div>
                  </div>
                  <div className="flex flex-col gap-16"> 
                      <div className="border-orbitOrange border-2 rounded-[50%] w-fit px-2 scale-[2] text-orbitOrange font-nunito text-bolder">K</div>
                      <div className="border-orbitOrange border-2 rounded-[50%] w-fit px-2 scale-[2] text-orbitOrange font-nunito text-bolder">K</div>
                      <div className="border-orbitOrange border-2 rounded-[50%] w-fit px-2 scale-[2] text-orbitOrange font-nunito text-bolder">K</div>
                  </div>
              </div>
              </>
              :null}

      {page == 4? 
       <>
           <h1 className='text-2xl text-center font-nunito font-boldest mt-[-6rem] mb-10'>Personalize your learning <br /> experience?</h1>
                <div>
                  <div className="flex p-4 font-nunito font-bolder text-xl items-center justify-center text-valvetNight"> 
                        <div><FiFlag/></div>
                        <div>Set Learning Goals</div>
                  </div>
                  <div className="flex p-4 font-nunito font-bolder text-xl items-center justify-center text-valvetNight"> 
                        <div>< AiOutlineCalendar/></div>
                        <div>Schedule Study Time</div>
                  </div>
                  <div className="flex p-4 font-nunito font-bolder mb-12 text-xl items-center justify-center text-valvetNight"> 
                        <div><HiOutlineDocumentReport/></div>
                        <div>Request Progress Reports</div>
                  </div>
              </div>
              </>
              :null}
              <div className='flex flex-col w-screen items-center'>
            {page == 4? 
              <div onClick={(e) => handleSubmit(e)} className='rounded-xl cursor-pointer bg-beyondBlue h-15 mt-10 text-white text-center font-bolder px-4 py-4'>{!isSubmitted ? "Create Accout with personalizations" : "🚀 Sending..."}</div>
            :<div onClick={(e)=> changePage()} className='rounded-xl cursor-pointer w-fit px-36 bg-beyondBlue mt-12 h-15 text-white text-center font-bolder py-4'>Continue</div>
          }
          {page != 1 && page !=4?<div onClick={(e)=> changePage()} className='rounded-xl w-fit px-32 cursor-pointer h-15 mt-4 text-valvetNight border-[3px] border-valvetNight text-center font-bolder py-4'>Skip</div> :null}
          {page == 4?<div onClick={(e)=> changePage()} className='rounded-xl w-fit px-9 cursor-pointer h-14 mt-4 text-valvetNight border-[3px] border-valvetNight text-center text-xl font-bolder py-3'>Skip and create account</div> :null}
          </div>
</form>
      </div>
      </>
    
  )
}

export default SignupForm