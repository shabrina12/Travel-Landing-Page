import React from 'react'

type TitleProps = {
    title: string;
    firstLine: string;
    secondLine?: string;
}

const Title = ({title, firstLine, secondLine} : TitleProps) => {
    return (
        <div className='flex flex-col gap-1'>
            <p className='text_pink uppercase text-lg font-bold tracking-widest'>{title}</p>
            {secondLine && <p className='text_black text-5xl font-bold leading-[60px]'>{firstLine} <br /> {secondLine}</p> }            
        </div>
    )
}
export default Title