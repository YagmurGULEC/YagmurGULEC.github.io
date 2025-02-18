import React from "react";
import CodeBlock from "@/app/components/CodeBlock";

export default function BlogPost() {
    return (
        <section className="py-5">
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-12">
                        <article>
                            <header className="mb-4">
                                <h1 className="fw-bolder mb-1">How to Use Bootstrap for Code Blocks</h1>
                                <div className="text-muted fst-italic mb-2">February 18, 2025</div>
                                <a className="badge mx-3 bg-secondary text-decoration-none link-light" href="#!">Bootstrap</a>
                                <a className="badge bg-secondary text-decoration-none link-light" href="#!">Web Development</a>
                            </header>

                            <section className="mb-5">
                                <p className="fs-5 mb-4">Here is how you can use Bootstrap to format and style code snippets.</p>

                                {/* ✅ Use the CodeBlock component */}
                                <CodeBlock code={`<button class="btn btn-primary">Click Me</button>`} />

                                <CodeBlock code={`console.log("Hello, World!");`} />

                                <h2 className="fw-bolder mb-4 mt-5">Why Use Bootstrap?</h2>
                                <p className="fs-5 mb-4">Bootstrap allows you to quickly style your code snippets without extra CSS.</p>
                            </section>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
