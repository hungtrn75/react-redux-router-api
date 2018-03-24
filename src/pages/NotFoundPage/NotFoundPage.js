import React, { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="alert alert-warning">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong><h2>404-Not Found</h2></strong>
            </div>
        );
    }
}

export default NotFoundPage;