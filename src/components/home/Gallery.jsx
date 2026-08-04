import { useEffect, useState } from "react";
import gallery from "../../data/gallery";

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

          {/* Heading */}

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

          {/* Album */}

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
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeAlbum}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              onClick={closeAlbum}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-red-400 transition"
            >
              ✕
            </button>

            {/* Judul Album */}
            <h2 className="text-white text-3xl font-bold text-center mb-6">
              {selectedAlbum.title}
            </h2>

            {/* Foto Besar */}
            <div className="relative">

              <img
                src={Object.values(selectedAlbum.images)[selectedImage]}
                alt={selectedAlbum.title}
                className="w-full max-h-[70vh] object-contain rounded-2xl bg-black"
              />

              {/* Previous */}
              {Object.values(selectedAlbum.images).length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full w-12 h-12 text-white text-2xl transition"
                >
                  ❮
                </button>
              )}

              {/* Next */}
              {Object.values(selectedAlbum.images).length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full w-12 h-12 text-white text-2xl transition"
                >
                  ❯
                </button>
              )}

            </div>

            {/* Counter */}
            <p className="text-center text-white mt-4">
              {selectedImage + 1} / {Object.values(selectedAlbum.images).length}
            </p>

            {/* Thumbnail */}
            <div className="mt-8 flex gap-3 overflow-x-auto pb-2">

              {Object.values(selectedAlbum.images).map((img, index) => (

                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setSelectedImage(index)}
                  className={`w-28 h-20 rounded-xl object-cover cursor-pointer transition border-4 ${
                    selectedImage === index
                      ? "border-sky-400"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                />

              ))}

            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
