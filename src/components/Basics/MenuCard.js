import React from 'react'

export const MenuCard = ({ menuData }) => {
  return (
    <>
    <section className="main-card--cointainer">
      {menuData.map((curElem) => {
        return(
          <>
            <div className='card-container' key={curElem.id}>
              <div className='card'>
                <div className='card-body'>
                  <span className="card-number card-circle subtle">{curElem.id}</span>
                  <span className="card-auther subtle">{curElem.category}</span>
                  <h2 className="card-title subtile">{curElem.name}</h2>
                  <span className="card-description subtile">{curElem.description}</span>
                  <div className="card-read">Read</div>
                  <img src={curElem.image} alt="images" className="card-media" />
                  <span className="card-name subtle">Order Now</span>
                </div>
              </div>
            </div>
          </>
        )
      })
      }
    </section>

    
</>
  )
}

export default MenuCard;