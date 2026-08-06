import { useEffect, useState } from "react";
import gallery from "../../data/gallery";
import videos from "../../data/video";

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setSelectedImage(0);
    document.body.style.overflow = "hidden";
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setSelectedImage(0);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (!selectedAlbum) return;

    const images = Object.values(selectedAlbum.images);

    setSelectedImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedAlbum) return;

    const images = Object.values(selectedAlbum.images);

    setSelectedImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedAlbum) return;

      if (e.key === "Escape") closeAlbum();

      if (e.key === "ArrowRight") nextImage();

      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedAlbum]);

  return (
    <>
      <section
        id="dokumentasi"
        className="py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span
              className="inline-block px-5 py-2 rounded-full font-semibold mb-5"
              style={{
                background: "#E8F8FD",
                color: "#1A1B5E",
              }}
            >
              DOKUMENTASI
            </span>

            <h2
              className="text-5xl font-black"
              style={{
                color: "#1A1B5E",
              }}
            >
              Momen Terbaik MS V-FEST 2026
            </h2>

            <p className="mt-5 text-slate-500 text-lg">
              Dokumentasi perjalanan kegiatan dari awal hingga penutupan.
            </p>

          </div>
          {/* AFTER MOVIE */}
          <div className="mb-20">
            <h3 className="text-3xl font-black text-center text-[#1A1B5E] mb-8">🎥 After Movie</h3>
            {videos.map((item) => (
              <div key={item.title}className="max-w-5xl mx-auto mb-10 rounded-3xl overflow-hidden shadow-2xl">
                <video
                controls
                preload="metadata"
                className="w-full aspect-video object-cover rounded-3x1">
                  <source src={item.video} type="video/mp4" />Browser Anda tidak mendukung video.</video>
                  <div className="p-6 bg-white">
                    <h4 className="text-2xl font-bold text-[#1A1B5E]">{item.title}</h4></div></div>))}
                    </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {gallery.map((album, index) => {

              const images = Object.values(album.images);

              return (

                <div
                  key={index}
                  onClick={() => openAlbum(album)}
                  className="group cursor-pointer overflow-hidden rounded-3xl shadow-lg bg-white hover:shadow-2xl duration-300"
                >

                  <div className="relative aspect-[4/3] overflow-hidden">

                    <img
                      src={images[0]}
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-110 duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <span
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: "#20C9F3",
                        color: "#fff",
                      }}
                    >
                      {images.length} Foto
                    </span>

                  </div>

                  <div className="p-6">

                    <h3
                      className="font-bold text-xl"
                      style={{
                        color: "#1A1B5E",
                      }}
                    >
                      {album.title}
                    </h3>

                    <p className="text-slate-500 mt-2">
                      Klik untuk melihat dokumentasi
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>
            {/* Modal Album */}
      {selectedAlbum && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={closeAlbum}
        >
          <div
            className="relative w-full max-w-7xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Tombol Close */}
            <button
              onClick={closeAlbum}
              className="absolute top-0 right-0 md:-top-14 text-white text-5xl hover:text-red-400 duration-300 z-50"
            >
              ✕
            </button>

            {/* Judul */}
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-8">
              {selectedAlbum.title}
            </h2>

            {/* Area Foto */}
            <div className="relative flex justify-center items-center w-full">

              <img
                src={Object.values(selectedAlbum.images)[selectedImage]}
                alt={selectedAlbum.title}
                className="
                  w-auto
                  h-auto
                  max-w-[92vw]
                  max-h-[78vh]
                  object-contain
                  rounded-2xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                  select-none
                "
              />

              {/* Previous */}
              {Object.values(selectedAlbum.images).length > 1 && (
                <button
                  onClick={prevImage}
                  className="
                    absolute
                    left-2
                    md:left-6
                    top-1/2
                    -translate-y-1/2
                    w-14
                    h-14
                    rounded-full
                    bg-white/20
                    backdrop-blur-md
                    text-white
                    text-3xl
                    hover:bg-white/35
                    duration-300
                  "
                >
                  ❮
                </button>
              )}

              {/* Next */}
              {Object.values(selectedAlbum.images).length > 1 && (
                <button
                  onClick={nextImage}
                  className="
                    absolute
                    right-2
                    md:right-6
                    top-1/2
                    -translate-y-1/2
                    w-14
                    h-14
                    rounded-full
                    bg-white/20
                    backdrop-blur-md
                    text-white
                    text-3xl
                    hover:bg-white/35
                    duration-300
                  "
                >
                  ❯
                </button>
              )}

            </div>

            {/* Counter */}
            <div className="mt-6 text-white text-lg font-semibold">
              {selectedImage + 1} / {Object.values(selectedAlbum.images).length}
            </div>

            {/* Thumbnail */}
            <div className="mt-8 w-full overflow-x-auto">
              <div className="flex justify-center gap-3 pb-2 min-w-max mx-auto">

                {Object.values(selectedAlbum.images).map((img, index) => (

                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setSelectedImage(index)}
                    className={`
                      w-24
                      h-16
                      md:w-28
                      md:h-20
                      object-cover
                      rounded-xl
                      cursor-pointer
                      duration-300
                      border-4
                      ${
                        selectedImage === index
                          ? "border-sky-400 scale-105 opacity-100"
                          : "border-transparent opacity-50 hover:opacity-100"
                      }
                    `}
                  />

                ))}

              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;