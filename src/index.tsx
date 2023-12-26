import { createRoot } from "react-dom/client";
import Counter from "./components/Counter";

const root = createRoot(document.getElementById("root")!); // createRoot(container!) if you use TypeScript
root.render(<Counter />);
