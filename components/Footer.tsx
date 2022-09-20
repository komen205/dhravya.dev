import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

import Link from './helpers/Link'

export default function Footer({ bg = 'bg-darkBackground' }: { bg?: string }) {
  return (
    <footer className={bg}>
      <div className='mt-16 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4 bg-slate-300 rounded-md p-3'>
          <SocialIcon
            kind='mail'
            href={`mailto:${siteMetadata.email}`}
            size={1.5}
          />
          <SocialIcon kind='github' href={siteMetadata.github} size={1.5} />
          <SocialIcon kind='youtube' href={siteMetadata.youtube} size={1.5} />
          <SocialIcon kind='linkedin' href={siteMetadata.linkedin} size={1.5} />
          <SocialIcon kind='twitter' href={siteMetadata.twitter} size={1.5} />
        </div>
        <div className='mb-2 flex space-x-2 text-sm text-gray-400'>
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href='/'>{siteMetadata.title}</Link>
        </div>
        <div className='mb-8 text-sm text-gray-400'>
          <Link href='https://github.com/dhravya/dhravya.dev'>
            This website is open source.
          </Link>
        </div>
      </div>
    </footer>
  )
}
