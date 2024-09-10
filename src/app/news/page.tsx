import { Section } from '@/components/ui/section'
import { News } from '@/components/news'

export default function NewsPage() {
  return (
    <div className='flex flex-col flex-1'>
      <Section id='career' className='pb-24'>
        <News />
      </Section>
    </div>
  )
}
