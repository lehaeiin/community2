import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";


const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
};
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];


export default function CreatePostPage() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    function createPost(event) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        console.log(title, summary, content, files);
        event.preventDefault();
        fetch('http://localhost:7777/post', {
            method: 'POST',
            body: data,
        })
    }
    return (
        <form onSubmit={createPost}>
            <input type="title" placeholder={"제목을 입력하세요."}
                value={title} onChange={event => setTitle(event.target.value)} />
            <input type="summary" placeholder={"글 요약을 입력하세요."}
                value={summary} onChange={event => setSummary(event.target.value)} />
            <input type="file" onChange={event => setFiles(event.target.files)} />
            <ReactQuill modules={modules} formats={formats}
                value={content} onChange={newValue => setContent(newValue)} />
            <button>글쓰기</button>
        </form>
    );
}
