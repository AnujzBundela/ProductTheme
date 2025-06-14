
  $(function () {
    // WhatsApp URLs for desktop and mobile
    var hrefs = [
      "https://web.whatsapp.com/send?phone=918169027914", // Desktop
      "https://api.whatsapp.com/send?phone=918169027914" // Mobile
    ];
  
    // Function to update hrefs
    function updateWhatsAppHref() {
      var isMobile = $(window).width() < 767.98; // Check if width is less than 768px
      $(".set-url-target").attr("href", hrefs[isMobile ? 1 : 0]); // Update href
    }
  
    // Attach resize event with debounce
    $(window)
      .on("resize", function () {
        clearTimeout(this.resizeTimer); // Clear previous timer
        this.resizeTimer = setTimeout(updateWhatsAppHref, 200); // Debounce
      })
      .trigger("resize"); // Trigger on page load
  });
  
    fetch("https://script.google.com/macros/s/AKfycbylL2G8BN0SNarA1xe1BV-lCuHtKvK6UsEtRnHnTXcwl3J5yQkzuLVGfoObX5jD48vr/exec")
      .then(response => response.json())
      .then(data => {
        console.log(data);

        document.getElementById("footer_logo").src = data.footer_logo;
        document.getElementById("footer_description").innerHTML = data.footer_description;
        document.getElementById("footer_contact").innerHTML = data.footer_contact;
        document.getElementById("footer_email").innerHTML = data.footer_email;
        document.getElementById("footer_address").innerHTML = data.footer_address;

      })
      .catch(error => console.error("Error fetching data:", error));
      


            document.getElementById("footer").innerHTML =`
            <div class="container ">
        <div class="footWrap defaultPadding">
          <div class="row">
            <!-- Company Info -->
            <div class="col-lg-3 col-sm-6 mb-4 mb-md-0">
              <a class="footer-brand" href="index.html">
                <img id="footer_logo" src="image/VarniLogo.avif" alt="Varni Digital logo">
              </a>
              <p id="footer_description">
                In Corporated in the year 2013, in Vadodara (Gujarat, India), we “Varni Digital Pvt. Ltd.” is the renowned manufacturer and supplier of an enhanced quality product.
              </p>
            </div>
        
         
        
            <!-- Contact Info -->
            <div class="col-lg-3 col-sm-6 emailSec">
              <h5 class="fourthH centerStyle">Get In Touch</h5>
        
              <ul class="contact-info">
                <li>
                  <h6 class="fifthH"><i class="fa-solid fa-phone" aria-hidden="true"></i> Call</h6>
                  <a id="footer_contact" href="tel:+916354710794"> +91 63547 10794</a>
                
                </li>
                <li>
                  <h6 class="fifthH"><i class="fa-solid fa-envelope" aria-hidden="true"></i> Email</h6>
                  <a id="footer_email" class="emailAnchor" href="ABC@gmail.com">ABC@gmail.com</a>
                </li>
                <li>
                  <h6 class="fifthH"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Address</h6>
                  <a id="footer_address" class="locationLink" target="_blank" href="https://maps.app.goo.gl/j55ADo6KSAyyb6Nt5">TF-A1-22, Akshar Pavilion Mall, Near Priya Cinema,Vasna Bhyali Main Road, Vadodara,3914109</a>
                </li>
               
              </ul>
            </div>
  
            <div class="col-md-6 col-lg-auto mb-4 mb-md-0 exploreLinks">
              <h5 class="fourthH centerStyle">Recently Updated products</h5>
              <div class="footerLinkWrap">
                <ul>
                  <li>
                    <a href="product1.html"><i class="fa-solid fa-angles-right"></i>product1</a>
                  </li>
                  <li>
                    <a href="product2.html"><i class="fa-solid fa-angles-right"></i>product2</a>
                  </li>
                  <li>
                    <a href="product3.html"><i class="fa-solid fa-angles-right"></i>product3</a>
                  </li>
                  <li>
                    <a href="product4.html"><i class="fa-solid fa-angles-right"></i>product4</a>
                  </li>
                  <li>
                    <a href="product5.html"><i class="fa-solid fa-angles-right"></i>product5</a>
                  </li>
                  
                
                </ul>
              </div>
          
            </div>
          </div>
        </div>
      </div>
      <div class="f-bottom effect">
        <div class="container">
          <div class="row ">
            <div class="col-12">
              <div class="inner">
                <div class="copyright text-center">
                  2025 All Rights Reserved by Verni Digital | Developed by <a href="http://www.shriiitrackingsolution.com/" target="_blank"><b>Shriii&nbsp;Tracking&nbsp;Solution</b></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`


            