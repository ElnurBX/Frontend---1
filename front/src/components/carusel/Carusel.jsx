import React from 'react'
import './carusel.scss'
const Carusel = () => {
  return (
    <div className="home__carusel">

    <div className='carusel'>
                <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://preview.colorlib.com/theme/tasty/images/bg_1.jpg.webp" class="d-block w-100" alt=""/>
                <div class="carousel-caption d-none d-md-block  carusel_inf">
                    <h1>Tasty & Delicious Food</h1>
                    <button>
                        Book a tabel
                    </button>
                </div>
            </div>
            <div class="carousel-item">
            <img src="https://preview.colorlib.com/theme/tasty/images/bg_2.jpg.webp" class="d-block w-100" alt=""/>
            <div class="carousel-caption d-none d-md-block  carusel_inf">
                    <h1>Tasty & Delicious Food</h1>
                    <button>
                        Book a tabel
                    </button>
                </div>
            </div>
            <div class="carousel-item">
            <img src="https://preview.colorlib.com/theme/tasty/images/bg_3.jpg.webp" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block  carusel_inf">
                    <h1>Tasty & Delicious Food</h1>
                    <button>
                        Book a tabel
                    </button>
                </div>  
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
    <div className="container">
    <div className="reservation">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <select name="" id="">
            <option value="">Person</option>
        </select>
        <button>
            Book a  tabel
        </button>
    </div>
    </div>
    </div>
  )
}

export default Carusel