const teamLogos = import.meta.glob(
  "../assets/Logo Tim/*.{png,jpg,jpeg,PNG,JPG,JPEG,svg,SVG}",
  {
    eager: true,
    import: "default",
  }
);

export default teamLogos;