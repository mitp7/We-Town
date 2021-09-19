
export default function Home() {
  return (
    <section className=" px-20 py-40 mx-auto text-gray-600 body-font overflow-hidden">
    	<div className="flex w-full p-8 border-b-4">
					<span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
					<div className="flex flex-col flex-grow ml-4">
						<textarea className="p-3 bg-transparent border border-gray-500 rounded-sm" name="" id=""  rows="3" placeholder="What's happening?"></textarea>
						<div className="flex justify-between mt-2">
							<button className="flex items-center h-8 px-3 text-xs rounded-sm hover:bg-gray-200"></button>
							<button className="flex items-center h-8 px-3 text-xs rounded-sm bg-gray-300 hover:bg-gray-400">Post</button>
						</div>
					</div>
			</div>
      <div className="container px-20 py-40 mx-auto">
        <div className="-my-9 divide-y-2 divide-gray-100">
          <div className="py-5 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">User name</span>
              <span className="font-semibold title-font text-gray-700">Location</span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <a href="#">
                <svg className="h-7 w-7 text-black float-right"  width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />  <line x1="12" y1="12" x2="12" y2="12.01" />  <line x1="8" y1="12" x2="8" y2="12.01" />  <line x1="16" y1="12" x2="16" y2="12.01" /></svg>
              </a>
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Garage sale ..</h2>
              <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexill lumbersexual pork belly polaroid hoodie portland craft beer.</p>
              <div className="ml-2 my-2 p-2 text-xs inline-flex font-bold leading-sm uppercase py-2 bg-green-200 text-green-700 rounded-full">
              Available
              </div>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">User name</span>
              <span className="font-semibold title-font text-gray-700">Location</span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <a href="#">
                <svg className="h-7 w-7 text-black float-right"  width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />  <line x1="12" y1="12" x2="12" y2="12.01" />  <line x1="8" y1="12" x2="8" y2="12.01" />  <line x1="16" y1="12" x2="16" y2="12.01" /></svg>
              </a>
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Selling clothes..</h2>
              <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
              <div className="ml-2 my-2 p-2 text-xs inline-flex font-bold leading-sm uppercase py-2 bg-red-200 text-black-700 rounded-full">
              Unavailable
              </div>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">User name</span>
              <span className="font-semibold title-font text-gray-700">Location</span>
              <span className="text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <a href="#">
                <svg className="h-7 w-7 text-black float-right"  width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />  <line x1="12" y1="12" x2="12" y2="12.01" />  <line x1="8" y1="12" x2="8" y2="12.01" />  <line x1="16" y1="12" x2="16" y2="12.01" /></svg>
              </a>
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Need help with fixing</h2>
              <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
              <div className="ml-2 my-2 p-2 text-xs inline-flex items-center font-bold leading-sm uppercase py-2 bg-yellow-200 text-yellow-700 rounded-full"
              >Pending</div>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">User name</span>
              <span className="font-semibold title-font text-gray-700">Location</span>
              <span className="text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <a href="#">
                <svg className="h-7 w-7 text-black float-right"  width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />  <line x1="12" y1="12" x2="12" y2="12.01" />  <line x1="8" y1="12" x2="8" y2="12.01" />  <line x1="16" y1="12" x2="16" y2="12.01" /></svg>
              </a>
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Cleaning help</h2>
              <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
              <div className="ml-2 my-2 p-2 text-xs inline-flex font-bold leading-sm uppercase py-2 bg-green-200 text-green-700 rounded-full">
              Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};