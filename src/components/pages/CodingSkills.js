import {CodeBracketIcon, LanguageIcon, CubeTransparentIcon, Cog6ToothIcon} from '@heroicons/react/24/outline'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CodingSkills = () => {
    const langs={
        'Python': {
            'projects':34,
            'logo':'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png',
            'color':'-blue-700'
        },
        'JS': {
            'projects':26,
            'logo':'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png',
            'color':'-yellow-400'
        },
        'HTML': {
            'projects':15,
            'logo':'https://cdn-icons-png.flaticon.com/512/174/174854.png?w=360',
            'color':'-red-600'
        },
        'CSS': {
            'projects':10,
            'logo':'https://www.exclusiveuxdesigns.com/img/css3-logo.fa388b1a.png',
            'color':'-blue-400'
        },
        'TS': {
            'projects':6,
            'logo':'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png',
            'color':'-blue-600'
        },
        'Dart': {
            'projects':2,
            'logo':'https://upload.wikimedia.org/wikipedia/commons/c/c6/Dart_logo.png',
            'color':'-blue-700'
        },
        'PHP': {
            'projects':1,
            'logo':'https://pngimg.com/uploads/php/php_PNG10.png',
            'color':'-indigo-700'
        },
    }
    const frams={
        'Django': {
            'projects':44,
            'logo':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQscweyvfutPn5sedFwsbqL4ORlhAg-MVZvWcyo7PcXpWjW6vpxiCYstXmKHp2GLaPoZUk&usqp=CAU',
            'color':'-green-900'
        },
        'React': {
            'projects':38,
            'logo':'https://ionicframework.com/docs/icons/logo-react-icon.png',
            'color':'-info'
        },
        'Tailwind': {
            'projects':22,
            'logo':'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
            'color':'-blue-400'
        },
        'Native': {
            'projects':15,
            'logo':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-epwFI5D7fkPzU4LX3PqdZqTgkleHQb1n8Q&usqp=CAU',
            'color':'-blue-300'
        },
        'Restful': {
            'projects':9,
            'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAM3RFWHRDb21tZW50AHhyOmQ6REFGTG4tWU5WWnc6MixqOjM0Nzk1MTExODA5LHQ6MjIwOTA4MDcNzlefAAAWW0lEQVR4nOzYsUmDYRSG0U9RsNQ2ISMER3AEwRHSZQzBwjVsM4BTZABL7QSxSmOnXZqUCfz4cM4Al7d74J49Lpe/AwD4186nHgAAHE/QASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEgQNABIEDQASBA0AEg4GLqAcBxrmezcT2fTz1j72e3G59vbye7N18ux+XV1cnuHev7/X3svr6mngEHBB3+udv7+3G3Xk89Y+9jux0vq9XJ7j08P4+bxeJk9471+vQ0tpvN1DPggJc7AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAE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EHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEgwH8AsGpinFjYzFIAAAAASUVORK5CYII=',
            'color':'-orange-800'
        },
        'Bootstrap': {
            'projects':6,
            'logo':'https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png',
            'color':'-purple-800'
        },
        'Flask': {
            'projects':2,
            'logo':'https://www.kindpng.com/picc/m/188-1882559_python-flask-hd-png-download.png',
            'color':'-gray-800'
        },
    }

    const mang={
        'wp': {
            'projects':64,
            'logo':'https://s.w.org/style/images/about/WordPress-logotype-simplified.png',
            'color':'-gray-700'
        },
        'webmin': {
            'projects':12,
            'logo':'https://www.svgrepo.com/show/331645/webmin.svg',
            'color':'-indigo-300'
        },
        'cp': {
            'projects':3,
            'logo':'https://www.pngall.com/wp-content/uploads/11/CPanel-PNG-Pic.png',
            'color':'-orange-600'
        }
    }
    return (
        <>
            <div className="inline-block px-16 py-12">
                <div className="flex gap-4 items-center">
                    <div>
                        <h1 className="text-5xl text-black font-semibold">Coding Skills</h1>
                    </div>
        
                    <div>
                    <CodeBracketIcon className="w-12 text-indigo-600"/>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="inline-block px-16 mx-2 mt-4 pb-12 ">
                <div className="flex gap-4 items-center">
                    <div>
                        <h1 className="text-3xl text-gray-600 font-semibold">Languages</h1>
                    </div>
        
                    <div>
                    <LanguageIcon className="w-10 text-indigo-600"/>
                    </div>
                </div>
            </div>
            <div class = "mx-16 mb-24">
                <div class="progress">
                    <div class={`progress-bar bg${langs["Python"]["color"]}`} role="progressbar" aria-label="Segment one" style={{width: ((langs["Python"]["projects"]/(langs["JS"]["projects"]+langs["Python"]["projects"]+langs["TS"]["projects"]+langs["HTML"]["projects"]+langs["CSS"]["projects"]+langs["Dart"]["projects"]+langs["PHP"]["projects"]))*100).toString()+"%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class={`progress-bar bg${langs["JS"]["color"]}`}  role="progressbar" aria-label="Segment two" style={{width: ((langs["JS"]["projects"]/(langs["JS"]["projects"]+langs["Python"]["projects"]+langs["TS"]["projects"]+langs["HTML"]["projects"]+langs["CSS"]["projects"]+langs["Dart"]["projects"]+langs["PHP"]["projects"]))*100).toString()+"%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class={`progress-bar bg${langs["HTML"]["color"]}`}  aria-label="Segment three" style={{width:  ((langs["HTML"]["projects"]/(langs["JS"]["projects"]+langs["Python"]["projects"]+langs["TS"]["projects"]+langs["HTML"]["projects"]+langs["CSS"]["projects"]+langs["Dart"]["projects"]+langs["PHP"]["projects"]))*100).toString()+"%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>

                    <div class={`progress-bar bg${langs["CSS"]["color"]}`}  aria-label="Segment one" style={{width: ((langs["CSS"]["projects"]/(langs["JS"]["projects"]+langs["Python"]["projects"]+langs["TS"]["projects"]+langs["HTML"]["projects"]+langs["CSS"]["projects"]+langs["Dart"]["projects"]+langs["PHP"]["projects"]))*100).toString()+"%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class={`progress-bar bg${langs["TS"]["color"]}`}  role="progressbar" aria-label="Segment two" style={{width: ((langs["TS"]["projects"]/(langs["JS"]["projects"]+langs["Python"]["projects"]+langs["TS"]["projects"]+langs["HTML"]["projects"]+langs["CSS"]["projects"]+langs["Dart"]["projects"]+langs["PHP"]["projects"]))*100).toString()+"%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class={`progress-bar bg${langs["Dart"]["color"]}`}  role="progressbar" aria-label="Segment three" style={{width:  ((langs["Dart"]["projects"]/(langs["JS"]["projects"]+langs["Python"]["projects"]+langs["TS"]["projects"]+langs["HTML"]["projects"]+langs["CSS"]["projects"]+langs["Dart"]["projects"]+langs["PHP"]["projects"]))*100).toString()+"%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class={`progress-bar bg${langs["PHP"]["color"]}`}  role="progressbar" aria-label="Segment three" style={{width:  ((langs["PHP"]["projects"]/(langs["JS"]["projects"]+langs["Python"]["projects"]+langs["TS"]["projects"]+langs["HTML"]["projects"]+langs["CSS"]["projects"]+langs["Dart"]["projects"]+langs["PHP"]["projects"]))*100).toString()+"%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                {/* <div class="progress">
                    <div class="progress-bar bg-blue-700" role="progressbar" aria-label="Segment one" style={{width: "55%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-yellow-400" role="progressbar" aria-label="Segment two" style={{width: "40%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-blue-400" role="progressbar" aria-label="Segment three" style={{width:  "5%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div> */}
            </div>

            
            <div class = "mx-16 mb-16 ">
          <div className="flex justify-around text-center shadow-sm shadow-slate-900 rounded-xl ">
              <div className="flex-1 justify-content-center  bg-white px-5 py-4 rounded-l-xl">
              <img src={langs["Python"]["logo"]} className="flex mb-4 items-center mx-auto" alt="python" width={50}></img>
                <div>
                  <font className={`text-3xl font-semibold text${langs["Python"]["color"]}`}><CountUp end={langs['Python']['projects']} duration={2.00} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></font>
                  
                </div>
                <h3 className="text-l font-normal text-slate-700 mb-2">Python</h3>
              </div>

              <div className="flex-1 shrink-0 bg-white px-5 py-4 border-2 border-t-0 border-b-0 border-gray-200">
              <img src={langs["JS"]["logo"]} className="flex  mb-4 items-center mx-auto" alt="python" width={50}></img>
              <div>
                  <font className="text-3xl font-semibold text-gray-900"><CountUp end={langs['JS']['projects']} duration={2.00} redraw={true}>
        {({ countUpRef, start,end }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></font>
                  <h3 className="text-l font-normal text-slate-700 mb-2">Javascript</h3>
                </div>
              </div>
              <div className="flex-1 shrink-0 bg-white px-5 py-4 rounded-r-xl">
              <img src={langs["HTML"]["logo"]} className="flex  mb-4 items-center mx-auto" alt="python" width={50}></img>
                <div>
                  <font className={`text-3xl font-semibold text${langs["HTML"]["color"]}`}><CountUp end={langs['HTML']['projects']} duration={2.00} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></font>
                </div>
                <h3 className="text-l font-normal text-slate-700 mb-2">HTML</h3>
              </div>
          </div>
      </div>








      <div class = "mx-16 mb-24 pb-20 border-b-2 border-gray-200">
          <div className="flex justify-around text-center  rounded-xl ">
              <div className="flex-1 justify-content-center  bg-white px-5 py-5 rounded-l-xl">
              <img src={langs["CSS"]["logo"]} className="flex mb-4 items-center mx-auto" alt="python" width={40}></img>
                <div>
                  <font className={`text-2xl font-semibold text${langs["CSS"]["color"]}`}><CountUp end={langs['CSS']['projects']} duration={2.00} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></font>
                  
                </div>

                <h3 className="text-m font-normal text-slate-700 mb-2">CSS</h3>
              </div>


              <div className="flex-1 justify-content-center  bg-white px-5 py-5 rounded-l-xl">
              <img src={langs["TS"]["logo"]} className="flex mb-4 items-center mx-auto" alt="python" width={40}></img>
                <div>
                  <font className={`text-2xl font-semibold text${langs["TS"]["color"]}`}><CountUp end={langs['TS']['projects']} duration={2.00} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></font>
                  
                </div>

                <h3 className="text-m font-normal text-slate-700 mb-2">TS</h3>
              </div>




            



              <div className="flex-1 justify-content-center  bg-white px-5 py-5 rounded-l-xl">
              <img src={langs["Dart"]["logo"]} className="flex mb-4 items-center mx-auto" alt="python" width={40}></img>
                <div>
                  <font className={`text-2xl font-semibold text${langs["Dart"]["color"]}`}><CountUp end={langs['Dart']['projects']} duration={2.00} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></font>
                  
                </div>

                <h3 className="text-m font-normal text-slate-700 mb-2">Dart</h3>
              </div>

              
              
              <div className="flex-1 justify-content-center  bg-white px-5 py-5 rounded-l-xl">
              <img src={langs["PHP"]["logo"]} className="flex mb-4 items-center mx-auto" alt="python" width={40}></img>
                <div>
                  <font className={`text-2xl font-semibold text${langs["PHP"]["color"]}`}><CountUp end={langs['PHP']['projects']} duration={2.00} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></font>
                  
                </div>

                <h3 className="text-m font-normal text-slate-700 mb-2">PHP</h3>
              </div>
          </div>
      </div>





{/* FrameWORKS */}


<div className="inline-block px-16 mx-2 mt-4 pb-12 ">
            <div className="flex gap-4 items-center">
                <div>
                    <h1 className="text-3xl text-gray-600 font-semibold">Frameworks</h1>
                </div>
    
                <div>
                <CubeTransparentIcon className="w-10 text-indigo-600"/>
                </div>
            </div>
        </div>
        <div class = "mx-16 mb-24">
            <div class="progress">
            <div class={`progress-bar bg${frams["Django"]["color"]}`} role="progressbar" aria-label="Segment one" style={{width: ((frams["Django"]["projects"]/(frams["React"]["projects"]+frams["Django"]["projects"]+frams["Restful"]["projects"]+frams["Tailwind"]["projects"]+frams["Native"]["projects"]+frams["Bootstrap"]["projects"]+frams["Flask"]["projects"]))*100).toString()+"%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div class={`progress-bar bg${frams["React"]["color"]}`}  role="progressbar" aria-label="Segment two" style={{width: ((frams["React"]["projects"]/(frams["React"]["projects"]+frams["Django"]["projects"]+frams["Restful"]["projects"]+frams["Tailwind"]["projects"]+frams["Native"]["projects"]+frams["Bootstrap"]["projects"]+frams["Flask"]["projects"]))*100).toString()+"%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div class={`progress-bar bg${frams["Tailwind"]["color"]}`}  aria-label="Segment three" style={{width:  ((frams["Tailwind"]["projects"]/(frams["React"]["projects"]+frams["Django"]["projects"]+frams["Restful"]["projects"]+frams["Tailwind"]["projects"]+frams["Native"]["projects"]+frams["Bootstrap"]["projects"]+frams["Flask"]["projects"]))*100).toString()+"%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>

                <div class={`progress-bar bg${frams["Native"]["color"]}`}  aria-label="Segment one" style={{width: ((frams["Native"]["projects"]/(frams["React"]["projects"]+frams["Django"]["projects"]+frams["Restful"]["projects"]+frams["Tailwind"]["projects"]+frams["Native"]["projects"]+frams["Bootstrap"]["projects"]+frams["Flask"]["projects"]))*100).toString()+"%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div class={`progress-bar bg${frams["Restful"]["color"]}`}  role="progressbar" aria-label="Segment two" style={{width: ((frams["Restful"]["projects"]/(frams["React"]["projects"]+frams["Django"]["projects"]+frams["Restful"]["projects"]+frams["Tailwind"]["projects"]+frams["Native"]["projects"]+frams["Bootstrap"]["projects"]+frams["Flask"]["projects"]))*100).toString()+"%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div class={`progress-bar bg${frams["Bootstrap"]["color"]}`}  role="progressbar" aria-label="Segment three" style={{width:  ((frams["Bootstrap"]["projects"]/(frams["React"]["projects"]+frams["Django"]["projects"]+frams["Restful"]["projects"]+frams["Tailwind"]["projects"]+frams["Native"]["projects"]+frams["Bootstrap"]["projects"]+frams["Flask"]["projects"]))*100).toString()+"%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                <div class={`progress-bar bg${frams["Flask"]["color"]}`}  role="progressbar" aria-label="Segment three" style={{width:  ((frams["Flask"]["projects"]/(frams["React"]["projects"]+frams["Django"]["projects"]+frams["Restful"]["projects"]+frams["Tailwind"]["projects"]+frams["Native"]["projects"]+frams["Bootstrap"]["projects"]+frams["Flask"]["projects"]))*100).toString()+"%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            {/* <div class="progress">
                <div class="progress-bar bg-blue-700" role="progressbar" aria-label="Segment one" style={{width: "55%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-yellow-400" role="progressbar" aria-label="Segment two" style={{width: "40%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-blue-400" role="progressbar" aria-label="Segment three" style={{width:  "5%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div> */}
        </div>

        
        <div class = "mx-16 mb-16 ">
        <div className="flex justify-around text-center shadow-sm shadow-slate-900 rounded-xl ">
            <div className="flex-1 justify-content-center  bg-white px-5 py-4 rounded-l-xl">
            <img src={frams["Django"]["logo"]} className="flex mb-4 rounded-xl items-center mx-auto" alt="Django" width={50}></img>
            <div>
                <font className={`text-3xl font-semibold text${frams["Django"]["color"]}`}><CountUp end={frams['Django']['projects']} duration={2.00} redraw={true}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} />
        </VisibilitySensor>
    )}
</CountUp></font>
                
            </div>
            <h3 className="text-l font-normal text-slate-700 mb-2">Django</h3>
            </div>

            <div className="flex-1 shrink-0 bg-white px-5 py-4 border-2 border-t-0 border-b-0 border-gray-200">
            <img src={frams["React"]["logo"]} className="flex  mb-4 items-center mx-auto" alt="Django" width={50}></img>
            <div>
                <font className={`text-3xl font-semibold text${frams["React"]["color"]}`}><CountUp end={frams['React']['projects']} duration={2.00} redraw={true}>
    {({ countUpRef, start,end }) => (
        <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} />
        </VisibilitySensor>
    )}
</CountUp></font>
                <h3 className="text-l font-normal text-slate-700 mb-2">React</h3>
            </div>
            </div>
            <div className="flex-1 shrink-0 bg-white px-5 py-4 rounded-r-xl">
            <img src={frams["Tailwind"]["logo"]} className="flex  mb-4 items-center mx-auto" alt="Django" width={50}></img>
            <div>
                <font className={`text-3xl font-semibold text${frams["Tailwind"]["color"]}`}><CountUp end={frams['Tailwind']['projects']} duration={2.00} redraw={true}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} />
        </VisibilitySensor>
    )}
</CountUp></font>
            </div>
            <h3 className="text-l font-normal text-slate-700 mb-2">Tailwind</h3>
            </div>
        </div>
    </div>








    <div class = "mx-16 mb-24 pb-20 border-b-2 border-gray-200">
        <div className="flex justify-around text-center  rounded-xl ">
            <div className="flex-1 justify-content-center  bg-white px-5 py-5 rounded-l-xl">
            <img src={frams["Native"]["logo"]} className="flex mb-4 items-center mx-auto" alt="Django" width={40}></img>
            <div>
                <font className={`text-2xl font-semibold text${frams["Native"]["color"]}`}><CountUp end={frams['Native']['projects']} duration={2.00} redraw={true}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} />
        </VisibilitySensor>
    )}
</CountUp></font>
                
            </div>

            <h3 className="text-m font-normal text-slate-700 mb-2">Native</h3>
            </div>


            <div className="flex-1 justify-content-center  bg-white px-5 py-5 rounded-l-xl">
            <img src={frams["Restful"]["logo"]} className="flex rounded-xl mb-4 items-center mx-auto" alt="Django" width={40}></img>
            <div>
                <font className={`text-2xl font-semibold text${frams["Restful"]["color"]}`}><CountUp end={frams['Restful']['projects']} duration={2.00} redraw={true}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} />
        </VisibilitySensor>
    )}
</CountUp></font>
                
            </div>

            <h3 className="text-m font-normal text-slate-700 mb-2">Restful</h3>
            </div>




        



            <div className="flex-1 justify-content-center  bg-white px-5 py-5 rounded-l-xl">
            <img src={frams["Bootstrap"]["logo"]} className="flex mb-4 items-center mx-auto" alt="Django" width={40}></img>
            <div>
                <font className={`text-2xl font-semibold text${frams["Bootstrap"]["color"]}`}><CountUp end={frams['Bootstrap']['projects']} duration={2.00} redraw={true}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} />
        </VisibilitySensor>
    )}
</CountUp></font>
                
            </div>

            <h3 className="text-m font-normal text-slate-700 mb-2">Bootstrap</h3>
            </div>

            
            
            <div className="flex-1 justify-content-center  bg-white px-5 py-5 rounded-l-xl">
            <img src={frams["Flask"]["logo"]} className=" rounded-full flex mb-4 items-center mx-auto" alt="Django" width={40}></img>
            <div>
                <font className={`text-2xl font-semibold text${frams["Flask"]["color"]}`}><CountUp end={frams['Flask']['projects']} duration={2.00} redraw={true}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} />
        </VisibilitySensor>
    )}
</CountUp></font>
                
            </div>

            <h3 className="text-m font-normal text-slate-700 mb-2">Flask</h3>
            </div>
        </div>
    </div>
      


{/* Content Management Systems */}


<div className="inline-block px-16 mx-2 mt-4 pb-12 ">
                <div className="flex gap-4 items-center">
                    <div>
                        <h1 className="text-3xl text-gray-600 font-semibold">Management Systems</h1>
                    </div>
        
                    <div>
                    <Cog6ToothIcon className="w-10 text-indigo-600"/>
                    </div>
                </div>
            </div>
        
            <div class = "mx-16 mb-24">
                <div class="progress">
                    <div class={`progress-bar bg${mang["wp"]["color"]}`} role="progressbar" aria-label="Segment one" style={{width: ((mang["wp"]["projects"]/(mang["webmin"]["projects"]+mang["wp"]["projects"]+mang["cp"]["projects"]))*100).toString()+"%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class={`progress-bar bg${mang["webmin"]["color"]}`}  role="progressbar" aria-label="Segment two" style={{width: ((mang["webmin"]["projects"]/(mang["webmin"]["projects"]+mang["wp"]["projects"]+mang["cp"]["projects"]))*100).toString()+"%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class={`progress-bar bg${mang["cp"]["color"]}`}  aria-label="Segment three" style={{width:  ((mang["cp"]["projects"]/(mang["webmin"]["projects"]+mang["wp"]["projects"]+mang["cp"]["projects"]))*100).toString()+"%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>



            <div class = "mx-16 mb-16 ">
          <div className="flex justify-around text-center shadow-sm shadow-slate-900 rounded-xl ">
              <div className="flex-1 justify-content-center  bg-white px-5 py-4 rounded-l-xl">
              <img src={mang["wp"]["logo"]} className="flex mb-4 items-center mx-auto" alt="python" width={50}></img>
                <div>
                  <font className={`text-3xl font-semibold text${mang["wp"]["color"]}`}><CountUp end={mang['wp']['projects']} duration={2.00} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></font>
                  
                </div>
                <h3 className="text-l font-normal text-slate-700 mb-2">Wordpress</h3>
              </div>

              <div className="flex-1 shrink-0 bg-white px-5 py-4 border-2 border-t-0 border-b-0 border-gray-200">
              <img src={mang["webmin"]["logo"]} className="flex  mb-4 items-center mx-auto" alt="python" width={50}></img>
              <div>
                  <font className={`text-3xl font-semibold text${mang["webmin"]["color"]}`}><CountUp end={mang['webmin']['projects']} duration={2.00} redraw={true}>
        {({ countUpRef, start,end }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></font>
                  <h3 className="text-l font-normal text-slate-700 mb-2">Webmin</h3>
                </div>
              </div>
              <div className="flex-1 shrink-0 bg-white px-5 py-4 rounded-r-xl">
              <img src={mang["cp"]["logo"]} className="flex  mb-4 items-center mx-auto" alt="python" width={50}></img>
                <div>
                  <font className={`text-3xl font-semibold text${mang["cp"]["color"]}`}><CountUp end={mang['cp']['projects']} duration={2.00} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></font>
                </div>
                <h3 className="text-l font-normal text-slate-700 mb-2">C-Panel</h3>
              </div>
          </div>
      </div>
      
        </>
    )
}

export default CodingSkills;