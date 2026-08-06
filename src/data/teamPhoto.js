const teamPhotos = import.meta.glob(
  "../assets/Juara/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  {
    eager: true,
    import: "default",
  }
);

export default teamPhotos;