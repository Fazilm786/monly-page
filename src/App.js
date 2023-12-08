import './App.css';

function App() {
  return (
    <div className="App">

      <div className='content'>

        <div className='nave'>

          <nav>

            <div className='left-cont'>


              <h1 style={{fontWeight:'900',marginTop:10}}>MONLY</h1>
              <img src={require('./assets/icons/sparkle.png')} alt='sparkler' className='sparkle'/>
              <ul>
                <li>Card</li>
                <li>App</li>
                <li>Plans</li>
                <li>About</li>
              </ul>
            </div>

            <div className='butto'>

              <button>Download The App<img src={require('./assets/icons/download.png')} alt='download' style={{width:15,paddingLeft:5}}/></button>
            </div>

          </nav>

        </div>











        <div className='header'>

          <div className='hiring'>

            <button><img src={require('./assets/icons/apple.png')} alt='apple'className='apple'/>Top Charts</button>
            <div className='paragraf'>

              <p>SMART</p>
              <p style={{marginTop:-90}}>HIRING</p>
              <div className='photo'>
                <img src={require('./assets/icons/man.png')} alt='man' className='man'/>
                <img src={require('./assets/icons/star.png')} alt='star' className='star'/>
              </div>
              <p className='p-bott'>TODAY</p>
              <img src={require('./assets/icons/start-button.png')} alt='start' className='start-button'/>
              

            </div>
            <div className='curve-line'></div>
            <div className='circle'></div>
            <div className='sqr'></div>
            <div className='half-circle'></div>
            <div className='small'></div>
            <div className='zig-zag'><img src={require('./assets/icons/zigzag.png')} alt='zigzag' className='zigzag'/></div>
            <div className='curve'></div>
            
          </div>
          <div className='boxes'>
            <div className='mobile'>
              <div className='heading-mobile'>
                <p style={{fontFamily:'sans-serif',fontSize:30,textAlign:'left',margin:0,fontWeight:500}}>Get 7<br/> days trial</p>
                {/* <img src={require('./assets/icons/')}/> */}
                <span class="material-symbols-outlined">fiber_manual_record</span>
                <span class="material-symbols-outlined dot">fiber_manual_record</span>
              </div>
              <div className='mobile-free'>Free</div>
              <img src={require('./assets/icons/sun (1).png')} alt='sun' className='sun'/>
              <img src={require('./assets/icons/sun.png')} alt='sun' className='sun'/>

              <img src={require('./assets/icons/pngwing.com.png')} alt='smartphone' className='mobile-phone'/>
              
              
              
              
              <div className='mobile-content'>
                <div className='mobile-top'>
                  <img src={require('./assets/icons/menu-bar.png')} alt='mobileLogo' style={{width:15,height:15,borderRadius:0 ,marginTop:8}} className='mlogo'/>
                  <h2 style={{marginLeft:16,fontWeight:900}}>Monly app</h2>
                  <img src={require('./assets/icons/setting.png')} alt='settingButt' className='mlogo' style={{width:10,height:10,borderRadius:0,marginLeft:20,marginTop:5}}/>
                </div>
                <div className='longButt'>
                  <div className='logbutt'>visebilety<spam style={{color:'white',padding:5}}>candidate</spam></div>
                </div>
                <div className='categarise'>
                  <h3>Categarise</h3>
                  <p style={{marginLeft:47}}>View all <img src={require('./assets/icons/right-arrow (1).png')} alt='arrow' style={{width:5,height:5}}/></p>
                </div>
                <div className='colorBox'>
                  <div className='blue'>
                    <h4>242</h4>
                    <hr/>
                    <p>Design</p>
                  </div>
                  <div className='green'>
                    <h4>46</h4>
                    <hr/>
                    <p>Midium</p>
                  </div>
                  <div className='orange'>
                    <h4>125</h4>
                    <hr/>
                    <p>Lange</p>
                  </div>
                </div>
                <div className='populer'>
                  <h4>Popular</h4>
                  <p style={{marginLeft:63}}>View all <img src={require('./assets/icons/right-arrow (1).png')} alt='arrow'style={{width:5,height:5}}/></p>
                </div>
                <div className='profile'>
                  <div className='first'>
                    <img src={require('./assets/icons/girl.jpeg')} alt='profile'/>
                    <div className='name' style={{marginLeft:5}}>
                      <h6 style={{marginTop:3}}>Angula Wilson</h6>
                      <p style={{marginTop:-10}}>@emirats</p>
                    </div>
                    <h6 style={{marginLeft:40,marginTop:3}}>MON<img src={require('./assets/icons/up-arrow.png')} alt='arrow'style={{width:8,height:8}}/></h6>
                  </div>
                  <div className='second'>
                    <img src={require('./assets/icons/man1.jpg')} alt='profile'/>
                    <div className='name'style={{marginLeft:5}}>
                      <h6 style={{marginTop:3}}>Fresh Foesh</h6>
                      <p style={{marginTop:-10}}>@america</p>
                    </div>
                    <h6 style={{marginLeft:40,marginTop:3}}>MON<img src={require('./assets/icons/up-arrow.png')} alt='arrow' style={{width:8,height:8}}/></h6>
                  </div>
                </div>
                <hr/>
                <div className='mobFooter'>
                  <div className='mob' style={{marginTop:-5}}>
                    <p style={{marginLeft:-5}}>Hero</p>
                    <h4 style={{fontWeight:900,marginTop:-8,fontSize:10}}>352k</h4>
                  </div>
                  <div className='mobImage' >
                    <img src={require('./assets/icons/man2.jpg')} alt='profiles'/>
                    <img src={require('./assets/icons/man3.jpg')} alt='profiles'/>
                    <img src={require('./assets/icons/man4.jpg')} alt='profiles'/>
                  </div>
                </div>

              </div>

            </div>
            <div className='trust'>
              <div className='trust-top'>
                <p >Best app to hire<br/> qualified<br/> top experts</p>
                <img src={require('./assets/icons/up-right-arrow.png')} alt='arrow' className='up-arrow'/>
              </div>
              <div className='trust-bott'>
                <button><img src={require('./assets/icons/star-green.png')} alt='star' className='star-green'/>Trustpilot</button>
                <div className='four'>
                  <p><img src={require('./assets/icons/sparkler-green.png')} alt='sparker' className='sparker-green'/>4.9</p>
                </div>

              </div>
            </div>
          </div>  
        </div>





        <div className='foot'>
          <div className='about'>
            <img src={require('./assets/icons/qr-code.png')} alt='qr' className='qr'/>
            <p>About<br/> Out App</p>
          </div>
          <div className='para'>
            <p>Enter Monly App, your seamless hiring solution. We revolutionize job 
              search and recruitment, connecting job seekers with employers effortlessly.</p>
            <a href='/'>LEARN MORE</a>
          </div>
          <div className='profile'>
            <div className='hunt'></div>
            <div className='2k'></div>
          </div>
          <div className='medal'>
            <img src={require('./assets/icons/winner.png')} alt='winner' className='winner'/>
          </div>
        </div>

      </div>
    </div>
    
    
  );
}

export default App;
