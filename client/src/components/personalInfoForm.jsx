import { User } from 'lucide-react'
import React from 'react'

const personalInfoForm = ({data,onChange, removeBackgroung, setRemoveBackground})
 => {

    const handleChange =(field,value)=>{
        onchange({...data, [field]: value})

    }
  return (
    <div>
        <h3 className='text-lg font-semibold text-gray-900'>Personal Information</h3>
        <p className='text-sm text-gray-600'>Get Started with the personal Information</p>
        <div className='flex items-center gap-2'>
            <label >
            {data.image ? (<img src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image)} alt='user-image
            ' className='w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80'/>) :(
                <div className='inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer'>
                    <User className='size-10 p-2.5 border rounded-full'/>
                    upload user image
                </div>
            )}
            <input type="file" accept='image/jpeg, image/png' className='hidden' onChange={(e)=>handleChange("image",e.target.files[0])} />
            </label>
            {typeof data.image === 'object' &&b (
                <div>
                    <p>Remove Background</p>
                </div>
            )}

        </div>
    </div>
  )
}

export default personalInfoForm