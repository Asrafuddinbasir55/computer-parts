import React from 'react';
import image from '../assets/images/milon-3.png'
import website from '../assets/images/phone-wb.png'
import Torius from '../assets/images/Torius.png'
import Bake from '../assets/images/Bake.png'
import Facebook from '../assets/icons/facebook.png'
import Github from '../assets/icons/github.png'
import Linkedin from '../assets/icons/linkedin.png'
import Email from '../assets/icons/email.png'

const Portfolio = () => {
    return (
        <div>
            <div className=" card lg:card-side  bg-blue-300 shadow-xl">
                <figure><img className='' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-pink text-4xl font-bold">My Name is Asraf Uddin Basir</h2>
                    <p className='w-80 text-1xl'>I'm Proportional Full Stack Web Developer.My profession is heard worked coding.2022 year Full Stack Project in the website bootstrap,tailwind, react bootstrap, es6, react router, firebase, mongodb, node js, heroku,express js. etc my product building very awesome  locking for  website.</p>
                    
                </div>
            </div>
            <section>

                <div className=' card bg-indigo-200 shadow-2xl p-5'>
                    <h1 className='text-primary text-5xl font-bold text-center p-5'>This is My Best website</h1>
                    <div className='grid grid-cols-3 gap-4 '>

                        <div className="card w-90  bg-base-100 shadow-xl ">
                            <figure><img className='h-80 w-96' src={website} alt="website" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Best smartphone Store Shop
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>React Bootstrap, Node Js, Mongodb, Firebase, Es6, Express js,Heroku, .env etc My website building</p>
                                <div className="card-actions justify-end">
                                    <div className='w-50'>
                                        <a href='https://github.com/Asrafuddinbasir55' target='_blank' className="badge badge-outline">Cline Github</a>
                                      
                                        <a href='https://awesome-clarke-32d4fe.netlify.app/' target='_blank' className="badge badge-outline">Live website</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card w-90 bg-base-100 shadow-xl">
                            <figure><img className='h-80 w-96' src={Bake} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Tories website Provide
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>Bootstrap, firebase, netlify, es6, Node Js, Mongodb</p>
                                <div className="card-actions justify-end">
                                    <div >
                                        <a href='https://github.com/Asrafuddinbasir55' target='_blank' className="badge badge-outline">Github Link</a>

                                        <a href='https://tangerine-vacherin-6f675f.netlify.app/
                                    ' target='_blank' className="badge badge-outline">Live website</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="card w-90 bg-base-100 shadow-xl">
                            <figure><img className='h-80 w-96' src={Torius} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Tories website Provide
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>Bootstrap, firebase, es6, Node Js, Mongodb</p>
                                <div className="card-actions justify-end">
                                    <div >
                                        <a href='https://github.com/Asrafuddinbasir55' target='_blank' className="badge badge-outline">Github Link</a>

                                        <a href='https://taupe-vacherin-e56bdd.netlify.app/
                                    ' target='_blank' className="badge badge-outline">Live website</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>

            <section className='flex'>
                <div>
                <h1 className='text-primary font-bold text-3xl'>My Skills</h1>
                <h2>HTML</h2>
                <progress className="progress progress-secondary w-56" value="90" max="100">Html</progress> <span>90%</span>
                <br/>
                <h2>Bootstrap</h2>
                <progress className="progress progress-secondary w-56" value="90" max="100">Html</progress><span>90%</span>
                <br/>
                <h2>tailwind</h2>
                <progress className="progress progress-secondary w-56" value="80" max="100">Html</progress><span>80%</span>
                <br/>
                <h2>Css</h2>
                <progress className="progress progress-secondary w-56" value="90" max="100">Css</progress><span>90%</span>
                <br/>
                <h2>JavaScript</h2>
                <progress className="progress progress-secondary w-56" value="90" max="100">JavaScript</progress><span>90%</span>
                <br/>
                <h2>Es6</h2>
                <progress className="progress progress-secondary w-56" value="80" max="100">Es6</progress><span>80%</span>
                <br/>
                <h2>React Js</h2>
                <progress className="progress progress-secondary w-56" value="70" max="100">React</progress><span>70%</span>
                <br/>
                <h2>Express Js</h2>
                <progress className="progress progress-secondary w-56" value="70" max="100">Express</progress><span>70%</span>
                <br/>
                <h2>Mongodb</h2>
                <progress className="progress progress-secondary w-56" value="75" max="100">Mongodb</progress><span>75%</span>
                <h2>Heroku</h2>
                <progress className="progress progress-secondary w-56" value="70" max="100">Mongodb</progress><span>70%</span>
                </div>
                <div className='mx-20 p-20'>
                        <h1 className='text-3xl'>Present Address</h1>
                        <h2 className='text-2xl'>Email: asrafuddinbasir0@gmail.com</h2>
                        <h2 className='text-2xl'>District: Chunarughat, Habiganj, Sylhet</h2>
                        <h2 className='text-2xl'>Nationality: Bangladeshi</h2>
                        <h2 className='text-2xl'>Phone: +08801301745205</h2>
                        <div className='flex'>
                        <a href='https://www.facebook.com/shorif.uddin.milon2' target='_blank'><img className='w-8 m-3' src={Facebook}/></a>
                        <a href='https://github.com/shorifuddin2' target='_blank'><img className='w-8 m-3' src={Github}/></a>
                        <a href='https://www.linkedin.com/in/shorif-uddin-58b01a203/' target='_blank'><img className='w-8 m-3' src={Linkedin}/></a>
                        <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank'><img className='w-8 m-3' src={Email}/></a>
                        </div>
                </div>
            </section>



        </div>
    );
};

export default Portfolio;