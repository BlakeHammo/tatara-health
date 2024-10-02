<!--First Page of Website, Bio and Qualifications, Link to bookings page -->

<template>
    <div>
      
      <main>
        <div class="fade-in-text">
          <h1 class="centered">Terms and Conditions</h1>
          <p class="centered">
            These terms and conditions outline the rules and regulations for the use of Tatara Health's website, located at www.tatarahealth.com.au.

              By accessing this website, we assume you accept these terms and conditions. Do not continue to use Tatara Health if you do not agree to all of the terms and conditions stated on this page.

              <h4>Terminology</h4>
              The terms "Client," "You," and "Your" refer to you, the person who logs on to this website and complies with the Company's terms and conditions.
              "The Company," "Ourselves," "We," "Our," and "Us," refer to our Company.
              "Party," "Parties," or "Us," refers to both the Client and ourselves.

              <h4>Bookings and Consultations</h4>
              All consultations must be booked in advance and are subject to availability. You agree to provide accurate and complete information when booking and during consultations. An intake for will be emailed to you upon booking, this much be completed 24-hours prior to your initial appointment. 

              <h4>Fees and Payments</h4>
              Consultation fees are outlined on our website and must be paid at the time of booking. Any additional costs, such as remedies or further testing, will be discussed and agreed upon during the consultation.

              <h4>Cancellations and Refunds</h4>
              Cancellations must be made at least 24 hours in advance to receive a full refund. Cancellations made with less than 24 hours’ notice may incur a cancellation fee.

              <h4>Privacy Policy</h4>
              Your privacy is important to us. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your personal information.

              <h4>Intellectual Property</h4>
              The content on this website, including text, graphics, logos, and images, is the property of Tatara Health and is protected by Australian and international copyright laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.

              <h4>Limitation of Liability</h4>
              Tatara Health will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, use of, or inability to use this website or any services provided.

              <h4>Governing Law</h4>
              These terms and conditions are governed by and construed in accordance with the laws of Australia. You irrevocably submit to the exclusive jurisdiction of the courts in that location.

              <h4>Changes to Terms and Conditions</h4>
              We reserve the right to amend these terms and conditions at any time. Changes will be posted on this page, and your continued use of the website signifies your acceptance of any revised terms.
              <br>
              <br>
              <br>

              <h2>Privacy Policy</h2>
              <h4>Effective Date: 1/10/2024</h4>
              Welcome to Tatara Health. We are committed to protecting your privacy and ensuring your personal information is handled in compliance with Australian privacy laws, including the Privacy Act 1988 and the Australian Privacy Principles (APPs). This policy outlines how we collect, use, disclose, and safeguard your personal information.
              <h4>Collection of Personal Information</h4>
              We may collect personal information in various ways, including when you:
              Visit our website
              Subscribe to our newsletter or services
              Contact us through the website, email, or social media
              Book consultations or purchase products
              Types of personal information we may collect include:
              <ul>
                <li>Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Address</li>
                <li>Health information (with your consent)</li>
                <li>Payment information (for purchases)</li>
              </ul>
              <h4>Use of Personal Information</h4>
              We use your personal information to:
              <ul>
                <li>Provide and improve our services</li>
                <li>Process bookings and transactions</li>
                <li>Send newsletters or health tips</li>
                <li>Respond to your inquiries</li>
                <li>Personalize your experience on our website</li>
              </ul>
              <h4>Disclosure of Personal Information</h4>
              We may share your personal information with:
              <ul>
                <li>Service providers (e.g., payment processors, hosting services) who assist us in delivering services</li>
                <li>Healthcare professionals if you consent to referral or consultation</li>
                <li>Regulatory or legal authorities when required by law</li>
                <li>We do not sell or trade your personal information to third parties.</li>         
              </ul>
              <h4>Security of Personal Information</h4>
              We take reasonable steps to protect your personal information from misuse, loss, unauthorized access, or disclosure. This includes using secure data storage and encryption technologies.
              <h4>Access and Correction of Personal Information</h4>
              You have the right to access and correct the personal information we hold about you. If you would like to request access or make changes, please contact us at [Your Contact Email].
              <h4>Cookies and Tracking Technologies</h4>
              Our website may use cookies and similar tracking technologies to improve user experience and analyse website traffic. You can choose to disable cookies in your browser settings, though some features of the site may not function correctly.
              <h4>Third-Party Links</h4>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites, and we encourage you to review their privacy policies.
              <h4>Changes to This Privacy Policy</h4>
              We may update this privacy policy from time to time. Any changes will be posted on this page, and the effective date will be updated.

          </p>
          <br>

          <div class="content-wrapper-horizontal">
          
          </div>
          <p>

          </p>
          <br>
          
        </div>

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

      </main>
    </div>
  </template>
  
  <script setup>
  </script>
  


  
  <style scoped>
  /* Add your styles for the homepage here */
  
  a:link, a:visited, a:hover, a:active {
    color: black;
  }

  .linked-image {
    height: 100%;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 20px;
  }

  .link-container {
    align-items: center;
    padding: 20px;
  }

  main {
    padding: 20px;
    padding-left: 15%;
    padding-right: 15%;
  }

  .centered {
    text-align: center;
  }

  h1 {
    padding-top: 20px;
  }

  #image-centered {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-wrapper-horizontal {
    display: flex;
    align-items: center;
  }

  /* mobile optimised*/
  @media (min-width: 320px) and (max-width: 999px) {
    a:link, a:visited, a:hover, a:active {
    color: black;
  }

    .linked-image {
      height: 100%;
      width: 100%;
    }

    .link-container {
      align-items: center;
      padding: 0px;
    }

    main {
      padding: 0px;
      padding-left: 0%;
      padding-right: 0%;
    }

    .centered {
      text-align: center;
    }

    h1 {
      padding-top: 30px;
    }

    #image-centered {
      display: block;
      align-items: center;
      justify-content: center;
    }

    .content-wrapper-horizontal {
      display: block;
      align-items: center;
    }
  }
  </style>
  