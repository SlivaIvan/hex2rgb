/* eslint-disable no-use-before-define */
import { useState } from "react"

export function Forms(){
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")

    const onChange = (evt) => {
        evt.preventDefault()
        const regular = /^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})|([a-f0-9]{3})$/i
        const HEX = regular.exec(evt.target.value)
        
        if(HEX) {
            const [ hex, a, n, c ] = HEX
            const r = parseInt(a, 16)
            const g = parseInt(n, 16)
            const b = parseInt(c, 16)
            const RGB = `rgb(${r}, ${g}, ${b})`
            setInput(hex)
            if(!isNaN(r))setOutput(RGB)  
        }  else setOutput("Ошибка")
       
    }


    return(
        <div className="app" style={{backgroundColor: input}}>
            <form className="forms" onChange={onChange}>
                <input className="in input" defaultValue={input} placeholder="#"/>
                <input className="out input" value={output} disabled/>
            </form>

        </div>
    )
}