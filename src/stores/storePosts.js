import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class StorePosts extends EventEmitter {
  constructor() {
    super();
    this.posts = [];
    this.addPost = this.addPost.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.change = this.change.bind(this);
    this.handleActions = this.handleActions.bind(this);
  }

  addPost(post) {
    this.posts = [post, ...this.posts];
    console.log(this.posts);
    this.change();
  }

  getPosts(posts) {
    this.posts = [...this.posts, ...posts];
    this.change();
  }

  change() {
    this.emit('change');
  }

  handleActions(action) {
    switch (action.type) {
      case 'ADD_POST': {
        this.addPost(action.data);
        break;
      }
      case 'GET_POSTS': {
        this.getPosts(action.data);
        break;
      }
    }
  }
}

const store = new StorePosts();
dispatcher.register(store.handleActions);
export default store;