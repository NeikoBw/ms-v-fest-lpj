const sponsorLogos = import.meta.glob(
  "../assets/Sponsor/*.{png,jpg,jpeg,PNG,JPG,JPEG}",
  {
    eager: true,
    import: "default",
  }
);

export default sponsorLogos;