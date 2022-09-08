<div class = "mx-16 mb-24">
        <div class="progress">
            <div class={`progress-bar bg${mang["wp"]["color"]}`} role="progressbar" aria-label="Segment one" style={{width: ((mang["wp"]["projects"]/(mang["cp"]["projects"]+mang["wp"]["projects"]+mang["TS"]["projects"]))*100).toString()+"%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            <div class={`progress-bar bg${mang["cp"]["color"]}`}  role="progressbar" aria-label="Segment two" style={{width: ((mang["cp"]["projects"]/(mang["cp"]["projects"]+mang["wp"]["projects"]+mang["TS"]["projects"]))*100).toString()+"%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            <div class={`progress-bar bg${mang["webmin"]["color"]}`}  aria-label="Segment three" style={{width:  ((mang["webmin"]["projects"]/(mang["cp"]["projects"]+mang["wp"]["projects"]+mang["TS"]["projects"]))*100).toString()+"%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
</div>