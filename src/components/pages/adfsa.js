<div className="inline-block px-16 mx-2 mt-4 pb-12 ">
                <div className="flex gap-4 items-center">
                    <div>
                        <h1 className="text-3xl text-gray-600 font-semibold">Management Systems</h1>
                    </div>
        
                    <div>
                    <LanguageIcon className="w-10 text-indigo-600"/>
                    </div>
                </div>
            </div>
            <div class = "mx-16 mb-24">
                <div class="progress">
                    <div class={`progress-bar bg${langs["Python"]["color"]}`} role="progressbar" aria-label="Segment one" style={{width: ((langs["Python"]["projects"]/(langs["JS"]["projects"]+langs["Python"]["projects"]+langs["TS"]["projects"]))*100).toString()+"%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class={`progress-bar bg${langs["JS"]["color"]}`}  role="progressbar" aria-label="Segment two" style={{width: ((langs["JS"]["projects"]/(langs["JS"]["projects"]+langs["Python"]["projects"]+langs["TS"]["projects"]))*100).toString()+"%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class={`progress-bar bg${langs["HTML"]["color"]}`}  aria-label="Segment three" style={{width:  ((langs["HTML"]["projects"]/(langs["JS"]["projects"]+langs["Python"]["projects"]+langs["TS"]["projects"]))*100).toString()+"%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
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