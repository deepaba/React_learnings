import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../src/Components/Contact";

test(
    "should load contact page",()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    }
);