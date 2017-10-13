import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

const LOCATION = (process.env.LOCATION || 'images/*.{jpg,png,svg}');

const plugins = [
  imageminJpegtran(),
  imageminPngquant({quality: '90-95'}),
  imageminSvgo(),
];

const files = await imagemin([LOCATION], 'out', { plugins });

console.log(`🎉 ${files.length} images compressed`);
