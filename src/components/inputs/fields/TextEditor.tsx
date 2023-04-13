import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default ({name, handleChange, data, plain}:{name:string, handleChange:(name:string,value:string) => void, data:string, plain:boolean}) => {
    console.log(data)
    return <CKEditor
    editor={ ClassicEditor }
    onReady={ editor => {
        // You can store the "editor" and use when it is needed.
    } }
    data={data}
    config={{         
        toolbar: (plain)?[]:['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', 'imageUpload', 'insertTable',
        'tableColumn', 'tableRow', 'mergeTableCells', 'mediaEmbed', '|', 'undo', 'redo']
      }} 
    onChange={ ( event, editor ) => {
        const data = editor.getData();
        handleChange(name, data);
    } }
/>
}