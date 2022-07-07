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

import React from "react";
import PropTypes from "prop-types";
import Froala from "react-froala-wysiwyg";
// import FroalaEditor from "froala-editor";
// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/third_party/embedly.min.js";
import "froala-editor/js/plugins/link.min.js";
import "froala-editor/js/plugins/font_size.min.js";
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/third_party/embedly.min.css";
import "froala-editor/css/themes/dark.css";
import "assets/css/fr-custom.css";
import { SERVER } from "constants";
import TFTBox from "components/TFTBox";

// const frToolbarButtons = {
//   moreText: {
//     buttons: [
//       "bold",
//       "italic",
//       "underline",
//       "fontSize",
//       "fontFamily",
//       "textColor",
//       "backgroundColor",
//     ],
//   },
//   moreParagraph: {
//     buttons: [
//       "alignLeft",
//       "alignCenter",
//       "formatUL",
//       "alignRight",
//       "alignJustify",
//       "formatOLSimple",
//       "formatOL",
//       "formatUL",
//       "paragraphFormat",
//       "paragraphStyle",
//       "lineHeight",
//       "outdent",
//       "indent",
//       "quote",
//     ],
//     buttonsVisible: 5,
//   },
//   moreRich: {
//     buttons: [
//       "insertLink",
//       "insertImage",
//       "insertVideo",
//       "insertTable",
//       "emoticons",
//       "fontAwesome",
//       "specialCharacters",
//       "embedly",
//       "insertFile",
//       "insertHR",
//     ],
//   },
//   moreMisc: {
//     buttons: ["undo", "redo", "selectAll", "html", "help"],
//     align: "right",
//     buttonsVisible: 2,
//   },
// };

// const frPlugins = [
//   "table",
//   "spell",
//   "fontSize",
//   "fontFamily",
//   // "backgroundColor",
//   "quote",
//   "save",
//   "quickInsert",
//   "paragraphFormat",
//   "paragraphStyle",
//   "help",
//   "draggable",
//   "align",
//   "link",
//   "lists",
//   "file",
//   "image",
//   "emoticons",
//   "url",
//   "video",
//   "embedly",
//   "colors",
//   "entities",
//   "inlineClass",
//   "inlineStyle",
//   "spellChecker",
//   "imageTUI",
// ];

const frHtmlAllowdAttrs = [
  "accept",
  "accept-charset",
  "accesskey",
  "action",
  "align",
  "allowfullscreen",
  "allowtransparency",
  "alt",
  "aria-.*",
  "async",
  "autocomplete",
  "autofocus",
  "autoplay",
  "autosave",
  "background",
  "bgcolor",
  "border",
  "charset",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "color",
  "cols",
  "colspan",
  "content",
  "contenteditable",
  "contextmenu",
  "controls",
  "coords",
  "data",
  "data-.*",
  "datetime",
  "default",
  "defer",
  "dir",
  "dirname",
  "disabled",
  "download",
  "draggable",
  "dropzone",
  "enctype",
  "for",
  "form",
  "formaction",
  "frameborder",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "http-equiv",
  "icon",
  "id",
  "ismap",
  "itemprop",
  "keytype",
  "kind",
  "label",
  "lang",
  "language",
  "list",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "mozallowfullscreen",
  "multiple",
  "muted",
  "name",
  "novalidate",
  "open",
  "optimum",
  "pattern",
  "ping",
  "placeholder",
  "playsinline",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "reversed",
  "rows",
  "rowspan",
  "sandbox",
  "scope",
  "scoped",
  "scrolling",
  "seamless",
  "selected",
  "shape",
  "size",
  "sizes",
  "span",
  "src",
  "srcdoc",
  "srclang",
  "srcset",
  "start",
  "step",
  "summary",
  "spellcheck",
  "style",
  "tabindex",
  "target",
  "title",
  "type",
  "translate",
  "usemap",
  "value",
  "valign",
  "webkitallowfullscreen",
  "width",
  "wrap",
];

const frToolbarButtons = [
  "bold",
  "italic",
  "underline",
  "|", // font
  "fontFamily",
  "fontSize",
  "textColor",
  "lineHeight",
  "|", // paragraph
  "paragraphFormat",
  "formatOL",
  "formatUL",
  "align",
  "indent",
  "outdent",
  "|", // media (link, image)
  "insertLink",
  "insertImage",
  "emoticons",
];

const frPlugins = [
  "fontFamily",
  "fontSize",
  "lineHeight",
  "paragraphFormat",
  "lists",
  "align",
  "colors",
  "link",
  "image",
  "emoticons",
  "spellChecker",
  "fontAwesome",
  "imageTUI",
  "table",
];

export default function HEditor({ model, handleModelChange, ...rest }) {
  const frConfig = {
    attribution: false,
    placeholder: "Start typing...",
    theme: "dark",
    imageUploadURL: `${SERVER}api/upload/images`,
    toolbarButtons: frToolbarButtons,
    pluginsEnabled: frPlugins,
    htmlAllowedAttrs: frHtmlAllowdAttrs,
    pasteDeniedAttrs: ['class', 'id', 'style'],
    events: {
      "image.uploaded": function (response) {
        const editor = this;
        const resp = JSON.parse(response);
        const img_url = resp.link;
        editor.image.insert(img_url, false, null, editor.image.get());
        return false;
      },
    },
  };
  return (
    <TFTBox className="tft-news-editor" {...rest}>
      <Froala
        tag="textarea"
        model={model}
        onModelChange={handleModelChange}
        config={frConfig}
      />
    </TFTBox>
  );
}

HEditor.propTypes = {
  model: PropTypes.any,
  handleModelChange: PropTypes.func,
};

