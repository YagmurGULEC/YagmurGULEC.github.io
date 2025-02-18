"use client";
import React from "react";


export default function BlogPage() {

    const BlogPage =
        [
            {
                "blogId": 1,
                "title": "Version Control with Git Atlassian University (Coursera) Labs",
                "date": "February 17, 2025",
            },


        ]

    return (
        <section className="py-5 bg-light">
            <div className="container px-5">
                <div className="row gx-5">
                    <div className="col-xl-8">
                        <h2 className="fw-bolder fs-5 mb-4">Blogs</h2>
                        {
                            BlogPage.map((item, index) => (
                                <div className="mb-4" key={index}>
                                    <div className="small text-muted">{item.date}</div>
                                    <a className="link-dark" href={`/blog/${item.blogId}/en`}><h3>{item.title}</h3></a>
                                </div>
                            ))
                        }





                    </div>

                </div>
            </div>
        </section >
    );
}