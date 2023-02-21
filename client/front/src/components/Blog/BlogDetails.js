import { React, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogById } from "../../redux/actions/actionIndex";
import Navbar from "../NavBar/NavBar";
import style from "../Blog/BlogDetails.module.css";
import Footer from "../Footer/Footer";

export default function BlogDetails() {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog);
  useEffect(() => {
    dispatch(getBlogById(blogId));
  }, []);
  return (
    <div className={style.blogBody}>
      <Navbar />
      <h1 className={style.tittle}>
        <u>{blog.name}</u>
      </h1>
      <div className={style.imagecontainer}>
        <img src={blog.img} alt="Img not found" />
      </div>
      <p className={style.paragraph}>{blog.text}</p>
      <Footer />
    </div>
  );
}
