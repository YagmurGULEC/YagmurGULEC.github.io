"use client"; // ✅ Ensure this runs only in the browser

import { useEffect } from "react";

export default function BootstrapClient() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min") // ✅ Load Bootstrap JS dynamically
            .then(() => console.log("Bootstrap loaded successfully"))
            .catch((err) => console.error("Bootstrap failed to load", err));
    }, []);

    return null; // No UI, just loads Bootstrap JS
}
