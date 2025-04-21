import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';


const Forms = () => {

    const [name , setName]  = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [sending, setSending ] = useState (false)

    async function  fetchApi(e){
        e.preventDefault()
        setSending(true)
        try {
           const baseurl ='https://forms-io.onrender.com/submit-form/e42cabb3-88fd-42e8-817b-9f7c2608d152'
           const response  = await fetch (baseurl,{
              method:'POST',
              headers: {'Content-type' : 'application/json'},
              body : JSON.stringify({name, email, message})    
           }); 
           const resData = await response.json();           
            setSending(false)
            toast.success('message sent successfully')    
            console.log("data ", resData) 
        } catch (error) {
            setSending(false)
            toast.error ('unable to send please check your internet ');
            console.log(error)
        }

    }
  return (
      <form onSubmit={fetchApi} method='post'>
        <div className='flex flex-col border-r-indigo-600 lg:pt-[2%] lg:px-10 px-[20px] lg:gap-[30px] justify-center' id='contact'>
            <div className='w-[100%] h-[100%] bg-white shadow-2xl p-4 px-[40px] gap-[20px]'>
                <div className='flex flex-col items-center justify-start p-2 px-[40px] w-[100%] h-[100%]'>
                    <p className='text-[30px] font-mono font-bold'>Contact Us</p>
                    <p className='text-center lg:w-[40vw] w-[80vw] lg:text-[40px] text-[20px]'>We'd love to hear from you!</p>
                </div>
                <div>
                    <div className='flex flex-col gap-[20px] lg:p-4 w-full'>
                        <input onChange={(e)=> setName(e.target.value)} name='name' value={name}  className='border-2 border-gray-300 p-2 rounded-md' type="text" placeholder='Your Name' required />
                        <input  onChange={(e)=> setEmail(e.target.value)} name='email' value={email}  className='border-2 border-gray-300 p-2 rounded-md' type="email" placeholder='Your Email' required />
                        <textarea onChange={(e)=> setMessage(e.target.value)} name='message' value={message} className='border-2 border-gray-300 p-2 rounded-md' rows="5" placeholder='Your Message' required></textarea>
                        <button className='bg-black text-white p-2 rounded-md'> {sending ? 'sending...' : 'Send' } </button>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />

        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.37182129707!2d4.515736669834646!3d8.463175579000609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1036532a1f371417%3A0x18c83cfc52d08a5a!2s91%20Olorunsogo%20Rd%2C%20Ilorin%20240281%2C%20Kwara!5e0!3m2!1sen!2sng!4v1745255736381!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

        <div className="w-full flex justify-center items-center py-10 px-4">
  <div className="w-full max-w-4xl h-[300px] rounded-2xl overflow-hidden shadow-lg border border-gray-300">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.37182129707!2d4.515736669834646!3d8.463175579000609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1036532a1f371417%3A0x18c83cfc52d08a5a!2s91%20Olorunsogo%20Rd%2C%20Ilorin%20240281%2C%20Kwara!5e0!3m2!1sen!2sng!4v1745255736381!5m2!1sen!2sng"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
  </div>
</div>

    </form>
  )
}

export default Forms