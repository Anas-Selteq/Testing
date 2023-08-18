import React from 'react'

function SStories(data: any) {
    
  return (
    <div className="col-md-12 custom_padding1 pt-5 text-center">
    <div className='row'>
        {data?.data?.sectionnew?.map((item: any, index: any) => {
            return(
                <div className='col-md col-4'>
                <img className="img-fluid img_circle" src={item?.imageUrl} />
                <p className="m-0 font_size_set_stories pt-3 pb-2">{item?.name}</p>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default SStories
