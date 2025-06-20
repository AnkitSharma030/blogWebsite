const BlogCard=(props)=>{
    const {title, description, link}=props;

    return(
        <div className="blogcard">
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={link} alt="" />
        </div>
    );
}

export default BlogCard;