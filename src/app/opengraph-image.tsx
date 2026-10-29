import { ImageResponse } from "next/og";

export const alt = "Anshul Awasthi, Product Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAF8",
          color: "#202124",
          padding: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 34, display: "flex" }}>
          anshul<span style={{ color: "#2563EB" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 78, lineHeight: 1.05 }}>
          <span>I go where the problem is,</span>
          <span style={{ color: "#1D4ED8", fontStyle: "italic" }}>then figure out what to build.</span>
        </div>
        <div style={{ fontSize: 28, color: "#566274", fontFamily: "sans-serif", display: "flex" }}>
          Anshul Awasthi · Product Manager
        </div>
      </div>
    ),
    size,
  );
}
