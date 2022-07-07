/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 *
 * Product Page:
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 *
 * Coded by Telecrypto@OKI
 *
 **************************************************************
 */

import React from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";

import { IconButton } from "@mui/material";
import { PhotoCamera, Delete } from "@mui/icons-material";
import TFTBox from "components/TFTBox";
import cameraLogo from "assets/images/common/camera.webp";

class TFTImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreview: this.props.imageUrl,
    };
  }

  onDelete = () => {
    this.setState({
      imagePreview: null,
    });
    if (this.props.onDelete && this.props.onDelete !== null)
      this.props.onDelete();
  };

  onDrop = files => {
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.setState({
        imagePreview: reader.result,
      });
      if (this.props.onUpload && this.props.onUpload !== null)
        this.props.onUpload({
          name: files[0].name,
          data: reader.result});
    };
  }

  render() {
    const { imagePreview } = this.state;
    const {
      sxCanvas,
      sxImage,
      sxFooter,
    } = this.props;
    const hasPreview = imagePreview !== null && imagePreview !== "";

    return (
      <TFTBox sx={{
        ...sxCanvas,
      }}>
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}
          noClick={hasPreview}
          accept="image/*"
          ref={node => {
            this.dropZone = node;
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <TFTBox sx={{
                ...sxImage,
                cursor: "pointer",
              }}>
                <img src={hasPreview ? imagePreview : cameraLogo} width="100%" height="100%" />
              </TFTBox>
            </div>
          )}
        </Dropzone>
        <TFTBox sx={{ ...sxFooter }}>
          {/* <Tooltip title="Upload"> */}
            <IconButton
              // touch="true"
              onClick={() => {
                this.dropZone.open();
              }}
            >
              <PhotoCamera sx={{ color: "rgba(255,255,255,0.5)" }} />
            </IconButton>
          {/* </Tooltip> */}
          {hasPreview && (
            // <Tooltip title="Delete">
              <IconButton
                // touch="true"
                onClick={this.onDelete}
              >
                <Delete sx={{ color: "rgba(255,255,255,0.5)" }} />
              </IconButton>
            // </Tooltip>
          )}
        </TFTBox>
      </TFTBox>
    );
  }
};

TFTImageUpload.propTypes = {
  imageUrl: PropTypes.string,
  sxCanvas: PropTypes.object,
  sxImage: PropTypes.object,
  sxFooter: PropTypes.object,
  onUpload: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TFTImageUpload;
