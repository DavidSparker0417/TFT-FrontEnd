/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 *
 * Product Page:
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 *
 * Coded by DavidSparker
 *
 **************************************************************
 */

import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import TFTBox from "components/TFTBox";

export default function DropZone({ children, setImage }) {
  const onDrop = useCallback((acceptedFiles) => {
    const reader = new FileReader();
    reader.onabort = () => console.log("file reading was aborted.");
    reader.onerror = () => console.log("file reading has failed.");
    reader.onload = () => {
      setImage({
        name: acceptedFiles[0].name,
        data: reader.result,
      });
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <TFTBox sx={{opacity: isDragActive ? "0.3" : "1"}}>
          {children}
        </TFTBox>
      </div>
    </div>
  );
}

DropZone.propTypes = {
  children: PropTypes.node,
  setImage: PropTypes.any,
};
