import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";

export default function services() {
    return <>
        <Head>
            <title>Services</title>
        </Head>

        <div className="servicespage">
            <div className="topservices">
                <div className="container">
                    <h2 data-aos="fade-up">Ahmad Services</h2>
                    <p data-aos="fade-up">Home <span>&gt;</span> Services</p>
                </div>
            </div>
            <div className="centerservices">
                <div className="container">
                    <div className="cservicesbox">
                        <div className="csservice" data-aos="fade-right">
                            <span>01</span>
                            <div>
                                <h2>Personalized Nutrition Counseling</h2>
                                <img src="https://em-content.zobj.net/source/apple/354/carrot_1f955.png" alt="Carrot" />
                            </div>
                            <ul>
                                <li>Assessing individual dietary needs and health goals</li>
                                <li>Creating customized meal plans</li>
                                <li>Offering weight management strategies</li>
                                <li>Addressing specific health conditions (e.g., diabetes, heart disease, food allergies)</li>
                            </ul>
                            <p>I offer expert personalized nutrition counseling to help you achieve your health goals with customized meal plans and practical advice tailored to your unique needs.</p>
                        </div>
                        <div className="csservice" data-aos="fade-right">
                            <span>02</span>
                            <div>
                                <h2>Nutritional Assessments</h2>
                                <img src="https://em-content.zobj.net/source/apple/354/strawberry_1f353.png" alt="Strawberry" />
                            </div>
                            <ul>
                                <li>Evaluating current eating habits and nutrient intake</li>
                                <li>Conducting body composition analysis</li>
                                <li>Identifying potential deficiencies or excesses</li>
                            </ul>
                            <p>I provide thorough nutritional assessments to analyze your eating habits and nutrient intake, helping you optimize your diet for better health and well-being.</p>
                        </div>
                        <div className="csservice" data-aos="fade-up">
                            <span>03</span>
                            <div>
                                <h2>Weight Management Programs</h2>
                                <img src="https://em-content.zobj.net/source/apple/354/watermelon_1f349.png" alt="Watermelon" />
                            </div>
                            <ul>
                                <li>Designing plans for weight loss, weight gain, or maintenance</li>
                                <li>Offering behavioral coaching to develop healthier eating habits</li>
                            </ul>
                            <p>I deliver effective weight management programs designed to help you reach and maintain your ideal weight through balanced nutrition and lifestyle strategies.</p>
                        </div>
                        <div className="csservice" data-aos="fade-up">
                            <span>04</span>
                            <div>
                                <h2>Medical Nutrition Therapy (MNT)</h2>
                                <img src="https://em-content.zobj.net/source/apple/354/broccoli_1f966.png" alt="Broccoli" />
                            </div>
                            <ul>
                                <li>Managing chronic diseases through tailored nutrition interventions</li>
                                <li>Providing support for conditions such as hypertension, high cholesterol, or gastrointestinal disorders</li>
                            </ul>
                            <p>I provide reliable medical nutrition therapy to support the management of chronic health conditions through personalized dietary strategies.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>05</span>
                            <div>
                                <h2>Behavioral and Lifestyle Coaching</h2>
                                <img src="https://em-content.zobj.net/source/apple/354/avocado_1f951.png" alt="Avocado" />
                            </div>
                            <ul>
                                <li>Helping clients develop sustainable healthy habits</li>
                                <li>Addressing emotional eating and mindfulness techniques</li>
                            </ul>
                            <p>I offer reliable behavioral and lifestyle coaching to help you build sustainable habits and achieve long-term wellness goals.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>06</span>
                            <div>
                                <h2>Meal Planning Services</h2>
                                <img src="https://em-content.zobj.net/source/apple/354/grapes_1f347.png" alt="Grapes" />
                            </div>
                            <ul>
                                <li>Creating balanced meal plans based on dietary preferences or restrictions (e.g., vegetarian, gluten-free, keto)</li>
                                <li>Providing grocery shopping guidance and healthy cooking tips</li>
                            </ul>
                            <p>I offer convenient meal planning services to help you enjoy healthy, delicious meals that fit your lifestyle and dietary preferences.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricingplansec">
                <div className="container">
                    <div className="pricingtitles text-center">
                        <h3><img src="/img/chevron_right.png" alt="" /> PRICING PLAN</h3>
                        <h2>Pricing My Work</h2>
                    </div>

                    <div className="pricingcards">
                        <div className="pricingcard">
                            <h4>Life Plan</h4>
                            <p>Perfect Choice for individual</p>
                            <h2>$29.00 <span>Monthly</span></h2>
                            <Link href='/contact'><button>Get Start Now</button></Link>
                            <div>
                                <h5>Lite includes:</h5>
                                <ul>
                                    <li><IoMdCheckmark /> Personalized meal plans</li>
                                    <li><HiXMark /> One-on-one dietary consultations</li>
                                    <li><HiXMark /> Weight loss guarantees</li>
                                    <li><HiXMark /> Instant miracle diets</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pricingcard" data-aos="fade-up">
                            <h4>Premium Plan</h4>
                            <p>Perfect Choice for individual</p>
                            <h2>$39.00 <span>Monthly</span></h2>
                            <Link href='/contact'><button>Get Start Now</button></Link>
                            <div>
                                <h5>Everything in lite, plus:</h5>
                                <ul>
                                    <li><IoMdCheckmark /> Personalized meal plans</li>
                                    <li><IoMdCheckmark /> One-on-one dietary consultations</li>
                                    <li><HiXMark /> Weight loss guarantees</li>
                                    <li><HiXMark /> Instant miracle diets</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pricingcard" >
                            <h4>Pro Plan</h4>
                            <p>Perfect Choice for individual</p>
                            <h2>$49.00 <span>Monthly</span></h2>
                            <Link href='/contact'><button>Get Start Now</button></Link>
                            <div>
                                <h5>Everything in pro, plus:</h5>
                                <ul>
                                    <li><IoMdCheckmark /> Personalized meal plans</li>
                                    <li><IoMdCheckmark /> One-on-one dietary consultations</li>
                                    <li><IoMdCheckmark /> Weight loss guarantees</li>
                                    <li><IoMdCheckmark /> Instant miracle diets</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}