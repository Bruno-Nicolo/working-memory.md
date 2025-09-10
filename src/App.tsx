import "./App.css";
import { EditorHeader } from "./components/header";
import "./index.css";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";

function App() {
  return (
    <div>
      <EditorHeader />
      <SimpleEditor />
    </div>
  );
}

export default App;
