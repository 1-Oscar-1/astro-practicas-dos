import {useState} from 'react'

function HelloWorld() {

    const [text, setText] = useState("Hello World")

    return (
        <div>
            <p>{text}</p>
            <button className='p-4 bg-slate-600' onClick={() => setText("Texto Actualizado")}>Cambia el texto de arriba</button>
        </div>
    );
}

export default HelloWorld;