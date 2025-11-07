import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter/Counter";
import userEvent from "@testing-library/user-event";
import { beforeEach  } from "vitest";

describe("Counter component", () => {
    beforeEach(()=>{
         render(<Counter />)
    })
  test("should be rendered", () => {
   

    //access dom --> btns
    
    expect(screen.getAllByRole("button")).toHaveLength(3)
    expect(screen.getByRole("heading")).toHaveTextContent(0)
  });

  test("should change count value according to clicking buttons",async ()=>{

    //access btn +
    let btnInc=screen.getByRole("button",{ name:"Increment" })
    let btnDec=screen.getByRole("button",{ name:"Decrement" })
    //click it
    await userEvent.click(btnInc)
    await userEvent.click(btnInc)

    // await userEvent.click(btnDec)
    // await userEvent.click(btnDec)
    // await userEvent.click(btnDec)
    // count value --> h1
    expect(screen.getByRole("heading")).toHaveTextContent(2)
  })
});
