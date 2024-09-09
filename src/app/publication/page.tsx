import { Section } from '@/components/ui/section'
import { Publication } from '@/components/publication'

export default function PublicationPage() {
  return (
    <div className='flex flex-col flex-1'>
      <Section id='publication' className='pb-24'>
        <Publication />
      </Section>
    </div>
  )
}