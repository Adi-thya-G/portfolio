import React from 'react'
import authService from '../../appwrite/auth'
function Home() {

  const handleDownload = () => {
    const fileUrl = "https://fra.cloud.appwrite.io/v1/storage/buckets/6749e54a000dda5e3e5d/files/684d075e0007be89f647/view?project=674939ed00089025eed3&mode=admin";
    
    // Use fetch to retrieve the file
    fetch(fileUrl)
      .then(response => response.blob())  // Convert the response to a blob (binary data)
      .then(blob => {
        // Create a link to trigger the download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);  // Create a URL for the blob
        link.download = "Your-Name-Resume.pdf";  // The filename for download
        link.click();  // Simulate a click to trigger the download
      })
      .catch(error => console.error("Error downloading the file:", error));
  };
  return (
   <div className='w-full flex sm:px-40 sm:py-20 bg-gradient-to-r from-gray-100 to-gray-500 ' id='Home'>
    <div>
      <div className='flex'>
        <div>
        <div className='items-start flex flex-col gap-4  py-28'>
            <h2 className='text-xl font-serif  text-zinc-600 text-start'>___ HELLO</h2>
            <h1 className='text-[40px] font-sans  text-zinc-600 font-bold'> I'm <span className='text-red-600  motion-preset-pop duration-200'>Adithya</span> karmarkar g</h1>
            <p className='text-start text-zinc-500 '>This is Adithya karmarkar Web developer</p>
           <div className='mx-8 my-12'>
            <button className='bg-red-600 px-5 py-3 text-white font-semibold' onClick={handleDownload}>
           Download Resume
          </button>
           </div>
           </div>
        </div>
      </div>

    </div>
   </div>
    
  )
}

export default Home