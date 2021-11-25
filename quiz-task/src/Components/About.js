import React from "react";

import AboutI from '../assets/img/001.jpg';

const About = () =>{
    return(
        <div>

    {/* // <!-- ======= About Section ======= --> */}
        <section id="about" class="about">
        <div class="container">

            <div class="row">
            <div class="col-lg-6">
                <img src={AboutI} class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
                <h4>Steam is an online platform from game developer Valve where you can buy, play, create, and discuss PC games.</h4>
                
                <div class="row">
                <div class="col-md-6">
                    <i class="bx bx-receipt"></i>
                    <h4>Corporis voluptates sit</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
                <div class="col-md-6">
                    <i class="bx bx-cube-alt"></i>
                    <h4>Ullamco laboris nisi</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
                </div>
            </div>
            </div>

        </div>
        </section>
        {/* <!-- End About Section --> */}

        </div>
    )
}

export default About;