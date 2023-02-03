import React from 'react'
import css from './css/PostItem.module.css'

export default function PostItem(props) {

    return (
            props.savedPosts.map(post => {
                return (
                    <div key={post.title} className={css.SearchItem}>
                        <p>{post.title}</p>
                        <p>{post.name}</p>
                        <img src={post.image} alt="" />
                        <p>{post.description}</p>
                    </div>
                )
            })
    )
}
