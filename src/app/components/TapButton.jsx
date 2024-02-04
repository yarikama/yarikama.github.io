import React from 'react'

const TapButton = ({active, selectTab, children}) => {
const buttonClasses = active  ? 'text-white border-b border-yellow-400' 
                            : 'text-[#919ca5]'
  return (
    <button onClick={selectTab}>
    <p className={`text-lg font-semibold hover:text-white ${buttonClasses} mr-4 md:mr-8 lg:mr-12`}> 
        {children}
    </p> 
    </button>
    )
}

export default TapButton