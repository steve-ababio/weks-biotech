import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogDir = path.join(process.cwd(), "/app/content/blog");
const insightDir = path.join(process.cwd(), "/app/content/insights");
function getFilesContent(files:string[],dir:string){
  return files.map((file) => {
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data } = matter(fileContent);
    return {
      ...data,
    };
  });
}

export async function getAllPosts() {
  const files = fs.readdirSync(blogDir);
  return getFilesContent(files,blogDir);
}

export async function getAllInsights() {
  const files = fs.readdirSync(insightDir);
  return getFilesContent(files,insightDir);
}


async function getFileContent(filePath:string){
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  const processed = await remark().use(html).process(content);
  return {
    frontMatter: data,
    content: processed.toString(),
  };
}
export async function getPostBySlug(slug: string) {
  const filePath = path.join(blogDir, `${slug}.md`);
  return getFileContent(filePath);
}

export function getInsightBySlug(slug: string) {
  const filePath = path.join(insightDir, `${slug}.md`);
  return getFileContent(filePath);
}