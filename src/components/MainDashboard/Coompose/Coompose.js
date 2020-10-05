import React from 'react';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import './Compose.css'

const Coompose = () => {
    
    return (
        <div>
            <form>
                <SunEditor
                    width="60%"
                    placeholder="Please type here..."
                    setOptions={{
                        height: 200,
                        buttonList: [
                            ['font', 'fontSize', 'formatBlock'],
                            ['bold', 'underline', 'italic',],
                            ['align', 'horizontalRule', 'list', 'lineHeight'],
                            ['link', 'image', 'video',],
                            ['fullScreen', 'codeView'],
                        ]
                    }}
                />
                
            </form>
        </div>
    );
};

export default Coompose;