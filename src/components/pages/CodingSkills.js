import React, { useState } from "react";
import {CodeBracketIcon} from '@heroicons/react/24/outline'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CodingSkills = () => {
    const stats={
        'Python': {
          'projects':34,
        },
        'JS': {
          'projects':26,
        },
        'Flutter': {
          'projects':1,
        },
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

            <div class = "mx-16 mb-24">
                <div class="progress">
                    <div class="progress-bar bg-blue-700" role="progressbar" aria-label="Segment one" style={{width: ((stats["Python"]["projects"]/(stats["JS"]["projects"]+stats["Python"]["projects"]+stats["Flutter"]["projects"]))*100).toString()+"%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-yellow-400" role="progressbar" aria-label="Segment two" style={{width: ((stats["JS"]["projects"]/(stats["JS"]["projects"]+stats["Python"]["projects"]+stats["Flutter"]["projects"]))*100).toString()+"%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-blue-400" role="progressbar" aria-label="Segment three" style={{width:  ((stats["Flutter"]["projects"]/(stats["JS"]["projects"]+stats["Python"]["projects"]+stats["Flutter"]["projects"]))*100).toString()+"%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                {/* <div class="progress">
                    <div class="progress-bar bg-blue-700" role="progressbar" aria-label="Segment one" style={{width: "55%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-yellow-400" role="progressbar" aria-label="Segment two" style={{width: "40%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-blue-400" role="progressbar" aria-label="Segment three" style={{width:  "5%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div> */}
            </div>

            
            <div class = "mx-16 mb-24">
          <div className="flex justify-around text-center shadow-sm shadow-slate-900 rounded-xl ">
              <div className="flex-1 justify-content-center  bg-white px-5 py-4 rounded-l-xl">
              <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png" className="flex mb-4 items-center mx-auto" alt="python" width={50}></img>
                <div>
                  <font className="text-3xl font-semibold text-blue-700"><CountUp end={stats['Python']['projects']} duration={2.00} redraw={true}>
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
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" className="flex  mb-4 items-center mx-auto" alt="python" width={50}></img>
              <div>
                  <font className="text-3xl font-semibold text-gray-900"><CountUp end={stats['JS']['projects']} duration={2.00} redraw={true}>
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
              <img src="https://user-images.githubusercontent.com/51419598/152648731-567997ec-ac1c-4a9c-a816-a1fb1882abbe.png" className="flex  mb-4 items-center mx-auto" alt="python" width={50}></img>
                <div>
                  <font className="text-3xl font-semibold text-blue-400"><CountUp end={stats['Flutter']['projects']} duration={2.00} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></font>
                </div>
                <h3 className="text-l font-normal text-slate-700 mb-2">Flutter</h3>
              </div>
          </div>
      </div>
        </>
    )
}

export default CodingSkills;