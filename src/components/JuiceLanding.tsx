export default function JuiceLanding(){
    return (
    <>
    <nav>
        <div className="logo">
            <img src="src/assets/images/LOGO.svg" alt="logo"/>
        </div>
        <div className="services">
            <div className="home">
                Home
            </div>
            <div className="home">
                Features
            </div>
            <div className="home">
                Menu
            </div>
            <div className="home">
                Pricing
            </div>
            <div className="home">
                Contact
            </div>
        </div>
        
            <button className="nav-button">Sign up</button>

    </nav>
    <div className="juice-body">
        <div className="section-1">
          <div className="section-1-text">
            <div className="heading-1">
                Revitalize Your Routine, <br/>
                Fresh, Fruity, Fantastic!
            </div>
            <div className="body">
                "Savor the Symphony of Flavors, with Nature's Sweetness & deliciousness.<br/>
                Get the best variety of juices here!”
            </div>
            <div className="section-1-btns">
                <button className="body-btn view">
                    View Menu
                </button>
                <button className="body-btn discount">
                    Discount
                </button>

            </div>
          </div>
          <div className="section-1-img">
            <img src="src/assets/images/Orange IMAGE.svg" alt="" />
          </div>
        </div>  
        <div className="section-1 egg ">
            <div className="section-1-text">
                <div className="heading-1">
                    Why we <br/> are better <br/> than others
                </div>
                <div className="body">
                    Our commitment to excellence <br/> in the realm of juices sets us<br/> apart from the competition.
                </div>
            </div>
            <div className="section-2-img">
                <div className="pineapple">
                    <img src="src/assets/images/Pineapple.svg" alt=""  width={273} height={304}/>
                </div>
                <div className="grape">
                    <img src="src/assets/images/Grapes.svg" alt="" width={273} height={304} />
                </div>
                <div className="watermelon">
                    <img src="src/assets/images/Watermelon.svg" alt="" width={273} height={304} />
                </div>
                
            </div>
        </div>
        <div className="section-1">
            <div className="section-3-text">
            <div style={{marginTop: "160px"}} className="heading-1">
                    Explore best<br/> menu selections
            </div>
            <div className="section-3-img">
                <div className="mango">
                    <div className="top-heart" >
                        <img src="src/assets/images/fi-br-heart.svg" alt="" width={22.44} height={23.64}/>
                    </div>
                    <div className="img">
                        <img src="src/assets/images/MANGO.svg" alt="" width={356} height={348}/>
                    </div>
                    <div className="text">
                        <p className="name"> 
                        Mango Bliss Burst
                        </p>
                        <p className="description">Description of the item</p>
                        <div className="price">
                        <span>$</span>10.00
                        </div>
                    </div>
                </div>
                <div className="mango">
                <div className="top-heart" style={{position:"absolute", left: "810px" }}> 
                        <img src="src/assets/images/fi-br-heart.svg" alt="" width={22.44} height={23.64}/>
                    </div>
                    <div className="img">
                        <img src="src/assets/images/KIWI IMAGE.svg" alt="" width={356} height={348}/>
                    </div>
                    <div className="text">
                        <p className="name"> 
                        Pure Kiwi Joy
                        </p>
                        <p className="description">Description of the item</p>
                        <div className="price">
                        <span>$</span>1.00
                        </div>
                    </div>
                </div>
                <div className="mango">
                <div className="top-heart" style={{position:"absolute", left: "1225px" }}>
                        <img src="src/assets/images/fi-br-heart.svg" alt="" width={22.44} height={23.64}/>
                    </div>
                    <div className="img">
                        <img src="src/assets/images/raspberyy.svg" alt="" width={356} height={348}/>
                    </div>
                    <div className="text">
                        <p className="name"> 
                        Berry Burst Bliss
                        </p>
                        <p className="description">Description of the item</p>
                        <div className="price">
                        <span>$</span>11.00
                        </div>
                    </div>
                </div>


            </div>
            <div className="view-all" style={{width:"10%"}}>
                View All <div style={{width:"30%"}}><img src="src/assets/images/Arrow 1.svg" alt="" width={28.19} height={10} /></div>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}