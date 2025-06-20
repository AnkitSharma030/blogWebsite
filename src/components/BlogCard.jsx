const BlogCard=(props)=>{
    const {title, description, img}=props;

    return(
        <div className="blogcard">
            <h3>{title}</h3>
            <p>{description}</p>
             <img src={img} alt={title} style={{ width: '100%', height: 'auto' }} />
        </div>
    );
}

export default BlogCard;