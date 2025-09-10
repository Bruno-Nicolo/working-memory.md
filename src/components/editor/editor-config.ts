import type { UseEditorOptions } from "@tiptap/react";

// --- Tiptap Core Extensions ---
import { StarterKit } from "@tiptap/starter-kit";
import { Image } from "@tiptap/extension-image";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import { TextAlign } from "@tiptap/extension-text-align";
import { Typography } from "@tiptap/extension-typography";
import { Highlight } from "@tiptap/extension-highlight";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { Placeholder, Selection } from "@tiptap/extensions";

import { HorizontalRule } from "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node-extension";

import { ImageUploadNode } from "@/components/tiptap-node/image-upload-node/image-upload-node-extension";
import { handleImageUpload, MAX_FILE_SIZE } from "@/lib/tiptap-utils";

import "../../styles/syntax-highlighting.scss";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";

export const editorConfig: UseEditorOptions = {
  immediatelyRender: false,
  shouldRerenderOnTransaction: false,
  onUpdate: ({ editor }) => {
    localStorage.setItem("content", editor.getHTML());
  },
  content: localStorage.getItem("content") ?? "",
  editorProps: {
    attributes: {
      autocomplete: "off",
      autocorrect: "off",
      autocapitalize: "off",
      "aria-label": "Main content area, start typing to enter text.",
      class: "simple-editor",
    },
  },
  extensions: [
    Placeholder.configure({
      placeholder: ({ editor }) => {
        if (editor.getText().trim() == "") return "Start Writing...";
        return "";
      },
    }),
    StarterKit.configure({
      codeBlock: false,
      horizontalRule: false,
      link: {
        openOnClick: true,
        enableClickSelection: true,
      },
    }),
    CodeBlockLowlight.configure({
      lowlight: createLowlight(common),
    }),
    HorizontalRule,
    TextAlign.configure({ types: ["heading", "paragraph"] }),
    TaskList,
    TaskItem.configure({ nested: true }),
    Highlight.configure({ multicolor: true }),
    Image,
    Typography,
    Superscript,
    Subscript,
    Selection,
    ImageUploadNode.configure({
      accept: "image/*",
      maxSize: MAX_FILE_SIZE,
      limit: 3,
      upload: handleImageUpload,
      onError: (error) => console.error("Upload failed:", error),
    }),
  ],
};
