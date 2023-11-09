import React from "react";
import { UploadFile } from "@mui/icons-material";
import pdf from "./pdf.png";

let f = [1, 1]
let ff = []

export default function AddDZ(props) {


    const [drag, setDrag] = React.useState(false);

    function DragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }

    function DragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    function OnDropHandler(e) {
        e.preventDefault()
        f = [...e.dataTransfer.files]
        props.setFiles(old => {
            let fil = [...old]
            fil[props.count].push(...f)
            ff = fil
            return fil
        })
        localStorage.setItem("SostFiles", JSON.stringify(ff))

        setDrag(false)

    }

    return <>
        <div style={{ display: 'flex', marginTop: '100px', position: 'relative', gap: '20px', height: '650px', marginBottom: '100px' }}>
            {drag ? <div className="dropArea on"

                onDragStart={e => DragStartHandler(e)}
                onDragLeave={e => DragLeaveHandler(e)}
                onDragOver={e => DragStartHandler(e)}
                onDrop={e => OnDropHandler(e)}

            ><UploadFile style={{ fontSize: '100px' }}></UploadFile></div> :

                <div className="dropArea"
                    onDragStart={e => DragStartHandler(e)}
                    onDragLeave={e => DragLeaveHandler(e)}
                    onDragOver={e => DragStartHandler(e)}
                >
                    <UploadFile style={{ fontSize: '100px' }}></UploadFile></div>

            }

            <div className="oknofailov">
                {!props.files ? null :
                    props.files[props.count].map((item, itemid) =>
                        <button >
                            <div className="fail">
                                <img src={pdf} style={{ width: '20px', height: '20px' }}></img>
                                {item.name}
                            </div>
                        </button>)}
            </div>

        </div >


    </>
}