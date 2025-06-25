// Inject footer HTML
document.getElementById("footer").innerHTML = `
   <footer id="footer" class="footer ">
    <div class="container">
      <div class="footWrap defaultPadding">
        <div class="row">
          <!-- Company Info -->
          <div class="col-lg-auto col-sm-6 mb-4 mb-md-0">
            <a class="footer-brand" href="index.html">
              <img id="footer_logo" loading="lazy" src="image/BrandLogoWhite.webp" alt="Company">
            </a>
            <ul class="contact-info">
              <li>
                <a id="footer_address" class="locationLink" target="_blank" href="https://maps.app.goo.gl/8e5zxepecGP5nJfV8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                    <g fill="none" stroke="currentColor" stroke-width="1">
                      <path d="M8 14.5C10.5 11 12.5 8 12.5 6a4.5 4.5 0 1 0-9 0c0 2 2 5 4.5 8.5Z" />
                      <path d="M10 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
                    </g>
                  </svg>
                  <span> TF-A1-22, Akshar Pavilion Mall,
Near Priya Cinema,Vasna Bhyali
Main Road, Vadodara,391410</span>
                </a>
              </li>
              <li>
                <a id="footer_contact"  href="tel:+917016964352">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="M5.733 2.043c1.217-1.21 3.221-.995 4.24.367l1.262 1.684c.83 1.108.756 2.656-.229 3.635l-.238.238a.65.65 0 0 0-.008.306c.063.408.404 1.272 1.832 2.692s2.298 1.76 2.712 1.824a.7.7 0 0 0 .315-.009l.408-.406c.876-.87 2.22-1.033 3.304-.444l1.91 1.04c1.637.888 2.05 3.112.71 4.445l-1.421 1.412c-.448.445-1.05.816-1.784.885c-1.81.169-6.027-.047-10.46-4.454c-4.137-4.114-4.931-7.702-5.032-9.47l.749-.042l-.749.042c-.05-.894.372-1.65.91-2.184zm3.04 1.266c-.507-.677-1.451-.731-1.983-.202l-1.57 1.56c-.33.328-.488.69-.468 1.036c.08 1.405.72 4.642 4.592 8.492c4.062 4.038 7.813 4.159 9.263 4.023c.296-.027.59-.181.865-.454l1.42-1.413c.578-.574.451-1.62-.367-2.064l-1.91-1.039c-.528-.286-1.146-.192-1.53.19l-.455.453l-.53-.532c.53.532.529.533.528.533l-.001.002l-.003.003l-.007.006l-.015.014a1 1 0 0 1-.136.106c-.08.053-.186.112-.319.161c-.27.101-.628.155-1.07.087c-.867-.133-2.016-.724-3.543-2.242c-1.526-1.518-2.122-2.66-2.256-3.526c-.069-.442-.014-.8.088-1.07a1.5 1.5 0 0 1 .238-.42l.032-.035l.014-.015l.006-.006l.003-.003l.002-.002l.53.53l-.53-.531l.288-.285c.428-.427.488-1.134.085-1.673z" clip-rule="evenodd" />
                  </svg> <span >+91 70169 64352</span> </a>
              </li>
              <li>
                <a  id="footer_email" class="emailAnchor" href="mailto:company@Email.com">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM20 6.885l-7.552 4.944q-.106.055-.214.093q-.109.037-.234.037t-.234-.037t-.214-.093L4 6.884v10.5q0 .27.173.443t.443.173h14.769q.269 0 .442-.173t.173-.443zM12 11l7.692-5H4.308zM4 6.885v.211v-.811v.034V6v.32v-.052v.828zV18z" />
                  </svg>  <span>company@Email.com</span>  </a>
              </li>
            </ul>
            <div class="social-icons mt-3">
              <a target="_blank" class="facebook" href="https://www.linkedin.com/">
                <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a class="whatsapp set-url-target" rel="noopener" data-mobile-target="" data-desktop-target="_blank" target="_blank" href="https://api.whatsapp.com/send?phone=917016964352">
                <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks">
            <h5 class="fourthH centerStyle">Quick Links</h5>
            <ul>
              <li>
                <a href="index.html">
                  <i class="fa-solid fa-circle-chevron-right"></i>Home </a>
              </li>
              <li>
                <a href="about.html">
                  <i class="fa-solid fa-circle-chevron-right"></i>About </a>
              </li>
              <li>
                <a href="WhatWeDo.html">
                  <i class="fa-solid fa-circle-chevron-right"></i>Service </a>
              </li>
              <li>
                <a href="gallery.html">
                  <i class="fa-solid fa-circle-chevron-right"></i>Gallary</a>
              </li>
              <li>
                <a href="contactUs.html">
                  <i class="fa-solid fa-circle-chevron-right"></i>Contact </a>
              </li>
            </ul>
          </div>
          <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks1">
            <h5 class="fourthH centerStyle">Our Products</h5>
            <ul>
              <li>
                <a href="product1.html">
                  <i class="fa-solid fa-circle-chevron-right"></i> product1 </a>
              </li>
              <li>
                <a href="product2.html">
                  <i class="fa-solid fa-circle-chevron-right"></i> product2 </a>
              </li>
              <li>
                <a href="product3.html">
                  <i class="fa-solid fa-circle-chevron-right"></i> product3 </a>
              </li>
              <li>
                <a href="product4.html">
                  <i class="fa-solid fa-circle-chevron-right"></i> product4 </a>
              </li>
              <li>
                <a href="product5.html">
                  <i class="fa-solid fa-circle-chevron-right"></i> product5 </a>
              </li>
            </ul>
          </div>
          <!-- Contact Info -->
        </div>
      </div>
    </div>
    <div class="f-bottom effect">
      <div class="container">
        <div class="row ">
          <div class="col-12">
            <div class="inner">
              <div class="copyright text-center">
                <span class="year"></span> All Rights Reserved by <span id="footer_copyright">Company</span> | Developed by <a href="https://shriiitrackingsolution.in/" target="_blank">
                  <b>Shriii&nbsp;Tracking&nbsp;Solution</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
`;

// Fetch dynamic data from Google Sheets via Apps Script
fetch("https://script.google.com/macros/s/AKfycbylL2G8BN0SNarA1xe1BV-lCuHtKvK6UsEtRnHnTXcwl3J5yQkzuLVGfoObX5jD48vr/exec")
  .then(response => response.json())
  .then(data => {
    console.log("Footer data:", data);

    // Update footer content
    document.getElementById("footer_logo").src = data.footer_logo;
    document.querySelector("#footer_contact span").innerHTML = data.footer_contact;
    document.getElementById("footer_contact").href = `tel:${data.footer_contact}`;
    document.querySelector("#footer_email span").innerHTML = data.footer_email;
    document.getElementById("footer_email").href = `mailto:${data.footer_email}`;
    document.querySelector("#footer_address span").innerHTML = data.footer_address;
    document.getElementById("footer_address").href = data.footer_address_link || "#";
    document.getElementById("footer_copyright").innerHTML = data["footer-copyright"];

    // Set favicon dynamically
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = data.fevicon_image;
    document.head.appendChild(link);

    // Update WhatsApp link based on device
    const whatsappAnchor = document.querySelector(".set-url-target");
    function updateWhatsAppHref() {
      const isMobile = window.innerWidth < 768;
      const whatsappURL = isMobile
        ? `https://api.whatsapp.com/send?phone=${data.whatsapp_Number}`
        : `https://web.whatsapp.com/send?phone=${data.whatsapp_Number}`;
      whatsappAnchor.setAttribute("href", whatsappURL);
    }

    updateWhatsAppHref();

    // Handle resize with debounce
    window.addEventListener("resize", () => {
      clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(updateWhatsAppHref, 200);
    });
  })
  .catch(error => {
    console.error("Error fetching footer data:", error);
  });
