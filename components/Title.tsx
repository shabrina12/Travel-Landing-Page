import React from 'react'

type TitleProps = {
    title: string;
    subtitle: string;
}

const Title = ({title, subtitle} : TitleProps) => {
    return (
        <div className='flex flex-col gap-1'>
            <p className='text_pink uppercase text-lg font-bold tracking-widest'>{title}</p>
            <p className='text_black lg:text-5xl xs:text-4xl font-bold leading-[60px]'>{subtitle}</p>             
        </div>
    )
}
export default Title