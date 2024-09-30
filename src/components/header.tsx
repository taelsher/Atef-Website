// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { ModeToggle } from './mode-toggle'
// import clsx from 'clsx'
// import { links } from '@/constants'

// export function Header() {
//   const pathname = usePathname()

//   return (
//     <header className='fixed top-0 z-10 flex items-center justify-center w-full mx-auto bg-white dark:bg-black border-b py-2'>
//       <div className='flex items-center justify-between w-full md:max-w-3xl mx-4'>
//         <nav className='flex justify-center items-center'>
//         {links.map((link) => (
//             <Link
//               key={link.label}
//               aria-label={link.label}
//               href={link.url}
//               className={clsx(
//                 'relative block me-2 transition-colors ease-in-out py-2 md:px-4 px-2 rounded-md text-sm font-semibold text-neutral-800 dark:text-neutral-100',
//                 {
//                   'bg-neutral-100 dark:bg-neutral-800': pathname === link.url,
//                   'hover:bg-neutral-100 dark:hover:bg-neutral-800': pathname !== link.url
//                 }
//               )}
//             >
//               {link.title}
//             </Link>
//             //dropdown logic
           
//           ))}
//         </nav>
//         <div className='flex items-center'>
//           <ModeToggle/>
//         </div>
//       </div>
//     </header>
//   )
// }
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './mode-toggle'
import clsx from 'clsx'
import { links } from '@/constants'
import { useState, useRef} from 'react'

export function Header() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)
  // Handle mouse enter for both parent and dropdown container
  const handleMouseEnter = (label: string) => {
    if(closeTimeout.current){
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
    setDropdownOpen(label)
  }

  // Close dropdown only when mouse leaves both parent and dropdown
  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(()=>{
      setDropdownOpen(null)
    }, 400)    //delay time in milliseconds  .4 seconds
  }

  return (
    <header className='fixed top-0 z-10 flex items-center justify-center w-full mx-auto bg-white dark:bg-black border-b py-2'>
      <div className='flex items-center justify-between w-full md:max-w-3xl mx-4'>
        <nav className='flex justify-center items-center'>
          {links.map((link) => (
            <div
              key={link.label}
              className='relative'
              onMouseEnter={() => handleMouseEnter(link.label)} // Trigger dropdown on hover
              onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves both link and dropdown
            >
              <Link
                aria-label={link.label}
                href={link.url}
                rel = "noopener noreferrer"
                target = "_blank"
                className={clsx(
                  'relative block me-2 transition-colors ease-in-out py-2 md:px-4 px-2 rounded-md text-sm font-semibold text-neutral-800 dark:text-neutral-100',
                  {
                    'bg-neutral-100 dark:bg-neutral-800': pathname === link.url,
                    'hover:bg-neutral-100 dark:hover:bg-neutral-800': pathname !== link.url
                  }
                )}
              >
                {link.title}
              </Link>

              {/* Dropdown logic */}
              {link.subLinks && dropdownOpen === link.label && (
                <div className="absolute top-full left-0 mt-2 bg-white dark:bg-neutral-800 shadow-lg rounded-md py-2"
                     onMouseEnter={() => handleMouseEnter(link.label)} // Keep dropdown open when hovering over it
                     onMouseLeave={handleMouseLeave} // Close when mouse leaves the dropdown
                >
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.label}
                      aria-label={subLink.label}
                      href={subLink.url} 
                      rel = "noopener noreferrer"
                      target = "_blank"
                      className="block px-4 py-2 text-sm text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                    >
                      {subLink.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className='flex items-center'>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
