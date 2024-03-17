import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { DNA } from 'react-loader-spinner'
import Card from './Card';
import './App.css';
import blogPosts from './db';

function App() {
  // Initial state contains only the first 5 posts
  const totaldata = blogPosts.length;
  const [blog, setBlogs] = useState(blogPosts.slice(0, 6));

  function fetchMoreData() {
    // Simulating async data fetching - You can replace this with actual fetching logic
    setTimeout(() => {
      const nextPosts = blogPosts.slice(blog.length, blog.length + 6);
      console.log(nextPosts)
      setBlogs(prevBlogs => [...prevBlogs, ...nextPosts]);

    }, 2000)
    // Fetch next 5 posts from the remaining posts

  }

  return (
    <>
      <div className="blogs bg-gray-100 py-14">
        <h1 className='text-3xl py-5 uppercase tracking-normal font-mono underline text-center mb-4'>Blogs</h1>

        <InfiniteScroll
          dataLength={blog.length} // Set dataLength to the length of currently displayed posts
          next={fetchMoreData}
          loader={<DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />}
          hasMore={blog.length < totaldata} // Check if there are more posts to fetch

          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className='grid w-10/12 mx-auto grid-cols-12 sm:grid-cols-2 md:grid-cols-3 gap-12 '>
            {blog.map((post, index) => <Card key={index} blog={post} />)}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

export default App;
