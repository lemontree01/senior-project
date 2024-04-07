import { Button } from "@mui/material";
import React, { useState, ChangeEvent, useEffect, useRef } from "react";

interface Q {
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const RectangleImageUpload: React.FC<Q> = (props) => {
  const { imageUrl, setImageUrl } = props;

  console.log("current", imageUrl);
  const inputRef = useRef<any>(null); // import useRef from react

  const handleImageChange = (event: any) => {
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handleOnImageRemoveClick = () => {
    setImageUrl("noImage");
    inputRef.current.value = "";
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
        {imageUrl !== "noImage" ? (
          <>
            {
              <img
                src={imageUrl}
                alt="Uploaded Image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
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
          onChange={handleImageChange}
          ref={inputRef}
        />
      </div>
      {imageUrl !== "noImage" ? (
        <div className="flex flex-col">
          <div
            style={{
              color: "green",
              fontSize: 15,
              height: 20,
            }}
          >
            Successfully Loaded
          </div>
          <Button variant="outlined" onClick={handleOnImageRemoveClick} sx={{
            width: 150 * 1.2
          }}>
            Clear picture
          </Button>
        </div>
      ) : (
        <div
          style={{
            height: 20,
            width: 15,
          }}
        ></div>
      )}
    </>
  );
};

export default RectangleImageUpload;
