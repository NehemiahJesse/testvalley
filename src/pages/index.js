
import Head from "next/head";
import ImageSlider from "../../components/ImageSlider";
import { bannerImages } from '../../src/Data';
import { Inter } from "next/font/google";

import Layout from '../../components/Layout';

export default function Home() {
  return (

<div>
 <main>
    <Layout>
     <div className="main-body">
      <div>
       <div className="slider-cont">
        <div className="swipe-cont">
         <ImageSlider images={bannerImages}/>
         </div>
       </div>
       </div>
        <div className="category-container">
         <div className="cat2">
            <div className="cat3">
             <img src="/testvalley.ico" />
              <div className="cat-txt">
              갤럭시 할인
              </div>
            </div>
            <div className="cat3">
              <img src="/testvalley.ico" />
              <div className="cat-txt">
              최상급 중고
              </div>
            </div>
            <div className="cat3">
              <img src="/testvalley.ico" />
              <div className="cat-txt">
              중고폰 특가
              </div>
            </div>
            <div className="cat3">
              <img src="/testvalley.ico" />
              <div className="cat-txt">
              판매하기
              </div>
            </div>
            <div className="cat3">
              <img src="/testvalley.ico" />
              <div className="cat-txt">
              서비스 소개
              </div>
            </div>
            <div className="cat3">
              <img src="/testvalley.ico" />
              <div className="cat-txt">
              게임기기
              </div>
            </div>
            <div className="cat3">
              <img src="/testvalley.ico" />
              <div className="cat-txt">
              애플
              </div>
           </div>
           <div className="cat3">
              <img src="/testvalley.ico" />
              <div className="cat-txt">
              겨울SALE
              </div>
           </div>
            
            <div className="cat3">
              <img src="/testvalley.ico" />
              <div className="cat-txt">
             스마트폰
              </div>
           </div>
           <div className="cat3">
              <img src="/testvalley.ico" />
              <div className="cat-txt">
               전체 보기
              </div>
           </div>

          </div>
        </div>
      <div className="display">
        <div className="display2">
         <div className="dis-head">
          <div className="dis-h1">HOT DEALS</div>
          <div className="dis-h2">HAPPY HOUR</div>
         </div>
         <div className="product-dis">
           <div className="product-box">
            <div className="product">
              
            </div>
           </div>
         </div>
        </div>
      </div>
      </div> 
    </Layout>
  </main>
</div>
  );
}
