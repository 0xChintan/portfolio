'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { blogPosts } from '../../config/content';
import { AnimatedText } from '../../components/ui/AnimatedText';
import { BackgroundBeams } from '../../components/ui/BackgroundBeams';
import Link from 'next/link';

const BlogPost = () => {
  const params = useParams();
  const post = blogPosts.find((post) => {
    const postSlug = post.url.split('/').pop();
    return postSlug === params.slug;
  });

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link
            href="/blog"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <BackgroundBeams />
      
      <article className="relative pt-24 pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 text-gray-400 mb-6"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Blog
              </Link>
              <span>•</span>
              <time>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </motion.div>
            
            <AnimatedText
              text={post.title}
              className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12"
            >
              <motion.img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              {post.summary}
            </p>
            
            {/* Example content sections - replace with actual content */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Main Content</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-white mb-4">Key Takeaways</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>First important point about the topic</li>
                <li>Second key concept to remember</li>
                <li>Third valuable insight from the article</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              In conclusion, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070"
                alt="Author"
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Written by John Doe</h3>
                <p className="text-gray-300">
                  Full-stack developer passionate about web technologies and creating engaging user experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter((p) => p.url !== post.url && p.tags.some((tag) => post.tags.includes(tag)))
                .slice(0, 2)
                .map((relatedPost) => (
                  <motion.article
                    key={relatedPost.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="group relative bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        initial={{ scale: 1.2 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <time className="text-sm text-gray-300">
                          {new Date(relatedPost.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {relatedPost.summary}
                      </p>
                      <Link
                        href={relatedPost.url}
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Read article
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>
                    </div>
                  </motion.article>
                ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
