import React from "react";

import C1 from '../assets/img/clients/client-1.png';
import C2 from '../assets/img/clients/client-2.png';
import C3 from '../assets/img/clients/client-3.png';
import C4 from '../assets/img/clients/client-4.png';
import C5 from '../assets/img/clients/client-5.png';
import C6 from '../assets/img/clients/client-6.png';

const Clients = () =>{
    return(
        <div>
           
           {/* <!-- ======= Clients Section ======= --> */}
    <section id="clients" class="clients section-bg">
      <div class="container">

        <div class="row">

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={C1} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={C2} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={C3} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={C4} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={C5} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={C6} class="img-fluid" alt=""/>
          </div>

        </div>

      </div>
    </section>
        </div>
    )
}

export default Clients;