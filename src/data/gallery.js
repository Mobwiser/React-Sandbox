const NUMBER_IMAGES = 3;
const slider = [];
for (let i = 1; i <= NUMBER_IMAGES; i++) {
  slider.push({
    original: `img/gallery/IMG${i}.jpg`,
    originalAlt: `Imagem ${i + 1} da galeria`,
    thumbnail: `img/gallery/IMG${i}.jpg`,
  });
}

export const GALLERY = {
  slider,
};
