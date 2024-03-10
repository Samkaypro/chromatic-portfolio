import Link from 'next/link';
import Script from 'next/script';

const Herobanner = () => {
  return (
    
    <div className='relative flex flex-col md:flex-row'>
      <Script src="/js/jquery.min.js" />
    <Script src="/js/jquery.tagcanvas.js" />
    <Script src="/js/main.js" />
        <div className="text-[#9C9C9C] max-w-xl md:pt-32 py-40 px-4 md:w-1/2">
          <h1 className="font-bold text-4xl text-white">Samuel Kayode</h1>
          <p className='my-8'>
            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
          </p>
          <button className='mt-6 flex items-center px-8 py-3 bg-white text-gray-700 rounded-sm font-bold'>
            <Link href="/about" className={`hover:text-black`}>See More About Me &rarr;</Link>
          </button>
        </div>
        {/* Second div visible only on medium and larger screens */}
        <div className="hidden md:block md:w-1/2  p-4">
          {/* Content of the second div */}
          <canvas width={500} height={500} id="myCanvas" >
            <ul id="tags">
              <li><a href="#" target="_blank">HTML</a></li>
              <li><a href="#" target="_blank">CSS</a></li>
              <li><a href="#" target="_blank">ES5</a></li>
              <li><a href="#" target="_blank">TypeScript</a></li>
              <li><a href="#" target="_blank">React</a></li>
              <li><a href="#" target="_blank">JSON</a></li>
              <li><a href="#" target="_blank">GSAP</a></li>
              <li><a href="#" target="_blank">Javascript</a></li>
              <li><a href="#" target="_blank">Wordpress</a></li>
              <li><a href="#" target="_blank">PHP</a></li>
              <li><a href="#" target="_blank">Python</a></li>
              <li><a href="#" target="_blank">Node JS</a></li>
              <li><a href="#" target="_blank">Git</a></li>
              <li><a href="#" target="_blank">Laravel</a></li>
              <li><a href="#" target="_blank">SASS</a></li>
              <li><a href="#" target="_blank">JQuery</a></li>
              <li><a href="#" target="_blank">SQI</a></li>
              <li><a href="#" target="_blank">C++</a></li>
              <li><a href="#" target="_blank">npm</a></li>
              <li><a href="#" target="_blank">Angular Js</a></li>
            </ul>
          </canvas>
        </div>
    </div>
  );
}

export default Herobanner;
