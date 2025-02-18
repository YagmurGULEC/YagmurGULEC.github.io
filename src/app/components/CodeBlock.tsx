"use client"; // Needed for event listeners

import React from "react";

type CodeBlockProps = {
    code: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    // ✅ Function to copy code to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);

    };

    return (
        <div className="position-relative bg-dark text-light rounded p-3 mt-3">
            <pre className="mb-0"><code className="text-white">{code}</code></pre>
            <button
                className="btn btn-outline-light position-absolute top-0 end-0 m-2"
                onClick={copyToClipboard}
            >
                Copy
            </button>
        </div>
    );
};

export default CodeBlock;
