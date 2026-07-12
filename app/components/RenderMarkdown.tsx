'use client';

export default function RenderMarkdown({ contentHtml, name }: any) {
    console.log(contentHtml); // Log the contentHtml for debugging
    return (
        <div className="container m-3" id={name}>


            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    );
}