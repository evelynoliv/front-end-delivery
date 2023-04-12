import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Modal from 'react-modal';
import { BiExit } from 'react-icons/bi';
import moment from 'moment';
import { UserContext } from '../../Contexts/UserContext';
import {
  CreatePost, DashboardContainer, FormDelete, FormEdit, Posts,
} from './Dashboard.style';

import style from './Dashboard.module.css';
import useFetch from '../../Hooks/useFetch';

export default function Dashboard() {
  const navigate = useNavigate();
  const { userName, setUserName } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editIndex, setEditIndex] = useState(0);
  const [modalEditIsVisible, setModalEditIsVisible] = useState(false);
  const [modalDeleteIsVisible, setModalDeleteIsVisible] = useState(false);

  moment.locale('pt-br');

  if (userName.length === 0) {
    navigate('/');
  }

  useEffect(() => {
    try {
      const postsUpdate = localStorage.getItem('posts');
      if (postsUpdate === null) {
        localStorage.setItem('posts', posts);
      } else {
        const newArray = JSON.parse(postsUpdate);
        setPosts(newArray);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { data: dataPost, isFetching: loadPost } = useFetch('posts');
  const { data: dataUsers, isFetching: loadUsers } = useFetch('users');

  console.log(dataPost);
  console.log(loadPost);
  console.log(dataUsers);
  console.log(loadUsers);

  return (
    <DashboardContainer>

      <Modal
        isOpen={modalEditIsVisible}
        onRequestClose={() => {
          setModalEditIsVisible(false);
        }}
        className={style.customStylesModal}
        overlayClassName={style.overlay}
      >
        <FormEdit
          onSubmit={(e) => {
            e.preventDefault();
            if (editTitle.length > 0 && editContent.length > 0) {
              setPosts([
                ...posts.slice(0, editIndex),
                [editTitle, editContent, moment().format(), userName],
                ...posts.slice(editIndex + 1),
              ]);
              setModalEditIsVisible(false);
              setEditTitle('');
              setEditContent('');
              localStorage.setItem('posts', JSON.stringify(posts));
            }
          }}
          disb={editTitle.length > 0 && editContent.length > 0}
        >
          <h4>Edit item</h4>
          <label htmlFor="title">
            Title
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              id="title"
              type="text"
              placeholder="Hello World"
              data-testid="editTitle"
            />
          </label>
          <label htmlFor="content">
            Content
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              id="content"
              type="text"
              placeholder="Content here"
              data-testid="editContent"
            />
          </label>
          <div className="btn">
            <button
              onClick={() => setModalEditIsVisible(false)}
              data-testid="buttonDeletePost"
              type="button"
              style={{ backgroundColor: '#FFF', marginRight: '50px' }}
            >
              Cancel
            </button>
            <button type="submit" style={{ backgroundColor: '#47B960' }}>Save</button>
          </div>
        </FormEdit>
      </Modal>

      <Modal
        isOpen={modalDeleteIsVisible}
        onRequestClose={() => setModalDeleteIsVisible(false)}
        className={style.customStylesModal}
        overlayClassName={style.overlay}
      >
        <FormDelete
          onSubmit={(e) => {
            e.preventDefault();
            setPosts([
              ...posts.slice(0, editIndex),
              ...posts.slice(editIndex + 1),
            ]);
            setModalDeleteIsVisible(false);
            localStorage.setItem('posts', posts);
          }}
          disb={userName.length > 0}
        >
          <h4>Are you sure you want to delete this post?</h4>

          <div className="btn">
            <button
              onClick={() => setModalDeleteIsVisible(false)}
              data-testid="buttonDeletePost"
              type="button"
              style={{ backgroundColor: '#FFF', color: '#000' }}
            >
              Cancel

            </button>
            <button type="submit" style={{ backgroundColor: '#FF5151' }}>Delete</button>
          </div>
        </FormDelete>
      </Modal>

      <div className="top">
        <h1>CodeLeap Network</h1>
        <div>

          <h5 data-testid="userName">
            Hello
            {' '}
            {userName}
            {' '}
          </h5>
          <BiExit
            style={{ cursor: 'pointer' }}
            data-testid="exitButton"
            onClick={() => {
              setUserName('');
              navigate('/');
            }}
          />
        </div>
      </div>
      <CreatePost
        disb={title.length > 0 && content.length > 0}
        onSubmit={(e) => {
          e.preventDefault();
          if (title.length > 0 && content.length > 0) {
            const aux = [[title, content, moment().format(), userName], ...posts];
            setPosts(aux);
            setTitle('');
            setContent('');
            localStorage.setItem('posts', JSON.stringify(aux));
          }
        }}
      >
        <h4>What’s on your mind?</h4>
        <label htmlFor="title">
          Title
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            placeholder="Hello World"
            max={500}
            data-testid="title"
          />
        </label>
        <label htmlFor="content">
          Content
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            id="content"
            type="text"
            placeholder="Content here"
            max={50000}
            data-testid="content"

          />
        </label>
        <div className="btn">
          <button
            disabled={!(title.length > 0 && content.length > 0)}
            type="submit"
            data-testid="CREATE"
          >
            Create
            {' '}

          </button>
        </div>
      </CreatePost>
      {posts.map((element, index) => (

        <Posts key={`${element}`}>
          <div className="post-title">
            <h4>{element[0]}</h4>
            {element[3] === userName

              ? (
                <div>
                  <FaTrashAlt
                    data-testid="deleteModalPostButton"
                    onClick={() => {
                      setEditIndex(index);
                      setModalDeleteIsVisible(true);
                    }}
                    style={{ margin: '0 10px', cursor: 'pointer' }}
                  />
                  <FaEdit
                    data-testid="editModalPostButton"
                    onClick={() => {
                      setEditIndex(index);
                      setEditTitle(element[0]);
                      setEditContent(element[1]);
                      setModalEditIsVisible(true);
                    }}
                    style={{ margin: '0 10px', cursor: 'pointer' }}
                  />

                </div>
              )
              : <div />}
          </div>
          <div className="post-content">
            <div className="meta">
              <p data-testid="userNamePost">{`@${element[3]}`}</p>
              <p>
                {' '}
                {moment(element[2]).fromNow()}
              </p>

            </div>
            <p>{element[1]}</p>
          </div>
        </Posts>

      ))}

      {
        dataPost
          ? dataPost.map((element) => (
            <Posts
              key={`${element.id}`}
              onClick={() => {
              }}
            >
              <div className="post-title">
                <h4>{element.title}</h4>
              </div>
              <div className="post-content">
                <div className="meta">
                  <p data-testid="userNamePost">{`@${element.id}`}</p>
                  <p>
                    {' '}
                    {moment(element[2]).fromNow()}
                  </p>

                </div>
                <p>{element.body}</p>
              </div>
            </Posts>
          )) : <div />
      }
    </DashboardContainer>
  );
}
