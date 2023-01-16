import parse from "html-react-parser";
import { FC, useEffect } from "react";

import logo from "../assets/images/logo.png";
import CP from "../components/CP";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

interface Props {
  Blogs: {
    author: string;
    jabatan: string;
    judul: string;
    publication_date: string;
    konten: string;
    img: string;
    address: string;
    table?: string;
  };
}

const Blog: FC<Props> = ({ Blogs }: Props) => {

  const blog = Blogs;
  
  return (
    <Layout>
      <div
        className="absolute top-0 -z-10 w-screen bg-cover bg-center bg-no-repeat"
        style={{ background: "#202b3f", height: "50rem" }}
      >
        {/* <div className="flex justify-center h-screen w-screen flex-col pt-32 lg:flex-row bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${Background})`}}> */}
        <div
          className="flex w-screen flex-col justify-center bg-cover bg-center bg-no-repeat lg:flex-row"
          style={{ paddingTop: "10rem" }}
        >
          <div
            className="text-center font-retroica text-white"
            style={{
              margin: "auto",
              fontSize: "3rem",
              wordWrap: "break-word",
              marginBottom: "2rem",
            }}
          >
            {blog.judul}
          </div>

          {/* <div className="flex w-full justify-end pb-10 pr-8 text-right">
            <img className="w-[30rem]" src="/images/blog-bg1.png" alt="" />
          </div> */}
        </div>
        <div className="flex justify-center p-6 pb-24">
          <div className="z-10 h-fit w-[90%] bg-[#FAFAFA] p-12 drop-shadow-2xl lg:pr-40">
            <div className="mb-14 flex items-center gap-8">
              <img className="float-left w-20" src={logo} alt="ifest-logo" />
              <div>
                <div className="font-retroica lg:text-lg">{blog.jabatan}</div>
                <div className="font-louisgeorgecafe lg:text-lg">{blog.author}</div>
                <div className="font-louisgeorgecafe" style={{ color: "#c9c9c9" }}>
                  {blog.publication_date}
                </div>
              </div>
            </div>
            <p className="font-louisgeorgecafe lg:text-lg">{parse(blog.konten)}</p>

            {blog.table && parse(blog.table)}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 overflow-x-hidden bg-[#1B1442]">
          <CP />
        </div>
        <Footer className="bg-[#1B1442] p-4" />
      </div>
    </Layout>
  );
};

export default Blog;
