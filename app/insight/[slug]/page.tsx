import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MdxComponents } from '@/app/components/mdx-components/mdx-components';
import ContactMap from '@/app/approach/components/contact-map/contact-map';
import OtherInsights from './components/other-insights/other-insight';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
const INSIGHT_DIR = path.join(process.cwd(), 'app/content/insights');

export async function generateStaticParams() {
  return fs.readdirSync(INSIGHT_DIR).map(file => ({
    slug: file.replace('.mdx', ''),
  }));
}

export default async function InsightPost({ params }: { params: { slug: string } }) {
  const {slug} = await params;
  const filePath = path.join(INSIGHT_DIR, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);

  return (
    <main className="min-h-screen ">
      <Header/>
      <section className='px-3 lg:px-44'>
        <article className='px-3 max-w-200 mx-auto w-full'>
          <MDXRemote
            source={content}
            components={MdxComponents}
          />
        </article>
        <OtherInsights slug={slug} />
      </section>
    <Footer />
    </main>
  );
}
