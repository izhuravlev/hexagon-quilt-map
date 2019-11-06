import React from "react";
import PropTypes from "prop-types";
import theme from "../../theme";

const Hexagon = props => {
  const { image, idx, fabric, quiltSectionWidth, changeOneFabric, fabricSelected } = props;

  // if even number wide, true.
  // if not even number wide, make even every other row.
  const isFirst = Math.floor(idx / quiltSectionWidth) % 4 === 0;
  const isSecond = Math.floor(idx / quiltSectionWidth) % 4 === 1;
  const isThird = Math.floor(idx / quiltSectionWidth) % 4 === 2;
  const isFourth = Math.floor(idx / quiltSectionWidth) % 4 === 3;

  return (
    <div
      css={[
        {
          overflow: "hidden",
          clipPath: "polygon(0% 0%, 100% 0%, 0% 100% )",
          width: `calc(94vw / ${quiltSectionWidth} - 1px)`,
          height: `calc((94vw / ${quiltSectionWidth}))`,
          backgroundRepeat: "repeat",
          backgroundImage: `url(./images/${fabric}/${fabric}${image}.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        },
        isFirst && {
          "&:nth-of-type(odd)": {
            transform: "rotate(0deg)",
          },
          "&:nth-of-type(even)": {
            transform: "rotate(90deg)",
          },
        },
        isSecond && {
          "&:nth-of-type(odd)": {
            transform: "rotate(180deg)",
            marginTop: `calc(-94vw / ${quiltSectionWidth})`,
          },
          "&:nth-of-type(even)": {
            transform: "rotate(270deg)",
            marginTop: `calc(-94vw / ${quiltSectionWidth})`,
          },
        },
        isThird && {
          "&:nth-of-type(even)": {
            transform: "rotate(180deg)",
          },
          "&:nth-of-type(odd)": {
            transform: "rotate(270deg)",
          },
        },
        isFourth && {
          "&:nth-of-type(even)": {
            transform: "rotate(0deg)",
            marginTop: `calc(-94vw / ${quiltSectionWidth})`,
          },
          "&:nth-of-type(odd)": {
            transform: "rotate(90deg)",
            marginTop: `calc(-94vw / ${quiltSectionWidth})`,
          },
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
  const heightMeasurement = `(94vw / ${quiltSectionWidth})`;
  const rows = quiltSectionHeight - 1 + ((quiltSectionHeight - 1) % 2);

  return (
    <div
      className="Quilt"
      css={{
        overflow: "hidden",
        width: theme.breakpoints[0],
        display: "grid",
        gridTemplateColumns: `repeat(${quiltSectionWidth}, calc(${theme.breakpoints[0]} / ${quiltSectionWidth}))`,
        gridTemplateRows: `repeat(${quiltSectionHeight - 1}, 0fr)`,
        margin: "40px auto -16px auto",
        maxHeight: `calc(${rows / 2} * ${heightMeasurement})})`,
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
