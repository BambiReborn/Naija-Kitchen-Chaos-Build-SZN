

function PolygonBorder() {
  return (
    <svg
      className="polygonBorder"
      viewBox="0 0 1200 420"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="
          M30 20
          H410
          L455 55
          H745
          L790 20
          H1170
          L1195 45

          V375

          L1170 400

          H790
          L745 365
          H455
          L410 400
          H30

          L5 375

          V45

          Z
        "
      />
    </svg>
  );
}

export default PolygonBorder;