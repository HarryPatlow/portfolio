import "../../App.css"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { 
    AcademicCapIcon, 
    ChartBarIcon, 
    UserIcon, 
    CheckBadgeIcon, 
    FaceSmileIcon,
    PresentationChartBarIcon, 
    BoltIcon,
    BeakerIcon,
    CodeBracketIcon,
    BookOpenIcon,
    CalculatorIcon
} from '@heroicons/react/24/outline'

const Academic = () => {
    const percentbarstyle = "float-right rounded-full font-semibold px-3 mt-3 bg-gray-200 text-gray-900"
    const stats={
        'SAT': {
          'score':1400,
          'total':1600,
        },
        '10th': {
          'score':467,
          'total':500,
        },
        '12th': {
          'score':485,
          'total':500,
        },
    }
  
    return (
        <>
            <div className="inline-block px-16 py-12">
                <div className="flex gap-4 items-center">
                    <div>
                        <h1 className="text-5xl text-black font-semibold">Academics</h1>
                    </div>
        
                    <div>
                    <AcademicCapIcon className="w-12 text-indigo-600"/>
                    </div>
            </div>

        
            </div>



        <div class = "mx-16 mb-24">
          <div className="flex justify-around text-left shadow-sm shadow-slate-900 rounded-xl ">
              <div className="flex-1  bg-white px-5 py-4 rounded-l-xl">
                <h3 className="text-l font-normal text-slate-700 mb-2">SAT</h3>
                <div>
                  <font className="text-3xl font-semibold text-indigo-700"><CountUp end={stats['SAT']['score']} duration={2.00} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></font>
                  <font className="text-sm ml-2 mr-1 text-gray-600">out of</font>
                  <font className="text-sm text-gray-600">{stats['SAT']['total']}</font>
                  <div className={percentbarstyle}>
                    <font className={"text-sm"}> {parseInt(stats['SAT']['score']/stats['SAT']['total']*100)}%</font>
                  </div>
                </div>
              </div>
              <div className="flex-1 shrink-0 bg-white px-5 py-4 border-2 border-t-0 border-b-0 border-gray-200">
              <h3 className="text-l font-normal text-slate-700 mb-2">10th Score</h3>
              <div>
                  <font className="text-3xl font-semibold text-indigo-700"><CountUp end={stats['10th']['score']} duration={2.00} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></font>
                  <font className="text-sm ml-2 mr-1 text-gray-600">out of</font>
                  <font className="text-sm text-gray-600">{stats['10th']['total']}</font>
                  <div className={percentbarstyle}>
                      <font className={"text-sm"}> {parseInt(stats['10th']['score']/stats['10th']['total']*100)}%</font>
                  </div>
                </div>
              </div>
              <div className="flex-1 shrink-0 bg-white px-5 py-4 rounded-r-xl">
              <h3 className="text-l font-normal text-slate-700 mb-2">12th Score</h3>
                <div>
                  <font className="text-3xl font-semibold text-indigo-700"><CountUp end={stats['12th']['score']} duration={2.00} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></font>
                  <font className="text-sm ml-2 mr-1 text-gray-600">out of</font>
                  <font className="text-sm text-gray-600">{stats['12th']['total']}</font>
                  <div className={percentbarstyle}>
                      <font className={"text-sm"}> {parseInt(stats['12th']['score']/stats['12th']['total']*100)}%</font>
                  </div>
                </div>
              </div>
          </div>
      </div>

      <div class="mx-16 mt-16">
      <div class="row">
        <div class="col-4">
            <div id="list-example" class="list-group">
                <a class="list-group-item list-group-item-action" href="#list-item-1">How it Helped</a>
                <a class="list-group-item list-group-item-action" href="#list-item-2">Me at School</a>
                <a class="list-group-item list-group-item-action" href="#list-item-3">Interests at School</a>
                <a class="list-group-item list-group-item-action" href="#list-item-4">To Sum Up</a>
            </div>
        </div>
        <div class="col-8">
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                <div className="mb-12 border-b-2 border-gray-200">
                    <div className="flex gap-3 items-center mb-8">
                        <h4 className="text-3xl font-semibold text-gray-700" id="list-item-1">How it Helped</h4>
                        <ChartBarIcon className="w-8 text-indigo-600"/>
                    </div>
                    <p className="mb-8 text-gray-600">Prior to college, my academic experience had been an exciting event in my life. I learned critical skills. My teachers' information helped me understand the various techniques I needed to succeed in the real world. School also helped me develop better social skills, which helped me become a better person. </p>
                </div>
                <div className="mb-12 border-b-2 border-gray-200">
                    <div className="flex gap-3 items-center mb-8">
                        <h4 className="text-3xl font-semibold text-gray-700" id="list-item-2">Me at School</h4>
                        <UserIcon className="w-8 text-indigo-600"/>
                    </div>
                    <p className="mb-8 text-gray-600">As a student in school I had many successful experiences, and challenges. These experiences and challenges that I faced helped me grow as a person. As a student school helped me improve my life in many aspects. At school I have encountered many different successful experiences. These experiences helped me succeed in school.</p>
                </div>
                <div className="mb-12 border-b-2 border-gray-200">
                    <div className="flex gap-3 items-center mb-8">
                        <h4 className="text-3xl font-semibold text-gray-700" id="list-item-3">Interests</h4>
                        <FaceSmileIcon className="w-8 text-indigo-600"/>
                    </div>
                    <p className="mb-8 text-gray-600">There's always this curiosity that drives me to learn more and more about certain concepts. As a child, I used to dive into a large variety of concepts, not just computers. Areas like astronomy, basic physics, drawing fictional characters, and many others piqued my interest. </p>
                </div>
                <div className="mb-12 border-b-2 border-gray-200">
                    <div className="flex gap-3 items-center mb-8">
                        <h4 className="text-3xl font-semibold text-gray-700" id="list-item-4">To Sum Up</h4>
                        <CheckBadgeIcon className="w-8 text-indigo-600"/>
                    </div>
                    <p className="mb-8 text-gray-600">My educational experience is not like a normal child. It remains to be like a roller coaster with full ups and downs. Today while taking my Bachelor’s degree in computers I would like to turn back and recall my educational experiences.</p>
                </div>
            </div>
        </div>
        </div>
      </div>
      <div className="inline-block px-16 py-12">
                <div className="flex gap-4 items-center">
                    <div>
                        <h1 className="text-4xl text-black font-semibold">Subjects Stats</h1>
                    </div>
        
                    <div>
                    <PresentationChartBarIcon className="w-12 text-indigo-600"/>
                    </div>
            </div>
            
        </div>
        <div className="px-16 py-12">
            <div className="flex gap-4 items-center w-full mb-4">
                <BoltIcon className="w-8 text-indigo-600"/>
                <div class="progress w-full" style={{height: "30px"}}>
                    <div class="progress-bar bg-gray-600" role="progressbar" style={{width:"82%"}} aria-label="Basic example" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100">Physics</div>
                </div>
            </div>
            <div className="flex gap-4 items-center w-full mb-4">
                <BeakerIcon  className="w-8 text-indigo-600"/>
                <div class="progress w-full" style={{height: "30px"}}>
                    <div class="progress-bar bg-gray-600" role="progressbar" style={{width:"78%"}} aria-label="Basic example" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">Chemistry</div>
                </div>
            </div>
            <div className="flex gap-4 items-center w-full mb-4">
                <CodeBracketIcon className="w-8 text-indigo-600"/>
                <div class="progress w-full" style={{height: "30px"}}>
                    <div class="progress-bar bg-gray-600" role="progressbar" style={{width:"97%"}}  aria-label="Basic example" aria-valuenow="97" aria-valuemin="0" aria-valuemax="100">Computer Science</div>
                </div>
            </div>
            <div className="flex gap-4 items-center w-full mb-4">
                <CalculatorIcon className="w-8 text-indigo-600"/>
                <div class="progress w-full" style={{height: "30px"}}>
                    <div class="progress-bar bg-gray-600" role="progressbar" style={{width:"92%"}}  aria-label="Basic example" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">Math</div>
                </div>
            </div>
            <div className="flex gap-4 items-center w-full mb-4">
                <BookOpenIcon  className="w-8 text-indigo-600"/>
                <div class="progress w-full" style={{height: "30px"}}>
                    <div class="progress-bar bg-gray-600" role="progressbar" style={{width:"90%"}} aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">English</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Academic;