import React from 'react';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import './Compose.css'

const Coompose = () => {
    return (
        <div>
            <SunEditor
                showToolbar={true} 
                enableToolbar={true}
                lang="en"
                name="my-editor"
                width="50%"
                placeholder="Please type here..."
                autoFocus={true}
                setDefaultStyle="font-family: cursive; font-size: 10px;"
                enable={true} 
            />
        </div>
    );
};

export default Coompose;