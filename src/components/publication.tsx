import { PublicationItem } from './publication-item'
import { FileTextIcon } from 'lucide-react'
import { data } from '@/constants/index'

export function Publication() {
  const { publication } = data

  return (
    <>
      <h2 className='dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center text-3xl font-bold text-balance'>
        <FileTextIcon className='size-6 animate-pulse stroke-[1.5]' />
        Publications
      </h2>

      <ol className='relative border-s dark:border-neutral-600 border-neutral-400 ml-[11.5px] flex flex-col gap-y-8'>
        {publication.map((item, index) => (
          <li key={index} className='ms-[30px]'>
            <PublicationItem {...item} />
          </li>
        ))}
      </ol>
    </>
  )
}