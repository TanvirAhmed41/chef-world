import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-center m-5">Best Recipes For You</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 rounded-2 mb-5 ">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://asianfoodnetwork.com/content/dam/afn/global/en/recipes/ngoh-hiang/AFN_ngoh_hiang_main_image.jpg.transform/desktop-img/img.jpg"
              className="card-img-top" style={{ height: "250px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Ngoh Hiang</h5>
              <p className="card-text">
                Ngoh Hiang is a traditional Hokkien dish that my family always
                orders when we eat out, so a few years ago, I was inspired to
                make my own, and it’s been a Lunar New Year staple ever since.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col rounded-3">
          <div className="card h-100 ">
            <img
              src="https://asianfoodnetwork.com/content/dam/afn/global/en/recipes/ayam-goreng-cabe-ijo/AyamGorengCabeIjo_Hero1_960x640.jpg.transform/recipestep-img/img.jpg"
              className="card-img-top"   style={{ height: "250px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Fried Chicken with Green Chili</h5>
              <p className="card-text">
                Ayam Goreng Cabe Ijo is a typical Indonesian dish from Padang,
                Sumatra. It combines juicy fried chicken with a spicy sauce made
                from green chilies to create a lovely dish which is bound to
                tantalize your taste buds.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://asianfoodnetwork.com/content/dam/afn/global/en/recipes/ayam-sasando/AyamSasando_Hero2_1920x1080.jpg.transform/desktop-img/img.jpg"
              className="card-img-top" style={{ height: "250px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Ayam Goreng Sasando</h5>
              <p className="card-text">
                A spicy Indonesian dish commonly found in East Nusa Tenggara
                cuisine, Ayam Goreng Sasando is known for its signature sambal
                chili sauce. Made with a blend of chili, tomatoes and other
                spice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
