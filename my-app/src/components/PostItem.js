import React from 'react'
import css from './css/PostItem.module.css'

export default function PostItem(props) {

    return (
            props.savedPosts.map(post => {
                // desctrucured props version
                const {name, title, description, image} = post;
                return (
                    <div key={title} className={css.SearchItem}>
                        <p>{title}</p>
                        <p>{name}</p>
                        <img src={image} alt="" />
                        <p>{description}</p>
                    </div>
                )
                // non destructured version
                // return (
                //     <div key={post.title} className={css.SearchItem}>
                //         <p>{post.title}</p>
                //         <p>{post.name}</p>
                //         <img src={post.image} alt="" />
                //         <p>{post.description}</p>
                //     </div>
                // )
            })
    )
}
