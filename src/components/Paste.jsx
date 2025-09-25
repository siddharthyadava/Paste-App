import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes);

  const [searchTerm, setSearchTerm] = useState('');
  
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div>
      <input 
        className='p-2 border rounded-2xl min-w-[600px] mt-5'
        type="search" 
        placeholder='search here' 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='flex flex-col gap-5 mt-5'>
        {
          filteredData.length > 0 && 
          filteredData.map(
            (paste) => {
              return (
                <div className='border rounded-2xl' key={paste?._id}>
                  <div className='mt-2'>
                    {paste.title}
                  </div>
                  <div>
                    {paste.content}
                  </div>
                  <div className='flex flex-row gap-4 place-content-evenly my-2'>
                    <button>
                      <Link to={`/?pasteId=${paste?._id}`}>
                        Edit
                      </Link>
                    </button>
                    <button>
                      <Link to={`/pastes/${paste?._id}`}>
                        View
                      </Link>
                    </button>
                    <button onClick={() => handleDelete(paste ?._id)}>
                      Delete
                    </button>
                    <button onClick={() => {
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("Copied to clipboard")
                    }}>
                      Copy
                    </button>
                    <button onClick={() => {
                      navigator.clipboard.writeText(`${window.location.origin}/pastes/${paste._id}`);
                      toast.success("Link copied to clipboard");
                    }}>
                      Share
                    </button>

                  </div>

                  <div className='my-2'>
                    {moment(paste.createdAt).format("MMMM D, YYYY, hh:mm:ss A")}
                  </div>
                </div>
              )
            }
          )
        }

      </div>
    </div>
  )
}

export default Paste
