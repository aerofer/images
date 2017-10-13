import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

const LOCATION = (process.env.LOCATION || 'images/*.{jpg,png,svg}');

const plugins = [
  imageminJpegtran(),
  imageminPngquant({ quality: '60-80' }),
  imageminSvgo(),
];

const finish = (files) => {
  console.log(`🎉 ${files.length} images compressed`);
};

imagemin([LOCATION], 'out', { plugins }).then(finish);
