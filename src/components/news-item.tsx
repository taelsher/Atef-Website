import { Button } from './ui/button'
import { ArrowRightIcon } from 'lucide-react'
import { type NewsProps } from '@/types'

export function NewsItem({
  //link,
  year,
  // title,
  start,
  // end,
  description,
  bullet1,
  bullet2, 
  bullet3,
  image1,
  image2, 
}: NewsProps) {
  return (
    <>
      <div className='absolute size-3 dark:bg-neutral-600 bg-neutral-400 rounded-full mt-[6.5px] -start-[6.5px] border border-white dark:border-black' />
      {<time className='text-sm font-mono leading-none text-neutral-800 dark:text-neutral-200'>
        {year}
      </time> }
      <h3 className='text-xl mt-1 font-bold text-neutral-900 dark:text-neutral-100'>
        {start}
      </h3>
      {/* <h4 className='text-lg mt-2 font-medium dark:text-neutral-100 text-neutral-900'>
        {title}
      </h4> */}
      {<p className='mt-1 dark:text-neutral-400 text-neutral-600 text-pretty font-mono'>
        {description}<br></br>
      </p>}
      {
        <ul className='mt-1 dark:text-neutral-400 text-neutral-600 text-pretty font-mono'>
        <li>{bullet1}</li><br></br>
        <li>{bullet2}</li> <br></br>
        <li>{bullet3}</li> <br></br>
       </ul>
      }
      {
        <div className ="mt-1 dark:text-neutral-400 text-neutral-600 text-pretty font-mono">
          <img src={image1}></img>
          <img src={image2}></img>
        </div>
      }
      {/* {link && (
        <Button
          variant='default'
          size={null}
          className='shadow mt-4 p-2'
          asChild
        >
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'
          >
            <p className='font-medium'>View CV</p>
            <ArrowRightIcon className='ms-2 size-4' />
          </a>
        </Button>
      )} */}
    </>
  )
}
