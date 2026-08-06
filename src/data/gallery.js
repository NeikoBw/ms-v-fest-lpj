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
    title: "Gotong Royong",
    images: import.meta.glob(
        "../assets/Dokumentasi/Gotong Royong/*.{jpg,jpeg,png,JPG, JPEG,PNG}",
        {
            eager: true,
            import: "default",
        }
    )
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
    title: "Pertandingan",
    images: import.meta.glob(
      "../assets/Dokumentasi/Pertandingan/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
      {
        eager: true,
        import: "default",
      }
    ),
  },
  {
    title: "Grand Final",
    images: import.meta.glob(
      "../assets/Dokumentasi/Grand Final/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
      {
        eager: true,
        import: "default",
      }
    ),
  },
  {
    title: "Penyerahan Hadiah",
    images: import.meta.glob(
      "../assets/Dokumentasi/Penutupan/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
      {
        eager: true,
        import: "default",
      }
    ),
  },
];

export default gallery;