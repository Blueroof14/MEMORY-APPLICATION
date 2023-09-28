import { useState } from "react";
import axios from "axios";

const AddPost = () => {
    const [creator,setCreator] = useState('');
    const [title,setTitle] = useState('');
    const [message,setMessage] = useState('');
    const [tags,setTags] = useState('');
    const [file,setFile] = useState('');
    
    const handleSubmit = () => {
        event.preventDefault();
        console.log('form submitted')
        //form validation
        if(title ==='' || message ==='' || tags ==='' || creator ==='') {
            console.log('input field cannot be empty');
            return;
        }
        const formData = {
            form_title: title,
            form_message: message,
            form_tags: tags,
            form_creator: creator
        }
        axios.post('http://localhost:5000/post/create',formData)
        .then((response) =>console.log(response)) //output unsuccesful message
        .catch((error) => console.log(error)) //output error message
    }
    return (
        
        <div className="add_post">
            <h2>Add Your Memories</h2>
            <form onSubmit={handleSubmit}>
                <div className="creators">
                    <input
                     type="text" 
                     placeholder="Creator"
                     value={creator}
                     onChange={(e) =>setCreator(e.target.value)}/>
                </div>
                <div className="title">
                    <input 
                    type="text" 
                    placeholder="Title"
                    value={title}
                     onChange={(e) =>setTitle(e.target.value)}
                     />
                </div>
                <div className="message">
                    <textarea
                     placeholder="Message" 
                     cols="30"
                      rows="10"
                      value={message}
                     onChange={(e) =>setMessage(e.target.value)}
                      ></textarea>
                </div>
                <div className="tag">
                    <input
                     type="text"
                      placeholder="Tag"
                      value={tags}
                     onChange={(e) =>setTags(e.target.value)} />
                </div>
                <div className="file">
                    <input 
                    type="file"
                    value={file}
                     onChange={(e) =>setFile(e.target.value)} />
                </div>
                <div className="buttons">
                    <button type="submit" className="submit">submit</button>
                    
                    <button type="button" className="clear">clear</button>
                </div>
            </form>       
        </div>
    )
}

export default AddPost;