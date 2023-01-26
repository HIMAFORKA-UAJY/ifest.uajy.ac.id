import CP from "@/components/CP";
import Footer from "@/components/Footer";
import posts from "@/data/posts.json";
import { navColors } from "@/recoil/atoms";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import { FC } from "react";
import { useSetRecoilState } from "recoil";

interface Post {
  id: number;
  slug: string;
  title: string;
  author: {
    name: string;
    jabatan: string;
  };
  date: string;
  thumbnail: string;
  content: string;
}

interface Props {
  posts: Post[];
}

export const getStaticPaths = async () => {
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async () => {
  return {
    props: { posts },
  };
};

const Index: FC<Props> = ({ posts }: Props) => {
  useSetRecoilState(navColors)({ bg1: "#18293f", bg2: "#2a548c", fg: "#92b9ec" });
  const router = useRouter();
  const { slug } = router.query;
  let post: Post | undefined = posts.find((post) => post.slug === slug);
  return (
    <div className="absolute top-0 -z-10 min-h-screen w-full bg-[#202b3f]">
      <div className="flex flex-col items-center justify-center gap-8 pt-32">
        <div className="text-center font-retroica text-4xl tracking-[0.1em] text-white">
          {post?.title}
        </div>
        <div className="flex w-10/12 flex-col gap-8 rounded-xl bg-white p-8 drop-shadow-2xl">
          <div className="flex flex-wrap items-center gap-8">
            <img className="w-20" src="/images/logo.webp" alt="ifest-logo" />
            <div>
              <div className="font-retroica text-lg">{post?.author.jabatan}</div>
              <div className="font-louisgeorgecafe text-lg">{post?.author.name}</div>
              <div className="font-louisgeorgecafe text-gray-400">{post?.date}</div>
            </div>
          </div>
          <p className="text-justify font-louisgeorgecafe lg:text-lg">
            {parse(String(post?.content))}
          </p>
        </div>
      </div>
      <CP get="all" />
      <Footer />
    </div>
  );
};

export default Index;
