import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => setPost(resp.data));
  }, [id]);

  // CRUD
  // C = Create - создание нового поста                  POST
  // R = Read - получение данных о нескольких постах     GET
  //                             об одном посте          GET
  // U = Update - изменение данных о посте               PUT, PATCH
  // D = Delete                                          DELETE

  const deletePost = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => console.log(resp));
  };

  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
      <Link to={`/delete/${id}`}>
        <button>Удалить</button>
      </Link>
    </div>
  );
};
export default SinglePost;
