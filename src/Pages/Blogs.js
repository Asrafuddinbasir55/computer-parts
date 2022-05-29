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
such as creating DOM nodes  accessing existing ones beyond necessity.
This repeated diffing and rendering of components In the image above, 
all of the yellow nodes are rendered and diffed, resulting in wasted time computation 
resources. This is  will primarily put our optimization efforts in. Configuring each component to 
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
                    <p>Redux is one of the most popular React state management libraries as of the time of this article.
In this section, we would look closely into when to use Redux in an application.
Firstly, Redux allows you to manage your app's state in a single place and keep changes in your app more predictable and traceable. It makes occurring changes in your app easier to figure out. Unfortunately, all of these benefits come with specific constraints and tradeoffs.
Frequently, developers feel using Redux adds up some boilerplate code, making little things seemingly overwhelming; however, that depends solely on the app's architectural decision.
One of the easiest ways to know when you genuinely need to use Redux is when managing state locally begins to look messy.
As the application grows, so does state sharing across components gets tedious.
At that point, you'd now start looking for ways to make the process hassle-free.
In the next section, we would look at why we should
                    </p>
                </div>
            </div>
            <br/>

            <div className="card w-5/6 mx-auto gap-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>Besides the prototype, JavaScript has another related feature that all
 the objects have as a special property and its the one responsible for 
 the behavior described before. Its name is Prototype yes, with brackets and is 
 in charge of saving a reference to the prototype object. The reference is kept by any object
  created using the prototype as a model. We can replace the prototype, but then only the objects 
  created after the replacement will have the new object as its prototype.
  What happens on line 9 is what does the magic extending the Vehicle through the Cars 
  constructor. The prototype object bond together Car and Vehicle. With this rudimentary form 
   I mean creating an instance of Vehicle as a prototype we have the problem of assigning unnecessary
    properties to the Cars prototype object, the ones set to this when we call the Vehicles constructor
                    </p>
                </div>
            </div>
            <br/>

            <div className="card w-5/6 mx-auto gap-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>For companies and other organizations that produce goods, branding helps create loyalty. 
    It decreases the risk of losing market share to the competition by establishing a competitive 
    advantage customers can count on. Strong brands often command premium pricing
    Retailers such as Target, Safeway, and Walmart create brands of their own to create a loyal
     base of customers. Branding enables these retailers to differentiate themselves from one 
     another and build customer loyalty around
     A branding strategy helps establish a product within the market and to build a brand that will grow and
     brands may even be in de facto competition with other brands from the same company. 
     For example, Kool-Aid and Tang are two powdered beverage products, both owned by Kraft Foods. The
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