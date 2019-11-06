import React from "react";
import PropTypes from "prop-types";
import theme from "../../theme";

const Hexagon = props => {
  const { image, idx, fabric, quiltSectionWidth, changeOneFabric, fabricSelected } = props;

  // if even number wide, true.
  // if not even number wide, make even every other row.
  const isEven = Math.floor(idx / quiltSectionWidth) % 2 === 1;

  return (
    <div
      css={[
        {
          overflow: "hidden",
          position: "relative",
          clipPath: "polygon(0% 0%, 100% 0%, 0% 100% )",
          width: `calc(94vw / ${quiltSectionWidth} - 1px)`,
          height: `calc((94vw / ${quiltSectionWidth}) - 1px)`,
          backgroundRepeat: "repeat",
          backgroundImage: `url(./images/${fabric}/${fabric}${image}.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        },
        isEven
          ? {
              transform: "rotate(180deg)",
              marginTop: `calc((-94vw / ${quiltSectionWidth}))`,
            }
          : {
              transform: "rotate(0deg)",
              marginTop: 0,
            },
      ]}
    >
      {fabricSelected && (
        <div
          css={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={() => changeOneFabric(idx)}>{image}</button>
        </div>
      )}
    </div>
  );
};

Hexagon.propTypes = {
  image: PropTypes.number,
  idx: PropTypes.number,
  fabric: PropTypes.string,
  quiltSectionWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  quiltSectionHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  changeOneFabric: PropTypes.func,
  fabricSelected: PropTypes.number,
};

const Hexagons = props => {
  const { quiltSectionHeight, quiltSectionWidth, imageList } = props;
  let heightMeasurement = `(94vw / ${quiltSectionWidth})`;

  return (
    <div
      className="Quilt"
      css={{
        overflow: "hidden",
        width: theme.breakpoints[0],
        display: "grid",
        gridTemplateColumns: `repeat(${quiltSectionWidth}, calc(${theme.breakpoints[0]} / ${quiltSectionWidth}))`,
        gridTemplateRows: `repeat(${quiltSectionHeight}, calc(${heightMeasurement} - 1))`,
        margin: "40px auto -16px auto",
        paddingRight: `calc(${theme.breakpoints[0]} / ${quiltSectionWidth} / 3)`,
        maxHeight: `calc(${quiltSectionHeight - 1} * ${heightMeasurement} )`,
      }}
    >
      {imageList.map((image, idx) => {
        return <Hexagon key={`hexi-key-${image}-${idx}`} idx={idx} image={image} {...props} />;
      })}
    </div>
  );
};

Hexagons.propTypes = {
  imageList: PropTypes.array,
  quiltSectionWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  quiltSectionHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fabric: PropTypes.string,
  changeOneFabric: PropTypes.func,
  fabricSelected: PropTypes.number,
};

export default Hexagons;
