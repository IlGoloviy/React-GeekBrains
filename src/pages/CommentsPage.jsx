import React from 'react';
import CommentsList from '../components/CommentsList';

export default class CommentsPage extends React.Component {
  render() {
    return (
      <>
      <h1 className="desc">
        Comments
      </h1>
      { 
        (!this.props.children) 
        ?
        <CommentsList></CommentsList>
        :
        this.props.children
      }
      </>
    );
  }
}