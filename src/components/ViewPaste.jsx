import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const ViewPaste = () => {

  const {id} = useParams();
  
  return (
    <div>
        <div className='flex flex-row gap-7 place-content-between'>
            <input 
                className='p-1 rounded-2xl border mt-2 w-[66%] pl-4'
                type="text"
                placeholder='enter title here'
                value={title}
                disabled
                onChange={(e) => setTitle(e.target.value)} 
            />

            {/* <button onClick={createPaste} className='p-2 rounded-2xl mt-2'>
                {
                    pasteId ? "Update My Paste" : "Create My Paste"
                }
            </button> */}
        </div>
        <div className='mt-8'>
            <textarea 
                className='rounded-2xl mt-4 min-w-[500px] border p-4'
                value={value}
                placeholder='enter content here'
                onChange={(e) => setValue(e.target.value)}
                disabled
                rows={20}
            />
        </div>
    </div>
  )
}

export default ViewPaste
