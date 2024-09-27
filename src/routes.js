import Main from './pages/Main';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';
import CommentsPage from './pages/CommentsPage';
import CommentPage from './pages/CommentPage';
import Modal from './pages/Modal';

export default [
  {
    path: '/',
    component: Main,
    exact: true
  },
  {
    path: '/users',
    component: UsersPage,
    exact: true
  },
  {
    path: '/users/:userId',
    component: UserPage,
    exact: true
  },
  {
    path: '/posts',
    component: PostsPage,
    exact: true
  },
  {
    path: '/posts/:postId',
    component: PostPage,
    exact: true
  },
  {
    path: '/modal',
    component: Modal,
    exact: true
  },
  {
    path: '/comments',
    component: CommentsPage,
    exact: true
  },
  {
    path: '/comments/:commentId',
    component: CommentPage,
    exact: true
  }
]