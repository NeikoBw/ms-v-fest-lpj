const gallery = [
  {
    title: "Panitia",
    images: import.meta.glob(
      "../assets/Dokumentasi/Panitia/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
      {
        eager: true,
        import: "default",
      }
    ),
  },

  {
    title: "Pembukaan",
    images: import.meta.glob(
      "../assets/Dokumentasi/Pembukaan/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
      {
        eager: true,
        import: "default",
      }
    ),
  },

  {
    title: "Final",
    images: import.meta.glob(
      "../assets/Dokumentasi/Final/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
      {
        eager: true,
        import: "default",
      }
    ),
  },
];

export default gallery;