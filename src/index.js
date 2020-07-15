import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Avi" timeAgo="Today at 6:00PM" authorComment= "Nice post!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Ankush" timeAgo="Today at 5:00AM" authorComment= "Well done!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Akash" timeAgo="Yesterday at 4:00PM" authorComment= "Not Good!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
             
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))