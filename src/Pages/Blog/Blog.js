import React from 'react';

const Blog = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-4 pt-4">
            <div className="card-body">
                <h2 className="card-title"><li>difference between sql and nosql</li></h2>
                <p><u>Answer</u>: SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                <h2 className="card-title"><li>What is JWT, and how does it work?</li></h2>
                <p><u>Answer:</u> What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                <h2 className="card-title"><li>What is the difference between javascript and NodeJS?</li></h2>
                <p><u>Answer:</u> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                <h2 className="card-title"><li>How does NodeJS handle multiple requests at the same time?</li></h2>
                <p><u>Answer:</u> How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;