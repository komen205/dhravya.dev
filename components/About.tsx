import Image from 'next/image'
import Link from 'next/link'

import illustration from '@/public/static/illustration.svg'

import CustomLink from './helpers/Link'

function About() {
  return (
    <>
      <div className='mx-3 flex justify-between rounded-xl bg-blue-600 p-3 py-10 md:mx-10'>
        <div className='w-full'>
          {/* <div className='text-3xl md:text-5xl font-poppins font-semibold text-[#380d79] m-6'>
            About me
          </div> */}
          <div className='mx-2 text-[#f8f7fa] md:mx-7 md:text-lg'>
            I am a 17 year old{' '}
            <span className='font-poppins text-purple-900'>
              full-stack developer
            </span>{' '}
            with a passion for building things that people{' '}
            <span className='bg-gradient-to-r from-red-300 to-red-500 bg-clip-text font-poppins text-transparent'>
              love
            </span>
            .
            <br />
            <br />
            I&apos;ve built{' '}
            <span className='font-poppins text-blue-200'>
              highly scalable
            </span>{' '}
            web applications,{' '}
            <a
              href='https://twitter.com/poet_this'
              className='bg-gradient-to-b from-sky-400 to-sky-200 bg-clip-text font-poppins text-transparent'
            >
              a Twitter bot
            </a>{' '}
            that serves more than 20 thousand people and a{' '}
            <a
              href='https://github.com/dhravya/spacebot6'
              className='bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text font-poppins text-transparent'
            >
              discord bot
            </a>{' '}
            that served more than 100k people, along with a lot of other fun and
            interesting projects. I&apos;m proficient in Python, Javascript and
            a little bit of Typescript. I also write code in Rust and Golang.
            <br />
            <br />
            In my free time, I love to Cycle, listen to music,{' '}
            <a
              href='https://instagram.com/dhravyaplaysmusic'
              className='bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 bg-clip-text font-poppins font-semibold text-transparent'
            >
              play the Guitar
            </a>{' '}
            and Table tennis.
            <br />
            <div className='bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text font-poppins font-semibold text-transparent'>
              <CustomLink href='/about'>Read more about me</CustomLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
