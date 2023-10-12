import React from "react";

const menuCard = ({ menuData }) => {
  // console.log(menuData);
  // menuData.map((curElem) => {
  return (
    <>
      <section className="main-card--container">
        {menuData.map((curElem) => {
          const { id, name1, category, image, description } = curElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number">{id}</span>
                    <span className="card-author subtle">{name1}</span>
                    <h2 className="card-title">{category}</h2>
                    <span className="card-description subtle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas atque, neque distinctio, placeat nam facere alias
                      commodi vero, suscipit aut iure accusamus eos mollitia
                      rerum.
                    </span>
                    <img src={image} alt="ig" className="card-media" />
                    {description}
                    <div className="card-read">Read</div>
                    {/* <img src={image} alt="Image" className="card-media" /> */}
                  </div>
                  {/* <img
                    src={require("./images/dann-error.png")}
                    height={100}
                    width={100}
                    alt=" for maggie"
                  />
                  space here
                  <img
                    src={require("../images/dann.png")}
                    height={100}
                    width={100}
                    alt=" for maggie"
                  /> */}
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default menuCard;
