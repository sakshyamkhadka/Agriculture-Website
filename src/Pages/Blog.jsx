import React from 'react'
import BlogCard from '../Component/BlogCard'
import Blogpagination from '../Component/Blogpagination'
import HeadSection from '../Component/HeroSection'

const Blog = () => {
  return (
    <>
    <HeadSection
       customTitle="Blog"
        customDescription=""/>
    <BlogCard/>
    </>
  )
}

export default Blog