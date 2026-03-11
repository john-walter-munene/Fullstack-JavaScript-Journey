import React from "react";

export function DogImage({ num }) {
  const [src, setSrc] = React.useState("");

  async function loadDogImage() {
    const res = await import(`../assets/dog${num}.png`);
    setSrc(res.default);
  }

  return src ? (<img src={src} alt="Dog" />) : (
    <div className="loader">
      <button onClick={loadDogImage}>Click to load image</button>
    </div>
  );
}