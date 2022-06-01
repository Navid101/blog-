import type { GetStaticProps, NextPage } from 'next'
import {PostCard, Categories, PostWidget} from '../components'
import Head from 'next/head'
import {getPosts} from '../services'

//  const posts = [
//    {title:'React Testing', excerpt: 'Learn React Testing'},
//   {title:'React with Tailwind', excerpt: 'Learn React with Tailwind'}
//  ]

const Home:NextPage = ({posts}:any) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Tech News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post:any,index:number)=>{
            return <div>
              <PostCard post={post.node} key={post.title}></PostCard>
            </div>
          })}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget categories={undefined} slug={undefined}></PostWidget>
            <Categories></Categories>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props:{posts}
  }
}

export default Home
