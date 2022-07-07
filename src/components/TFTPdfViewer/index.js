
import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

// react-pdf components
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { pdfjs } from 'react-pdf';

// material ui components
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

// TFT webkit components
import TFTBox from "components/TFTBox";
import TFTTypography from 'components/TFTTypography';

// TFT webkit base styles
import breakpoints from "assets/theme/base/breakpoints";

// assets
import LeftArrowIcon from "assets/images/symbol/navigation/left-arrow.svg";
import RightArrowIcon from "assets/images/symbol/navigation/right-arrow.svg";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

const PDFViewerContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  alignItems: "center",
  // justifyContent: "center",
  position: "relative",

  "canvas": {
    margin: "auto",
    width: "auto !important",
    height: "auto !important",
  },

  ".react-pdf__Page__textContent, .react-pdf__Page__annotations": {
    display: "none",
  },

  ".react-pdf__Page.prevPage": {
    position: "absolute !important",
    zIndex: 1,
  },
});

const PageRender = styled("div")({
  width: "fit-content",
  height: "100%",
  overflow: "auto",
  display: "none",
});


const PageContainer = styled(TFTBox)(({ pageWidth }) => ({
  width: `${pageWidth}px`,
  height: `${(pageWidth * 1.414)}px`,
  background: "transparent",
  border: "2px rgb(41, 69, 92) solid",
  borderRadius: `${pageWidth / 25}px`,
  padding: "0px",
  overflow: "hidden",
}));

const PageSlider = styled(Slider)({
  margin: "16px 0px 16px 0px",
  width: "60%",
  color: "#344767 !important",
  // track: {
  //   height: 4,
  //   borderRadius: 2,
  // },
});

const NavButton = styled("div")(({ disabled, left }) => ({
  position: "absolute",
  left: left ? 0 : undefined,
  right: left ? undefined : 0,
  top: "calc(50% - 24px)",
  zIndex: 2,
  opacity: 0.3,

  "&:hover, &:active": {
    opacity: disabled ? 0.3 : 1,
  },
}));

export default function PDFViewer(props) {
  const { file } = props;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(null);
  const [pageWidth, setPageWidth] = useState(200);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function handleChangePage(event, newValue) {
    setPageNumber(newValue);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function onRenderSuccess() {
    const importPDFCanvas = document.querySelector(".import-pdf-page canvas");
    setCurrentPage(importPDFCanvas.toDataURL());
  }

  useEffect(() => {
    // A function that sets the display state for the TFTNavbarMobile.
    function calcPageWidth() {
      if (window.innerWidth < breakpoints.values.sm) {
        setPageWidth(window.innerWidth - 48);
      } else if (window.innerWidth < breakpoints.values.md) {
        setPageWidth(breakpoints.values.sm - 156);
      } else if (window.innerWidth < breakpoints.values.lg) {
        setPageWidth(breakpoints.values.md - 168);
      } else if (window.innerWidth < breakpoints.values.xl) {
        setPageWidth(breakpoints.values.lg - 192);
      } else if (window.innerWidth < breakpoints.values.xxl) {
        setPageWidth(breakpoints.values.xl - 268);
      } else {
        setPageWidth(breakpoints.values.xxl - 320);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
    resizing the window.
    */
    window.addEventListener("resize", calcPageWidth);

    // Call the displayMobileNavbar function to set the state with the initial value.
    calcPageWidth();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", calcPageWidth);
  }, []);

  return (
    <PDFViewerContainer>
      <PageRender>
        <Document
          // loading={<CircularProgress style={{ margin: '10rem auto' }} />}
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            className="import-pdf-page"
            onRenderSuccess={onRenderSuccess}
            width={pageWidth}
          />
        </Document>
      </PageRender>
      <PageContainer pageWidth={pageWidth}>
        <img src={currentPage} width="100%" />
        <NavButton onClick={previousPage} disabled={pageNumber <= 1} left="true">
          <img src={LeftArrowIcon} height="48px" />
        </NavButton>
        <NavButton onClick={nextPage} disabled={pageNumber >= numPages} right="true">
          <img src={RightArrowIcon} height="48px" />
        </NavButton>
      </PageContainer>
      <PageSlider size="small" aria-label="Small"
        min={1} max={numPages}
        value={pageNumber}
        onChange={handleChangePage}
        valueLabelDisplay="auto"
      />
      <TFTTypography variant="body2" align="center" mb={3} sx={{color: "#fff", fontSize: "16px"}}>
        {`${~~(pageNumber * 100 / numPages)}% Read`}
      </TFTTypography>
    </PDFViewerContainer>
  );
};

PDFViewer.propTypes = {
  file: PropTypes.string.isRequired,
};
