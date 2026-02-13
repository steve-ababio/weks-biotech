import Image from 'next/image';

export const MdxComponents = {
  h1: (props: any) => (
    <h1
      className="mt-6 mb-10 text-center text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
      {...props}
    />
  ),

  h2: (props: any) => (
    <h2
      className="mt-8 mb-4 text-2xl font-semibold text-slate-900"
      {...props}
    />
  ),

  p: (props: any) => (
    <p
      className="mb-6 text-base leading-7 text-slate-600"
      {...props}
    />
  ),

  ul: (props: any) => (
    <ul
      className="mb-2 space-y-3 list-disc list-inside text-slate-600"
      {...props}
    />
  ),

  li: (props: any) => (
    <li className="leading-7" {...props} />
  ),

  img: ({ src, alt }: any) => (
    <div className="relative my-12 h-[420px] w-full overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  ),
};
