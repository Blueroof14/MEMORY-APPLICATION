import { useEffect } from 'react'
import bgImage from '../assets/post1.jpg'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {create_data} from '../features/postSlice'

const dummy_array = [1,2,3,4]

const Posts = () => {
    const dispatch = useDispatch();
    //the use effect array []of depencey is set to empty, in other to facilitate a on etime fetch
    useEffect(() => {
        const fetch_data = () =>{
            axios.get('http://localhost:5000/post/get_data')
                .then((response) => dispatch(create_data(response.data)))
                .catch((error) => console.log(error));
        } 
        fetch_data();
    },[]);
    
    return (
        <div className="posts" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px'
        }}>
            {dummy_array.map(function (value) {
               return  <div key={value} className="post" style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 0 10px 1px rgba(0, 0, 0, 0.4)',
                borderRadius: '15px'
            }}>
                <div className="post_image"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: '200px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '20px'
                    }}
                >
                    <div className="creator">
                        <h4 style={{ marginBottom: '10px' }}>Mark</h4>
                        <p>2 months ago</p>
                    </div>
                    <div className="edit">
                        <p>...</p>
                    </div>
                </div>
                <div className='desc' style={{ padding: '20px' }}>
                    <p>#china #australia</p>
                    <h3 style={{ marginTop: '15px' }}>Visisted the escape room</h3>
                    <p style={{ margin: '15px 0' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio repellat quia eveniet similique molestias obcaecati assumenda, architecto quasi commodi soluta.</p>
                    <div className='action' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button >like</button>
                        <button>delete</button>
                    </div>
                </div>
            </div>
            })}
        </div>
    )
}

export default Posts;