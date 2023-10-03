import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react" ;
import Contacts from "../Contacts";
// import './jest-global-mocks';
// import {toHaveStyle} from '@testing-library/jest-dom';
// require('@testing-library/jest-dom');



test("should load contact UI component",() =>{
render(<Contacts />)
const heading = screen.getByRole("heading");
expect(heading).toBeInTheDocument();

})