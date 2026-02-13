import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MdxComponents } from '@/app/components/mdx-components/mdx-components';
import OtherArticles from './other-article';
import ContactForm from '@/app/approach/components/contact-form/contact-form';
import ContactMap from '@/app/approach/components/contact-map/contact-map';
const BLOG_PATH = path.join(process.cwd(), 'app/content/blog');

export async function generateStaticParams() {
  return fs.readdirSync(BLOG_PATH).map(file => ({
    slug: file.replace('.mdx', ''),
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const {slug} = await params;
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);

  return (
    <main className="min-h-screen ">
    <article>
      <MDXRemote
        source={content}
        components={MdxComponents}
      />
    </article>
    <OtherArticles slug={slug} />
    <div className='w-full'>
      <ContactMap />
    </div>
    
    
    </main>
  );
}
