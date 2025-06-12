import React from 'react';

const SearchPanel = (props) => {

    const location = [
      "Lahore",
      "Gujrat",
      "Gujranwal",
      "Islamabad"
    ] 

    return (
        <div>
            {
                location.map((elme , idx)=>{
                    return<div key={idx} onClick={() =>{
                        props.setpanelOpen(false)
                        props.setVehiclePanel(true)
                    }}  className='flex gap-4 bottom-2 p-3 border-white active:border-black'>
                        <h2 className='bg-white h-8 flex items-center justify-center w-12 rounded-full' ></h2>
                        <h4 className='font-medium'>{elme}</h4>
                    </div>   
                })
            }
        </div>
    );
}

export default SearchPanel;