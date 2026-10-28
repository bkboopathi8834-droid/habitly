import './Landingpage.css';
import { Link, useNavigate } from "react-router-dom";

function Landingpage(){
    const navigate = useNavigate();
    return(
        <>
            <header className='nav-bar'>
                <a href="#home">HABITLY</a>
                <div className='nav-mid'>
                    <a href="#features">Features</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#pricing">Pricing</a>
                </div>
                <Link to="/habits" className="get-started">Get Started</Link>

            </header>

            <main>
                <section id="home">
                    <p>SMALL STEPS BIG CHANGES</p>

                    <h1>Build better habits<br />Become your best self</h1>
                    <p>Create meaningful routines, track your daily progress, and turn small actions into lasting habits. Your next chapter starts today.</p>

                    <Link to="/habits" className="get-started">Get Started</Link>

                    <p>No pressure. Just progress, one day at a time.</p>
                </section>
            </main>


            <section id="features">
                <p>WHY HABITLY</p>
                    <h2>Everything you need to stay consistent.</h2>
                <div>
                    <article>
                        <h3>Build your routine</h3>
                        <p>Create habits that fit your lifestyle and make your daily goals easier to follow.</p>
                    </article>

                    <article>
                        <h3>Track your progress</h3>
                        <p>See what you have accomplished and celebrate every small win along the way.</p>
                    </article>

                    <article>
                        <h3>Stay consistent</h3>
                        <p>Keep your goals visible and build momentum through simple,repeatable actions.</p>
                    </article>
                </div>
            </section>


            <section id="testimonials">
                <p>REAL PROGRESS</p>
                <h2>Small changes. Meaningful results.</h2>

                <div>
                    <article>
                        <p>"Habitly helped me make my mornings more intentional. I love seeing my progress every day."</p>
                        <h3>Alex Morgan</h3>
                        <p>Habitly user</p>
                    </article>
                    
                    <article>
                        <p>"It feels simple and manageable. I can focus on improving instead of worrying about being perfect."</p>
                        <h3>Jamie Parker</h3>
                        <p>Habitly user</p>
                    </article>

                    <article>
                        <p>"Having my habits in one place makes it easier to stay organized and keep moving forward."</p>
                        <h3>Taylor Reed</h3>
                        <p>Habitly user</p>
                    </article>
                </div>
            </section>


            <section id="pricing">
                <p>SIMPLE PRICING</p>
                <h2>Choose your way to grow.</h2>
                <p>Start simple and find the plan that fits your goals.</p>

                <div>
                <article>
                    <h3>Free</h3>
                    <p>₹0 / month</p>
                    <p>For building your first routines.</p>
                    <ul>
                    <li>Track up to 3 habits</li>
                    <li>Daily completion tracking</li>
                    <li>Basic progress overview</li>
                    </ul>
                    <a href="#habits">Get started</a>
                </article>

                <article>
                    <h3>Pro</h3>
                    <p>₹199 / month</p>
                    <p>For making consistency a lifestyle.</p>
                    <ul>
                        <li>Unlimited habits</li>
                        <li>Detailed progress tracking</li>
                        <li>Streak tracking</li>
                    </ul>
                    <a href="#habits">Choose Pro</a>
                </article>

                <article>
                    <h3>Lifetime</h3>
                    <p>₹999 one-time</p>
                    <p>For a long-term commitment to growth.</p>
                    <ul>
                        <li>Unlimited habits</li>
                        <li>All progress features</li>
                        <li>One-time payment</li>
                    </ul>
                    <a href="#habits">Choose Lifetime</a>
                </article>
                </div>
            </section>


            <div >
                
            </div>

            <footer id="habits">
                <h2>Ready to start your journey?</h2>
                <p>Your habits, your pace, your progress.</p>
                <div>
                    <Link to="/habits" className="get-started">Get Started</Link>
                    <a href="#home">Habitly</a>
                </div>
                <p>Make room for better habits, one day at a time.</p>
                <p>&copy; {new Date().getFullYear()} Habitly. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Landingpage;