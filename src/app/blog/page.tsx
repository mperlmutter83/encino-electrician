import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';
import { getPosts, toRenderPost, type RenderPost } from '@/lib/api';

export const metadata: Metadata = { title: 'Blog', description: 'Electrical tips and news from Encino Electrician.' };

const SITE_DOMAIN = 'encinoelectrician.com';

export const revalidate = 60;

export default async function BlogPage() {
  const apiPosts = await getPosts(SITE_DOMAIN);
  const posts: RenderPost[] = apiPosts.length > 0 ? apiPosts.map(toRenderPost) : blogPosts;
  return (
    <div>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Our Blog</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              {post.image && <Image src={post.image} alt={post.title} width={400} height={250} className="rounded-lg mb-4" />}
              <span className="text-yellow-600 text-sm font-medium">{post.category}</span>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 mt-1">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
