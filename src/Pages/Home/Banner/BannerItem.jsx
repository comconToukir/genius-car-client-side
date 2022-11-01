import "./BannerItem.css"

const BannerItem = ({ slideData: { image, id, prev, next }}) => {
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carousel-image">
          <img src={image} className="w-full" alt="" />
        </div>
        <div className="absolute flex flex-col justify-end gap-5 transform -translate-y-1/2 left-24 top-1/2">
          <h1 className="text-5xl font-bold leading-normal text-white ">
            Affordable <br />
            Price for Car <br />
            Servicing
          </h1>
          <p className="text-white text-lg leading-7 w-2/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            tempore porro similique voluptatibus a autem nihil nostrum alias qui
            fugit.
          </p>
          <div>
            <button className="btn  bg-orange-500 hover:bg-orange-600 border-none text-white w-36 mr-4">Warning</button>
            <button className="btn btn-outline hover:bg-white hover:text-orange-600 hover:border-white w-36 text-white">
              Warning
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
  );
};

export default BannerItem;