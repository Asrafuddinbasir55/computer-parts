import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="card w-5/6 mx-auto  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                    <p>React then proceeds to apply only the UI changes to the real UI on the browser.
When the data associated with a component change, React determines if an actual DOM update is 
required. This allows React to avoid potentially expensive DOM manipulation operations in the browser, 
such as creating DOM nodes and accessing existing ones beyond necessity.
This repeated diffing and rendering of components In the image above, 
all of the yellow nodes are rendered and diffed, resulting in wasted time computation 
resources. This is where we will primarily put our optimization efforts in. Configuring each component to 
only render-diff when it is necessary will allow us to reclaim these wasted CPU cycles. can be one of the primary 
sources of React performance issues in any React app. Building a React app where the diffing algorithm fails to reconcile effectively, 
causing the entire app to be rendered repeatedly can result in a frustratingly slow experience
                    </p>
                </div>
            </div>
            <br/>

            <div className="card w-5/6 mx-auto gap-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>
                    </p>
                </div>
            </div>
            <br/>

            <div className="card w-5/6 mx-auto gap-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>JavaScript has only primitives types null undefined, and objects. A big world of objects. In JavaScript contrary to languages like Java or PHP theres no concept of className that serves as a template to create objects.
                        Let's also recall that an object is a composable structure having properties: key and value pairs. For example, the following object cat contains 2 properties
                        In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is named prototype.
                        Following the example, you can make pet a prototype of cat which will then inherit legs property.
                        When creating an object using the object literal you can use the special property proto to set the prototype of the created object.
                        Let's use __proto__ and make pet the prototype of c
                    </p>
                </div>
            </div>
            <br/>

            <div className="card w-5/6 mx-auto gap-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>Understanding how to write a product description requires putting yourself in the shoes of your audience. When you write a product description with a huge crowd of
                        buyers in mind, your descriptions become wishy-washy and you end up addressing no one at all.
                        The problem is our potential buyers are not as interested in mundane features and specs. They want to know whats
                        in it for them—how it will address their biggest pain points. Successfully executing how to write a product description
                        When were stuck for words and dont know what else to add to our product description, we often add something bland like excellent product quality
                    </p>
                </div>
            </div>
            <br/>

            <div className="card w-5/6 mx-auto gap-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p>A unit test typically comprises of three stages: plan, cases and scripting and
                        the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is
                        for the test cases and scripts to be made, then the code is tested.
                        Unit tests can be performed manually or automated. Those employing a manual method may have an instinctual
                        document made detailing each step in the process; however, automated testing is the more common method to unit
                        tests. Automated approaches commonly use a testing
                        and a testing framework can be used to report any failed tests. Developers should not make a test for every
                        line of code, as this may take up too much time. Developers should then create tests focusing on code which
                        could affect the behavior of the software being developed.</p>
                </div>
            </div>
        </div>

    );
};

export default Blogs;