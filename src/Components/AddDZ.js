import React from "react";
import { UploadFile } from "@mui/icons-material";
import pdf from "./pdf.png";

let f = [1, 1]

export default function AddDZ() {


    const [drag, setDrag] = React.useState(false);
    const [files, setFiles] = React.useState([]);

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
        setFiles(old => {
            let fil = [...old]
            fil.push(...f)
            return fil
        })
        setDrag(false)

    }

    return <>
        <div style={{ display: 'flex', marginTop: '100px', position: 'relative', gap: '20px' , height:'650px'}}>
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
                {!files ? null :
                    files.map((item, itemid) =>
                        <button >
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px',alignItems:'center' }}>
                                <img src={pdf} style={{ width: '20px',height:'20px' }}></img>
                                {item.name}
                            </div>
                        </button>)}
            </div>

        </div >


    </>
}