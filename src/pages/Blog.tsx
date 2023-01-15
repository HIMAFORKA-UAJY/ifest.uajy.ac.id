import logo from "../assets/images/logo.png";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { Carousel } from "flowbite-react";
import { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";
import parse from 'html-react-parser'

interface Props {
  property: {
    prop: object;
  };
}

const Blog: FC<Props> = ({ property }: Props) => {
  console.log(property)
  const blog = property.prop
  
  const Background = "/images/blog-bg1.png";
  const content = blog.konten
  const table = blog.table
  return (
    <Layout>
      <div className="absolute top-0 -z-10 h-screen w-screen bg-cover bg-center bg-no-repeat" style={{background: '#202b3f'}}>
        {/* <div className="flex justify-center h-screen w-screen flex-col pt-32 lg:flex-row bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${Background})`}}> */}
        <div className="flex justify-center h-screen w-screen flex-col pt-32 lg:flex-row bg-cover bg-center bg-no-repeat">
          
          <div className="font-retroica text-white text-center" style={{margin: 'auto',fontSize: '3rem', wordWrap: 'break-word'}}>{blog.judul}</div>
          
          {/* <div className="flex w-full justify-end pb-10 pr-8 text-right">
            <img className="w-[30rem]" src="/images/blog-bg1.png" alt="" />
          </div> */}
        </div>
        <div className="relative h-[60rem]">
          <div className="absolute left-[50%] -top-24 z-10 -ml-[45%] h-fit w-[90%] bg-[#FAFAFA] p-12 drop-shadow-2xl lg:pr-40">
            <div className="mb-14 flex items-center gap-8">
              <img className="float-left w-20" src={logo} alt="ifest-logo" />
              <div>
                <div className="font-retroica lg:text-lg">{blog.jabatan}</div>
                <div className="font-louisgeorgecafe lg:text-lg">{blog.author}</div>
                <div className="font-louisgeorgecafe" style={{color: '#c9c9c9'}}>{blog.publication_date}</div>
              </div>
            </div>
            <p className="font-louisgeorgecafe lg:text-lg">
              {parse(content)}
            </p>
            
         {table && parse(table)}
          </div>
        </div>
        <div className="flex w-screen flex-col items-center justify-center gap-2 bg-[#1B1442] pt-12">
          <div className="font-retron2000 text-5xl font-bold text-white">Contact Us</div>
          <div className="font-retroica text-base text-white">
            Masih ada yang bingung? Yuk kontak kami.
          </div>
          <div className="h-64 w-64">
            <Carousel leftControl=" " rightControl=" " indicators={false}>
              <div className="flex justify-center text-center text-white">
                <table className="table-cell border-separate rounded-xl border-[6px] border-[#9DCE6D] p-2">
                  <thead>
                    <tr>
                      <th>WDC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="#f" target="_blank">
                          <div style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
                            0812 3470 303
                          </div>
                          <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-[#6ca0af] bg-gradient-to-br from-[#9dcd6c] px-2">
                            <FaWhatsapp />
                            Andreas
                          </button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#f" target="_blank">
                          <div style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
                            0812 3470 303
                          </div>
                          <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-[#6ca0af] bg-gradient-to-br from-[#9dcd6c] px-2">
                            <FaWhatsapp />
                            Andreas
                          </button>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Carousel>
          </div>
        </div>
        <Footer className="bg-[#1B1442] p-4" />
      </div>
    </Layout>
  );
};

export default Blog;