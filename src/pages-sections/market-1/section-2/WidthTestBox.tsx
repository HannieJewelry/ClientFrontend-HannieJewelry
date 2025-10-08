"use client";

import { useEffect } from "react";
import useMeasure from "react-use-measure";

export default function WidthTestBox() {
    const [ref, bounds] = useMeasure();

    useEffect(() => {
        console.log("Element width:", bounds.width);
    }, [bounds.width]);

    return (
        <div
            ref={ref}
            style={{
                backgroundColor: "#f0f0f0",
                padding: "20px",
                margin: "20px auto",
                width: "80%", // thử đổi % hoặc px để test
                textAlign: "center",
            }}
        >
            <strong>Measured Width:</strong> {Math.round(bounds.width)}px
        </div>
    );
}
