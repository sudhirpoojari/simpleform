import React from 'react'

function Complaint() {


  function handleSubmit(e){
    e.preventDefault();
      const [formData, setFormData] = useState({
      applicant_name: ""
        });
  }
  return (
   <>

<form onSubmit={handleSubmit}> 
   <div className="p-4 grid grid-cols-3 gap-4">
        <div>
            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
           Applicant Name 
                  </label>
                  <div className="mt-1">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        id="applicant_name"
                        name="applicant_name"
                        type="text"
                        
                        placeholder="Applicant Name "
                        className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      />
                    </div>
                  </div>
        </div>
    <div className='col-span-2' >
      <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
    Applicant Address with Survey No  & Door No 
        </label> 
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            id="applicant_addrs"
            name="applicant_addrs"
            type="text"
            placeholder="Address"         
            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
    </div>
    <div>
            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
    Upload Passport size Photo
        </label> 
         <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            id="ps_photo"
            name="ps_photo"
            type="file"       
            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
    </div>
    <div>
    <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
Mobile No
    </label> 
     <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            id="mobile_no"
            name="mobile_no"
            type="mobile no"
            value
            placeholder="Enter Mobile NO"
            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
    </div>
    <div>
      <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
   Email ID
        </label> 
         <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            id="email_id"
            name="email_id"
            type="textarea"
            placeholder="email_id"
            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
    </div>
    <div><label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
      Verify OTP
        </label> 
         <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            id="otp"
            name="otp"
            type="text"
            placeholder="Enter OTP"
            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>        
        </div>
    <div>
      <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
      Upload RTC 
        </label> 
         <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            id="rtc"
            name="rtc"
            type="file"       
            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
    </div>
        <div><label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
      Upload Aadhar Copy
        </label> 
         <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            id="aahar"
            name="address"
            type="file"           
            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
        </div>
        <div>
         
            <label className="block text-sm/6 font-medium text-gray-900"  >Reason for applying NOC /ನಿರಾಕ್ಷೇಪಣಾ ಪತ್ರಕ್ಕಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಕಾರಣ </label>
                        <select  name="reason_for_apply_noc" id="reason_for_apply_noc" className='block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'>

            <option value="">-- Select Reason for applying NOC /{/*ನಿರಾಕ್ಷೇಪಣಾ ಪತ್ರಕ್ಕಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಕಾರಣ ಆಯ್ಕೆಮಾಡಿ*/}--</option>
            <option value="NOC of Homestay">NOC of Homestay</option>
              <option value="Kayaking">Kayaking</option>
              <option value="Boating">Boating</option>
              <option value="Surfing">Surfing</option>
              <option value="House Boat">House Boat</option>
              <option value="Bed & Breakfast">Bed & Breakfast</option>
              <option value="Others">Others</option>
            </select>
        </div>
        <div><label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
     Other reason for applying NOC 
        </label> 

           <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            id="noc_other"
            name="noc_other"
            type="text"
            placeholder="Enter o  ther reason"          
            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
        </div>
        <div>
          <button className="rounded bg-blue-600 p-2 mt-5 text-amber-50" name="Submit" type="submit" >Submit</button>
        </div>      
  </div>
</form>
   </>
  )
}

export default Complaint