import { ImageResponse } from "next/og";

export const alt = "Robert Gurgul - Profesjonalne Doradztwo Zootechniczne";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2C2824 0%, #4A4038 100%)",
          color: "#F5F1EA",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: "50%",
            border: "2px solid #A89474",
            fontSize: 36,
            fontWeight: 700,
            color: "#A89474",
            marginBottom: 36,
          }}
        >
          RG
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, textAlign: "center" }}>
          Profesjonalne Doradztwo Zootechniczne
        </div>
        <div style={{ fontSize: 28, color: "#A89474", marginTop: 18 }}>
          Robert Gurgul
        </div>
      </div>
    ),
    { ...size }
  );
}
