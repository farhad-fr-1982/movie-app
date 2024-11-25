import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2'>
        <div className='flex items-center justify-center gap-4'>
          <Link to="/" >درباره ما</Link> |
          <Link to="/">تماس با ما</Link>
        </div>
        <p className='text-sm'>برنامه نویس و توسعه دهنده فرهاد رضازاده | 09167194055</p>
    </footer>
  )
}

export default Footer
