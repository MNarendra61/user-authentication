import React from 'react'

const Footer = () => {
  return (
    <div>
                    {/* <!-- Footer --> */}
<footer class="page-footer justify-content-normal text-white bg-primary">

{/* <!-- Footer Links --> */}
<div class="container text-center text-md-left">

  {/* <!-- Grid row --> */}
  <div class="row">

    {/* <!-- Grid column --> */}
    <div class="col-md-3 mx-auto">

      {/* <!-- Links --> */}
      <h5 class="font-weight-bold  fine text-left mt-3 mb-4">Authentication</h5>


    </div>
    {/* <!-- Grid column --> */}

    <hr class="clearfix w-100 d-md-none"/>

    {/* <!-- Grid column --> */}
    <div class="col-md-2 mx-auto">

      {/* <!-- Links --> */}
      <h5 class="font-weight-bold textcase mt-3 mb-4 section">Section</h5>

      <ul class="list-unstyled">
        <li>
         Home
        </li>
        <li>
          Features
        </li>
        <li>
         Pricing
        </li>
        <li>
         FAQs
        </li>
        <li>
         About
        </li>

      </ul>

    </div>
    {/* <!-- Grid column --> */}

    <hr class="clearfix w-100 d-md-none"/>

    {/* <!-- Grid column --> */}
    <div class="col-md-2 mx-auto">

      {/* <!-- Links --> */}
      <h5 class="font-weight-bold textcase sec mt-3 mb-4">Section</h5>

      <ul class="list-unstyled">
        <li>
         Home
        </li>
        <li>
          Features
        </li>
        <li>
         Pricing
        </li>
        <li>
         FAQs
        </li>
        <li>
         About
        </li>

      </ul>

    </div>
    {/* <!-- Grid column --> */}

    <hr class="clearfix container w-100 d-md-none"/>

    {/* <!-- Grid column --> */}
    <div class="col-md-5 container textalign mx-auto">

      {/* <!-- Links --> */}
      <h5 class="font-weight-bold text-align-right sub mt-4 mb-4">Subscribe to our newsletter</h5>
      <h5 className='month'>Monthly digest of Whats new and existing form us.</h5> <br/>

      <div class="container inline  ">
      <input type="text" id="fname" name="fname" />
      Subscribe
</div>
    </div>
    {/* <!-- Grid column --> */}

  </div>
  {/* <!-- Grid row --> */}

</div>
{/* <!-- Footer Links --> */}
<hr/>

{/* <!-- Copyright --> */}
<div class=" container footer-copyright text-left py-3">© 2020 Company,inc. All Right Reserved.
</div>
{/* <!-- Copyright --> */}

</footer>
{/* <!-- Footer --></div> */}

    </div>
  )
}

export default Footer
