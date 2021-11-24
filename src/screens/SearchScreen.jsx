import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { addToCart } from "../actions/cartActions";
import Header from "../components/Header";
import "./ProductScreen.css";

const SearchProductScreen = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);
  console.log(products);

  const addToCartHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const settings = {
    dots: true,
    // arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  //   console.log(searchProduct?.files?.files?.map(x=>x))
  let { queryProducts } = useSelector((state) => state.QueryProducts);
  let values = queryProducts.filter(x=>x.data.length > 0)
  let [data]=values
  console.log("queryProducts", data?.data);

  return (
    <>
      <Header />

      <section className="productSection">
        <div className="productWrapper container">
          <div className="productContent">
            <div className="totalSortItems">
              <div className="sortItemsForms"></div>
            </div>
            {/* QueryProduct */}
            {data?.data?.map((x) => {
              return (
                <div className="allProduct">
                  <div className="productLeftContent"></div>
                  <div className="productRightContent">
                    <div className="productAndReview">
                      <div className="productReviewStock">
                        <h3>{x?.productInfo?.title}</h3>
                        <h5>Category:{x?.category}</h5>
                        <p>Price: {x?.productInfo?.price}</p>
                        <div className="reviewStock">
                          <div className="review">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="stock">
                            {x?.productInfo?.countInStock === 0 ? (
                              <p style={{ color: "#F54748" }}>Out of Stock</p>
                            ) : (
                              <p>In stock</p>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => addToCartHandler(x._id, 1)}
                          className="btn"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div classNameName="productSlider">
                        <Slider {...settings}>
                          {x?.files?.files?.map((x) => {
                            console.log("file", x);
                            return (
                              <img src={`/uploads/${x.filename}`} alt="" />
                            );
                          })}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchProductScreen;