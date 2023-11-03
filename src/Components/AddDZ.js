import React from "react";
import { UploadFile } from "@mui/icons-material";


export default function AddDZ() {

    const [drag, setDrag] = React.useState(false);
    let f = null

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
        let files = [...e.dataTransfer.files]

        console.log(files)
        setDrag(false)
    }

    return <>
        <div style={{display:'flex',}}>
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
                    <UploadFile style={{ fontSize: '100px' }}></UploadFile>{drag}</div>

            }

            <div style={{width:'200px',height:'400px',backgroundColor:'black',flexDirection:'row-reverse'}}>
                wehfnjwewj
            </div>

        </div>


    </>
}