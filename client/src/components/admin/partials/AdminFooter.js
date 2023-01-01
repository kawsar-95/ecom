import React, { Fragment } from "react";
// import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
      // style={{ background: "#303031", color: "#87898A" }}
      // className="z-10 py-6 px-4 md:px-12 text-center"
      ><div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
          <div className="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="">
              <h6 className="
              uppercase
              font-semibold
              mb-4
              flex
              items-center
              justify-center
              md:justify-start
            ">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes"
                  className="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">
                  </path>
                </svg>
                Together Initiatives              </h6>
              <p>
                Together Initiative Ltd. achieved ISO 9001:2015 certification in 2022 after an extensive audit of the company’s internal operations.           </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Payment Method
              </h6>

              <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a class="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={40} height={40} viewBox="0 0 24 24" style={{ fill: '#undefined' }}>    <path d="M 4 4 C 2.895 4 2 4.895 2 6 L 2 18 C 2 19.105 2.895 20 4 20 L 20 20 C 21.105 20 22 19.105 22 18 L 22 6 C 22 4.895 21.105 4 20 4 L 4 4 z M 4 6 L 20 6 L 20 18 L 4 18 L 4 6 z M 13.947266 9.4824219 C 12.646266 9.4824219 12.039062 10.177031 12.039062 10.957031 C 12.039062 12.518031 13.773437 12.257109 13.773438 13.037109 C 13.773438 13.210109 13.685187 13.470703 12.992188 13.470703 C 12.298187 13.470703 11.779297 13.210938 11.779297 13.210938 L 11.605469 14.251953 C 11.605469 14.251953 12.03925 14.511719 12.90625 14.511719 C 13.68625 14.598719 14.900391 13.903281 14.900391 12.863281 C 14.900391 11.649281 13.167969 11.562078 13.167969 10.955078 C 13.167969 10.695078 13.340266 10.435547 13.947266 10.435547 C 14.380266 10.435547 14.814453 10.783203 14.814453 10.783203 L 15.074219 9.7421875 C 15.074219 9.7421875 14.467266 9.4824219 13.947266 9.4824219 z M 8.484375 9.5683594 L 7.3574219 13.037109 C 7.3574219 13.037109 7.2714844 12.777516 7.2714844 12.603516 C 6.6644844 11.129516 5.6230469 10.521484 5.6230469 10.521484 L 6.578125 14.423828 L 7.8789062 14.423828 L 9.6992188 9.5683594 L 8.484375 9.5683594 z M 16.894531 9.5683594 L 14.900391 14.423828 L 16.115234 14.423828 L 16.375 13.730469 L 17.935547 13.730469 L 18.109375 14.423828 L 19.150391 14.423828 L 18.195312 9.5683594 L 16.894531 9.5683594 z M 4.1503906 9.6542969 C 4.1503906 9.6542969 6.6645469 10.435859 7.1855469 12.255859 L 6.7519531 10.087891 C 6.7519531 10.087891 6.5776406 9.6542969 6.0566406 9.6542969 L 4.1503906 9.6542969 z M 10.21875 9.6542969 L 9.5253906 14.511719 L 10.740234 14.511719 L 11.519531 9.6542969 L 10.21875 9.6542969 z M 17.330078 11.042969 L 17.677734 12.863281 L 16.636719 12.863281 L 17.330078 11.042969 z" /></svg>


                </a>
                <a class="ml-3 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={40} height={40} viewBox="0 0 24 24" style={{ fill: '#undefined' }}>    <path d="M 4 4 C 2.895 4 2 4.895 2 6 L 2 18 C 2 19.105 2.895 20 4 20 L 20 20 C 21.105 20 22 19.105 22 18 L 22 6 C 22 4.895 21.105 4 20 4 L 4 4 z M 4 6 L 20 6 L 20 18 L 4 18 L 4 6 z M 10 8 A 4 4 0 0 0 6 12 A 4 4 0 0 0 10 16 A 4 4 0 0 0 12.017578 15.447266 C 12.605446 15.788406 13.276744 16 14 16 C 16.195455 16 18 14.195455 18 12 C 18 9.8045455 16.195455 8 14 8 C 13.276744 8 12.605446 8.2115935 12.017578 8.5527344 A 4 4 0 0 0 10 8 z M 14 10 C 15.104545 10 16 10.895455 16 12 C 16 13.104545 15.104545 14 14 14 C 13.826874 14 13.662162 13.971042 13.501953 13.929688 A 4 4 0 0 0 14 12 A 4 4 0 0 0 13.498047 10.070312 C 13.659348 10.02835 13.825566 10 14 10 z" /></svg>

                </a>
                <a class="ml-3 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={40} height={40} viewBox="0 0 24 24" style={{ fill: '#undefined' }}>    <path d="M 4 4 C 2.895 4 2 4.895 2 6 L 2 18 C 2 19.105 2.895 20 4 20 L 20 20 C 21.105 20 22 19.105 22 18 L 22 6 C 22 4.895 21.105 4 20 4 L 4 4 z M 4 6 L 20 6 L 20 10 L 20 14 L 20 18 L 4 18 L 4 14 L 4 6 z M 4 14 L 4.9003906 14 L 5.1992188 13.099609 L 6.9003906 13.099609 L 7.1992188 14 L 8.9003906 14 L 8.9003906 11 L 10 14 L 10.800781 14 L 11.900391 11.099609 L 11.900391 14 L 12.699219 14 L 12.699219 10 L 11.400391 10 L 10.400391 12.699219 L 9.4003906 10 L 8 10 L 8 13.800781 L 6.5996094 10 L 5.5 10 L 4 14 z M 20 14 L 18.5 12 L 20 10 L 18.900391 10 L 17.900391 11.199219 L 17.099609 10 L 13.800781 10 L 13.800781 14 L 17 14 L 18 12.699219 L 19 14 L 20 14 z M 6 10.800781 L 6.5 12.199219 L 5.5 12.199219 L 6 10.800781 z M 14.599609 10.900391 L 16.599609 10.900391 L 17.400391 12 L 16.5 13.199219 L 14.599609 13.199219 L 14.599609 12.400391 L 16.400391 12.400391 L 16.400391 11.599609 L 14.599609 11.599609 L 14.599609 10.900391 z" /></svg>
                </a>
                <a class="ml-3 text-gray-500">

                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={40} height={40} viewBox="0 0 24 24" style={{ fill: '#undefined' }}>    <path d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 12 4 C 16.418 4 20 7.582 20 12 C 20 16.418 16.418 20 12 20 C 7.582 20 4 16.418 4 12 C 4 7.582 7.582 4 12 4 z M 11.392578 5.1269531 L 11.392578 7.0234375 L 9.3007812 7.0234375 L 9.3007812 16.976562 L 11.392578 16.976562 L 11.392578 18.822266 L 12.691406 18.822266 L 12.691406 16.970703 C 13.648406 16.954703 14.390297 16.714281 14.904297 16.238281 C 15.434297 15.746281 15.699219 15.016781 15.699219 14.050781 C 15.699219 13.809781 15.675 13.57275 15.625 13.34375 C 15.574 13.11375 15.493766 12.899125 15.384766 12.703125 C 15.275766 12.507125 15.131125 12.3365 14.953125 12.1875 C 14.775125 12.0405 14.558687 11.928469 14.304688 11.855469 C 14.523687 11.759469 14.711188 11.638234 14.867188 11.490234 C 15.025187 11.343234 15.155766 11.177141 15.259766 10.994141 C 15.361766 10.811141 15.437375 10.61625 15.484375 10.40625 C 15.533375 10.19625 15.556641 9.9789531 15.556641 9.7519531 C 15.556641 9.2869531 15.484797 8.8830156 15.341797 8.5410156 C 15.196797 8.1990156 14.987844 7.9164531 14.714844 7.6894531 C 14.441844 7.4644531 14.108844 7.2965 13.714844 7.1875 C 13.407844 7.1025 13.059406 7.0600156 12.691406 7.0410156 L 12.691406 5.1269531 L 11.392578 5.1269531 z M 11.310547 8.6972656 L 12.376953 8.6972656 C 12.786953 8.6972656 13.082625 8.7961875 13.265625 8.9921875 C 13.448625 9.1881875 13.539063 9.5118906 13.539062 9.9628906 C 13.539062 10.363891 13.441047 10.668 13.248047 10.875 C 13.054047 11.083 12.757469 11.1875 12.355469 11.1875 L 11.310547 11.1875 L 11.310547 8.6972656 z M 11.310547 12.650391 L 12.664062 12.650391 C 13.038063 12.650391 13.304938 12.773531 13.460938 13.019531 C 13.618937 13.265531 13.697266 13.599438 13.697266 14.023438 C 13.696266 14.209438 13.675766 14.380156 13.634766 14.535156 C 13.593766 14.690156 13.529406 14.826359 13.441406 14.943359 C 13.351406 15.058359 13.238609 15.148891 13.099609 15.212891 C 12.959609 15.275891 12.791703 15.308594 12.595703 15.308594 L 11.310547 15.308594 L 11.310547 12.650391 z" /></svg>

                </a>
              </span>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                I-Store              </h6>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  About Us
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Digital Payments
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Careers
                </a>
              </p>
              <p>
                <a href="#!" className="text-gray-600">
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Contact
              </h6>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                  className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476 512">
                  <path fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                  </path>
                </svg>
                147/E Green Road, Level-3, Laila Lodge, Dhaka-1215              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                  className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                  </path>
                </svg>
                info@i2gether.com
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
                  className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                  </path>
                </svg>
                +8802 9101073
              </p>

            </div>
          </div>
        </div>
        <div className="text-center p-6 bg-gray-200">
          <span>© 2022 Copyright:</span>
          <a className="text-gray-600 font-semibold" href="http://i2gether.com/">Together Initiatives </a>
        </div>

      </footer>
    </Fragment>
  );
};

export default Footer;
