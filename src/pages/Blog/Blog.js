import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h3>Q. What is cors?</h3>
            <p>Ans: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
            <h3>Q. Why are using firebase? which other option do we have to implement authentication ? </h3>
            <p>Ans: Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>
            <p>
                The list below reviews some common authentication methods used to secure modern systems.</p>
            <p> Password-based authentication. Passwords are the most common methods of authentication. ...</p>
            <p>Multi-factor authentication. ...</p>
            <p> Certificate-based authentication. ...</p>
            <p>Biometric authentication. ...</p>
            <p>Token-based authentication.</p>
            <h3>Q. How does the private route work?</h3>
            <p>Ans. The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            <h3>Q. What is node? How does it work?</h3>
            <p>Ans. t is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
        </div>
    );
};

export default Blog;