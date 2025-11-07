import { fireEvent, render, screen } from "@testing-library/react"
import Button from "../components/Button/Button"
import {  vi } from "vitest"
import userEvent from "@testing-library/user-event"



describe("Button component",()=>{
    test("should be rendered",()=>{
        render(  <Button>click me</Button> )

        //access dom --> button
       let btn= screen.getByRole("button")
        //assert
        expect(btn).toBeInTheDocument()
        // expect(btn.textContent).toBe("click me")
        expect(btn).toHaveTextContent(/click me/)
        expect(screen.getByText(/click me/)).toBeInTheDocument()

    })
    test("should call the click handler",async ()=>{
        let handlerClick= vi.fn() //mocking+spy
        render(<Button onClick={handlerClick}>click me</Button>)
        
        expect(handlerClick).not.toHaveBeenCalled()
        //access dom ---> button
       let btn= screen.getByText(/click me/)
        //click button
        await userEvent.click(btn)       // fireEvent.click(btn)
        //assert that handler called
        expect(handlerClick).toHaveBeenCalledOnce()
    })
})