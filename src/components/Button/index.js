import React from 'react'

const Button = ({onClick, backgroundColor, textColor, buttonName, hoverBG, hoverText, textLeft, paddingHorizontal, width}) => {
    return (
        <button 
            onClick={onClick} 
            className={`
                ${!backgroundColor ? 'bg-white' : backgroundColor} 
                ${!textColor ? 'text-slate-900' : textColor} 
                ${!hoverBG ? 'hover:bg-slate-400' : hoverBG} 
                ${!hoverText ? 'hover:text-white' : hoverText}
                ${!paddingHorizontal ? 'px-[18px]' : paddingHorizontal} 
                ${!width ? 'w-full' : width}
                ${textLeft === true ? 'text-left' : textLeft}
                rounded-[6px] py-[8px] font-semibold
            `}
        >
            {!buttonName ? 'Button Name' : buttonName}
        </button>
    )
}

export default Button