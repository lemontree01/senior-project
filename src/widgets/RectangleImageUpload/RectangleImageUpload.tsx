import React, { useState, ChangeEvent } from "react";

interface Q {
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>
}

const RectangleImageUpload: React.FC<Q> = (props) => {
  const {imageUrl, setImageUrl} = props

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImageUrl(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <div
      style={{
        width: 150 * 1.2,
        height: 200 * 1.2,
        border: "2px solid #ccc",
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {imageUrl ? (
        <>
          <img
            src={imageUrl}
            alt="Uploaded Image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </>
      ) : (
        <label
          htmlFor="imageInput"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            left: 0,
            cursor: "pointer",
            color: "gray",
            fontSize: 15,
          }}
        >
          Click to Upload Image
        </label>
      )}
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </div>
    {imageUrl ? <div style={{
      color: 'green',
      fontSize: 15,
      height: 20,
    }}>Successfully Loaded</div>
    :
  <div style={{
    height: 20,
    width: 15
  }}></div>
  }
    </>
  );
};

export default RectangleImageUpload;
