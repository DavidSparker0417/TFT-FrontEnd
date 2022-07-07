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

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { t, Trans } from "@lingui/macro";

// @mui components
import { Container, Grid } from "@mui/material";

// Webkit components
import TFTInput from "components/TFTInput";
import TFTButton from "components/TFTButton";

// custom components
import DefNavBar from "pages/components/DefNavBar";
import HEditor from "../components/HEditor";
import DropZone from "./DropZone";

import {
  createArticle,
  updateArticle,
  articlesIsLoading,
  getArticleSlug,
  clearState,
} from "slices/articles";

import { useUI } from "contexts/ui";
import { dsStrGetFilenameFromPath } from "helpers/ds-lib/ds-string";

export default function NewsEditor() {
  const dispatch = useDispatch();
  const articleLoading = useSelector(articlesIsLoading);
  const articleSlug = useSelector(getArticleSlug);

  const navigate = useNavigate();
  const location = useLocation();
  const { setLoading } = useUI();

  const [backgroundImg, setBackgroundImg] = useState(
    require("assets/images/news/editor/background.png")
  );
  const [face, setFace] = useState({
    name: null,
    data: null,
  });
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    content: "",
    tagList: [],
  });

  useEffect(() => {
    if (location.state) {
      setFormState({
        title: location.state.title,
        description: location.state.description,
        content: location.state.content,
        tagList: location.state.tagList,
      });

      const faceImagePath = location.state.faceImage;
      faceImagePath && fetch(faceImagePath)
        .then((response) => response.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = () => {
            setFace({
              name: dsStrGetFilenameFromPath(faceImagePath),
              data: reader.result,
            });
          };
          reader.readAsDataURL(blob);
        });
    }

    dispatch(clearState());
  }, []);

  useEffect(() => {
    setLoading(articleLoading);

    if (articleSlug !== "") {
      dispatch(clearState());
      if (location.state) {        
        navigate(`/news/${articleSlug}`);
      } else {
        navigate("/news/");
      }
    }
  }, [articleLoading])

  useEffect(() => {
    if (face && face.data)
      setBackgroundImg(face.data);
  }, [face]);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const handleEditor = (e) => {
    setFormState({ ...formState, content: e });
  }

  const submitArticle = async (e) => {
    e.preventDefault();

    if (formState.title === "") {
      dispatch(Error(t`News title should not be empty!`));
      return;
    }

    if (location.state) {
      dispatch(
        updateArticle({
          slug: location.state.slug,
          ...formState,
          face,
        })
      );
    } else {
      dispatch(
        createArticle({ ...formState, face, })
      );      
    }
  };

  function cancelEdit() {
    navigate(-1);
  }

  return (
    <Container>
      <DefNavBar />
      <DropZone setImage={setFace}>
        <Grid
          container
          direction="column"
          height="400px"
          justifyContent="center"
          sx={{
            background: `radial-gradient(#001A2F60 60%, #001A2FFF), url("${backgroundImg}")`,
            backgroundPosition: "right top",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <TFTInput
            name="title"
            placeholder={t`Enter Title Here`}
            value={formState.title}
            onChange={handleChange}
            required
            inputProps={{
              style: {
                fontSize: "48px",
              },
            }}
            sx={{
              border: "none",
            }}
          />
          <TFTInput
            name="description"
            placeholder={t`Enter description here`}
            value={formState.description}
            onChange={handleChange}
            inputProps={{
              style: {
                fontSize: "24px",
              },
            }}
            sx={{
              border: "none",
            }}
          />
        </Grid>
      </DropZone>
      <HEditor model={formState.content} handleModelChange={handleEditor} />
      <Grid container justifyContent="end" my={3}>
        <TFTButton variant="outlined" onClick={submitArticle}>
          <Trans>Submit</Trans>
        </TFTButton>
        <TFTButton variant="outlined" onClick={cancelEdit}>
          <Trans>Cancel</Trans>
        </TFTButton>
      </Grid>
    </Container>
  );
}
