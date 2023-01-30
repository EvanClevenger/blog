import Head from 'next/head'


const posts = [ 
  { title: 'React Testing', excerpt: 'Learning React Testing'},
  { title: 'React with Tailwind', excerpt: 'Learning React With Tailwind'},
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-grey-300">
      <Head>
        <title>Game Haus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        
        {posts.map((post, index) => (
          <div>
            {post.title}
            {post.excerpt}
          </div>  
        ))}
      </div>

    </div>
  )
}