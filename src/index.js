import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail author="Sam" timeAgo="Today at 4:45PM" message="props are cool"/>
			<CommentDetail author="Alex" timeAgo="Today at 2:00AM" message="you're cool"/>
			<CommentDetail author="Jane" timeAgo="Today at 5:00PM" message="But I'm the coolest"/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));