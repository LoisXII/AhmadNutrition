import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { FreeMode } from 'swiper/modules';
import Head from 'next/head';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import Blogsearch from '@/components/Blogsearch';
import Link from 'next/link';
import useFetchData from '@/hooks/useFetchData';
import Spinner from '@/components/Spinner';

export default function blogs() {

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(6);
    const [searchQuery, setSearchQuery] = useState('');

    const { alldata, loading } = useFetchData('/api/blogs');

    // Function to handle page change
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const allblog = alldata.length; // Total number of blogs
    // Filter all data based on search query
    const filteredBlogs = searchQuery.trim() === '' ? alldata : alldata.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Calculate index of the first blog displayed on the current page
    const indexOfFirstblog = (currentPage - 1) * perPage;
    const indexOfLastblog = currentPage * perPage;

    // Get the current page's blogs
    const currentBlogs = filteredBlogs.slice(indexOfFirstblog, indexOfLastblog);

    // publish blogs
    const publishedData = currentBlogs.filter(ab => ab.status === "publish");

    const sliderpubdata = alldata.filter(ab => ab.status === "publish");

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allblog / perPage); i++) {
        pageNumbers.push(i);
    }


    const [searchInput, setSearchInput] = useState(false);

    const handleSearchOpen = () => {
        setSearchInput(!searchInput);
    }

    const handleSearchClose = () => {
        setSearchInput(false);
    }



    return <>
        <Head>
            <title>Blogs</title>
        </Head>
        <div className="blogpage">
            <section className="tophero">
                <div className="container">
                    <div className="toptitle">
                        <div className="toptitlecont flex">
                            <h1 data-aos="fade-right">Welcome to <span>Alaraj Blogs!</span></h1>
                            <p data-aos="fade-right">I write about healthy eating, nutrition tips, and wellness. The best articles, resources, and advice to help you achieve your health goals and maintain a balanced lifestyle. </p>
                            <div className="subemail" data-aos="fade-up">
                                <form action="#" className="flex">
                                    <input onClick={handleSearchOpen} type="text" placeholder="Search blogs here..." />
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="featured">
                        <div className="container">
                            <div className="border"></div>
                            <div className="featuredposts">
                                <div className="fetitle flex">
                                    <h3 data-aos="fade-up">Featured Posts :</h3>
                                </div>
                                <div className="feposts flex">
                                    <Swiper
                                        slidesPerView={'auto'}
                                        freeMode={true}
                                        spaceBetween={30}
                                        className="mySwiper"
                                        modules={[FreeMode]}
                                    >
                                        {loading ? <Spinner /> : <>
                                            {sliderpubdata.slice(0, 6).map((blog) => {
                                                return <SwiperSlide key={blog._id}>
                                                    <div className="fpost" key={blog._id}>
                                                        <Link href={`/blogs/${blog.slug}`}>
                                                            <img src={blog.images[0]} alt={blog.title} />
                                                        </Link>
                                                        <div className="fpostinfo">
                                                            <div className="tegs flex">
                                                                {blog.blogcategory.map((cat) => {
                                                                    return <Link href={`/blogs/category/${cat}`} className="ai"><span></span>{cat}</Link>
                                                                })}
                                                            </div>
                                                            <h2><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link></h2>
                                                            <div className="fpostby flex">
                                                                <img src="/img/coder.jpg" alt="" />
                                                                <p>By Ahmad Alaraj</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            })}
                                        </>}


                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="populartegssec">
                <div className="container">
                    <div className="border"></div>
                    <div className="populartegsdata">
                        <div className="fetitle">
                            <h3>Popular Tags</h3>
                            </div>
<div className="poputegs">
    <Link href="/blogs/category/Healthy Eating" className="pteg" data-aos="fade-right">
        <img src="https://em-content.zobj.net/source/apple/354/carrot_1f955.png" alt="Carrot" />
        <div className="tegs">
            <div className="apps"><span></span>Healthy Eating</div>
        </div>
    </Link>
    <Link href="/blogs/category/Nutrition Tips" className="pteg" data-aos="fade-right">
        <img src="https://em-content.zobj.net/source/apple/354/grapes_1f347.png" alt="Grapes" />
        <div className="tegs">
            <div className="ai"><span></span>Nutrition Tips</div>
        </div>
    </Link>
    <Link href="/blogs/category/Plant-Based" className="pteg" data-aos="fade-right">
        <img src="https://em-content.zobj.net/source/apple/354/herb_1f33f.png" alt="Plant-Based" />
        <div className="tegs">
            <div className="vr"><span></span>Plant-Based</div>
        </div>
    </Link>
    <Link href="/blogs/category/Healthy Recipes" className="pteg" data-aos="fade-left">
        <img src="https://em-content.zobj.net/source/apple/354/fork-and-knife_1f374.png" alt="Healthy Recipes" />
        <div className="tegs">
            <div className="apple"><span></span>Healthy Recipes</div>
        </div>
    </Link>
    <Link href="/blogs/category/Weight Loss" className="pteg" data-aos="fade-left">
        <img src="https://em-content.zobj.net/source/apple/354/avocado_1f951.png" alt="Weight Loss" />
        <div className="tegs">
            <div className="google"><span></span>Weight Loss</div>
        </div>
    </Link>
    <Link href="/blogs/category/Fitness" className="pteg" data-aos="fade-left">
        <img src="https://em-content.zobj.net/source/apple/354/person-running_1f3c3.png" alt="Fitness" />
        <div className="tegs">
            <div className="fintech"><span></span>Fitness</div>
        </div>
    </Link>
</div>

                    </div>
                </div>
            </section>
            <section className="latestpostssec">
                <div className="container">
                    <div className="border"></div>
                    <div className="latestpostsdata">
                        <div className="fetitle">
                            <h3>Latest Articles :</h3>
                        </div>
                        <div className="latestposts">
                            {loading ? <Spinner /> : <>
                                {publishedData.map((blog) => {
                                    return <div className="lpost" data-aos="flip-right" key={blog._id}>
                                        <div className="lpostimg">
                                            <Link href={`/blogs/${blog.slug}`}><img src={blog.images[0]} alt={blog.title} /></Link>
                                            <div className="tegs">
                                                {blog.blogcategory.map((cat) => {
                                                    return <Link href={`/blogs/category/${cat}`} className="ai"><span></span>{cat}</Link>
                                                })}
                                            </div>
                                        </div>
                                        <div className="lpostinfo">
                                            <h3><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                                            </h3>
                                            <p>Audio equidem philosophi vocem, Epicure, sed quid tibi dicendum sit oblitus es. Haec
                                                et tu ita posuisti, et verba vestra sunt. Contemnit enim disserendi elegantiam,
                                                confuse loquitur.

                                                Bona autem corporis huic sunt, quod posterius posui, similiora. Quod cum ita sit,
                                                perspicuum est omnis rectas res atque laudabilis eo referri, ut</p>
                                            <h4 className="flex"><img src="img/coder.jpg" alt="" /><span>by Ahmad Alaraj</span></h4>
                                        </div>
                                    </div>
                                })}
                            </>}

                        </div>
                    </div>
                    
                    {publishedData.length === 0 ? (
                        ""
                    ) : (
                        <div className='blogspaginationbtn flex flex-center mt-3'>
                            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                            {pageNumbers.slice(Math.max(currentPage - 3, 0), Math.min(currentPage + 2, pageNumbers.length)).map(number => (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`${currentPage === number ? 'active' : ''}`}
                                >
                                    {number}
                                </button>
                            ))}
                            <button onClick={() => paginate(currentPage + 1)} disabled={currentBlogs.length < perPage}>Next</button>
                        </div>
                    )}
                </div>
            </section>


            {searchInput ? <Blogsearch cls={handleSearchClose} /> : null}


        </div>
    </>
}