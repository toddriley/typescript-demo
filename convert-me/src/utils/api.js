const GIPHY_API_KEY = "YOUR_API_KEY_GOES_HERE";

export const getGif = id => {
  /**
   * Note: `Promise` is a generic class that allows us to also specify the type of
   * the argument we pass to the `resolve` callback function. e.g.
   *
   * `return new Promise<ApiData[]>((resolve, reject) => {`
   *
   * Deep dive here: https://www.typescriptlang.org/docs/handbook/generics.html
   */
  return new Promise((resolve, reject) => {
    const api_key = GIPHY_API_KEY;
    const endpoint = `https://api.giphy.com/v1/gifs?api_key=${api_key}
	&ids=${id}`;
    const options = {
      method: "GET",
      headers: {
        Accept: "image/*"
      }
    };
    fetch(endpoint, options)
      .then(res => {
        return res.json();
      })
      .then(json => {
        // Note: json can be left alone as `any` here, but we can use our own interface instead
        resolve(json.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// Sample API response from https://api.giphy.com/v1/gifs?api_key=SOMEKEY&ids=xT4uQulxzV39haRFjG,3og0IPxMM0erATueVW
// {
//   "data": [
//     {
//       "type": "gif",
//       "id": "xT4uQulxzV39haRFjG",
//       "slug": "texas-taco-tacos-xT4uQulxzV39haRFjG",
//       "url": "https://giphy.com/gifs/texas-taco-tacos-xT4uQulxzV39haRFjG",
//       "bitly_gif_url": "https://gph.is/1ZhShKr",
//       "bitly_url": "https://gph.is/1ZhShKr",
//       "embed_url": "https://giphy.com/embed/xT4uQulxzV39haRFjG",
//       "username": "ethanbarnowsky",
//       "source": "www.ethanbarnowsky.com",
//       "rating": "pg",
//       "content_url": "",
//       "source_tld": "",
//       "source_post_url": "www.ethanbarnowsky.com",
//       "is_sticker": 0,
//       "import_datetime": "2016-05-05 14:25:59",
//       "trending_datetime": "2018-05-06 01:00:02",
//       "user": {
//         "avatar_url": "https://media.giphy.com/avatars/ethanbarnowsky/I91dBOYP9fh8.gif",
//         "banner_url": "",
//         "profile_url": "https://giphy.com/ethanbarnowsky/",
//         "username": "ethanbarnowsky",
//         "display_name": "Ethan Barnowsky",
//         "guid": "ZS5iYXJub3dza3lAZ21haWwuY29t",
//         "is_verified": true
//       },
//       "images": {
//         "fixed_height_still": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/200_s.gif",
//           "width": "267",
//           "height": "200"
//         },
//         "original_still": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/giphy_s.gif",
//           "width": "400",
//           "height": "300"
//         },
//         "fixed_width": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/200w.gif",
//           "width": "200",
//           "height": "150",
//           "size": "516058",
//           "mp4": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/200w.mp4",
//           "mp4_size": "65097",
//           "webp": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/200w.webp",
//           "webp_size": "406580"
//         },
//         "fixed_height_small_still": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/100_s.gif",
//           "width": "133",
//           "height": "100"
//         },
//         "fixed_height_downsampled": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/200_d.gif",
//           "width": "267",
//           "height": "200",
//           "size": "74270",
//           "webp": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/200_d.webp",
//           "webp_size": "47248"
//         },
//         "preview": {
//           "width": "298",
//           "height": "222",
//           "mp4": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/giphy-preview.mp4",
//           "mp4_size": "36431"
//         },
//         "fixed_height_small": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/100.gif",
//           "width": "133",
//           "height": "100",
//           "size": "290198",
//           "mp4": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/100.mp4",
//           "mp4_size": "38292",
//           "webp": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/100.webp",
//           "webp_size": "238978"
//         },
//         "downsized_still": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/giphy_s.gif",
//           "width": "400",
//           "height": "300"
//         },
//         "downsized": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/giphy.gif",
//           "width": "400",
//           "height": "300",
//           "size": "1596723"
//         },
//         "downsized_large": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/giphy.gif",
//           "width": "400",
//           "height": "300",
//           "size": "1596723"
//         },
//         "fixed_width_small_still": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/100w_s.gif",
//           "width": "100",
//           "height": "75"
//         },
//         "preview_webp": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/giphy-preview.webp",
//           "width": "204",
//           "height": "153",
//           "size": "49320"
//         },
//         "fixed_width_still": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/200w_s.gif",
//           "width": "200",
//           "height": "150"
//         },
//         "fixed_width_small": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/100w.gif",
//           "width": "100",
//           "height": "75",
//           "size": "188325",
//           "mp4": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/100w.mp4",
//           "mp4_size": "24945",
//           "webp": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/100w.webp",
//           "webp_size": "167630"
//         },
//         "downsized_small": {
//           "width": "400",
//           "height": "300",
//           "mp4": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/giphy-downsized-small.mp4",
//           "mp4_size": "164367"
//         },
//         "fixed_width_downsampled": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/200w_d.gif",
//           "width": "200",
//           "height": "150",
//           "size": "47605",
//           "webp": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/200w_d.webp",
//           "webp_size": "34910"
//         },
//         "downsized_medium": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/giphy.gif",
//           "width": "400",
//           "height": "300",
//           "size": "1596723"
//         },
//         "original": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/giphy.gif",
//           "width": "400",
//           "height": "300",
//           "size": "1596723",
//           "frames": "72",
//           "mp4": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/giphy.mp4",
//           "mp4_size": "177067",
//           "webp": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/giphy.webp",
//           "webp_size": "919076"
//         },
//         "fixed_height": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/200.gif",
//           "width": "267",
//           "height": "200",
//           "size": "816695",
//           "mp4": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/200.mp4",
//           "mp4_size": "91264",
//           "webp": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/200.webp",
//           "webp_size": "552996"
//         },
//         "looping": {
//           "mp4": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/giphy-loop.mp4",
//           "mp4_size": "952743"
//         },
//         "original_mp4": {
//           "width": "480",
//           "height": "360",
//           "mp4": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/giphy.mp4",
//           "mp4_size": "177067"
//         },
//         "preview_gif": {
//           "url": "https://media1.giphy.com/media/xT4uQulxzV39haRFjG/giphy-preview.gif",
//           "width": "131",
//           "height": "98",
//           "size": "49475"
//         },
//         "480w_still": {
//           "url": "https://media0.giphy.com/media/xT4uQulxzV39haRFjG/480w_s.jpg",
//           "width": "480",
//           "height": "360"
//         }
//       },
//       "title": "happy cinco de mayo GIF by Ethan Barnowsky"
//     },
//     {
//       "type": "gif",
//       "id": "3og0IPxMM0erATueVW",
//       "slug": "no-dogs-nope-3og0IPxMM0erATueVW",
//       "url": "https://giphy.com/gifs/no-dogs-nope-3og0IPxMM0erATueVW",
//       "bitly_gif_url": "https://gph.is/2p5lz7E",
//       "bitly_url": "https://gph.is/2p5lz7E",
//       "embed_url": "https://giphy.com/embed/3og0IPxMM0erATueVW",
//       "username": "",
//       "source": "https://i.imgur.com/AGmGGDA.gifv",
//       "rating": "g",
//       "content_url": "",
//       "source_tld": "i.imgur.com",
//       "source_post_url": "https://i.imgur.com/AGmGGDA.gifv",
//       "is_sticker": 0,
//       "import_datetime": "2017-05-05 18:14:02",
//       "trending_datetime": "2017-05-05 18:15:03",
//       "images": {
//         "fixed_height_still": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/200_s.gif",
//           "width": "202",
//           "height": "200",
//           "size": "27461"
//         },
//         "original_still": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/giphy_s.gif",
//           "width": "480",
//           "height": "476",
//           "size": "136084"
//         },
//         "fixed_width": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/200w.gif",
//           "width": "200",
//           "height": "198",
//           "size": "2730940",
//           "mp4": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/200w.mp4",
//           "mp4_size": "206943",
//           "webp": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/200w.webp",
//           "webp_size": "711212"
//         },
//         "fixed_height_small_still": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/100_s.gif",
//           "width": "101",
//           "height": "100",
//           "size": "9010"
//         },
//         "fixed_height_downsampled": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/200_d.gif",
//           "width": "202",
//           "height": "200",
//           "size": "172624",
//           "webp": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/200_d.webp",
//           "webp_size": "40520"
//         },
//         "preview": {
//           "width": "282",
//           "height": "278",
//           "mp4": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/giphy-preview.mp4",
//           "mp4_size": "15371"
//         },
//         "fixed_height_small": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/100.gif",
//           "width": "101",
//           "height": "100",
//           "size": "793779",
//           "mp4": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/100.mp4",
//           "mp4_size": "76321",
//           "webp": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/100.webp",
//           "webp_size": "292300"
//         },
//         "downsized_still": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/giphy-downsized_s.gif",
//           "width": "250",
//           "height": "247",
//           "size": "45462"
//         },
//         "downsized": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/giphy-downsized.gif",
//           "width": "250",
//           "height": "247",
//           "size": "1176156"
//         },
//         "downsized_large": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/giphy-downsized-large.gif",
//           "width": "375",
//           "height": "371",
//           "size": "7751488"
//         },
//         "fixed_width_small_still": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/100w_s.gif",
//           "width": "100",
//           "height": "99",
//           "size": "8946"
//         },
//         "preview_webp": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/giphy-preview.webp",
//           "width": "167",
//           "height": "166",
//           "size": "48896"
//         },
//         "fixed_width_still": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/200w_s.gif",
//           "width": "200",
//           "height": "198",
//           "size": "26909"
//         },
//         "fixed_width_small": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/100w.gif",
//           "width": "100",
//           "height": "99",
//           "size": "780307",
//           "mp4": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/100w.mp4",
//           "mp4_size": "46434",
//           "webp": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/100w.webp",
//           "webp_size": "289804"
//         },
//         "downsized_small": {
//           "width": "192",
//           "height": "190",
//           "mp4": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/giphy-downsized-small.mp4",
//           "mp4_size": "80838"
//         },
//         "fixed_width_downsampled": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/200w_d.gif",
//           "width": "200",
//           "height": "198",
//           "size": "170061",
//           "webp": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/200w_d.webp",
//           "webp_size": "40686"
//         },
//         "downsized_medium": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/giphy-downsized-medium.gif",
//           "width": "363",
//           "height": "360",
//           "size": "4900030"
//         },
//         "original": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/giphy.gif",
//           "width": "480",
//           "height": "476",
//           "size": "17307668",
//           "frames": "124",
//           "mp4": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/giphy.mp4",
//           "mp4_size": "2591281",
//           "webp": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/giphy.webp",
//           "webp_size": "3035908",
//           "hash": "6b2f5e8acd4786f12f793bf990e924b0"
//         },
//         "fixed_height": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/200.gif",
//           "width": "202",
//           "height": "200",
//           "size": "2782268",
//           "mp4": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/200.mp4",
//           "mp4_size": "207711",
//           "webp": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/200.webp",
//           "webp_size": "717562"
//         },
//         "hd": {
//           "width": "720",
//           "height": "714",
//           "mp4": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/giphy-hd.mp4",
//           "mp4_size": "5194201"
//         },
//         "looping": {
//           "mp4": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/giphy-loop.mp4",
//           "mp4_size": "4752417"
//         },
//         "original_mp4": {
//           "width": "480",
//           "height": "476",
//           "mp4": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/giphy.mp4",
//           "mp4_size": "2591281"
//         },
//         "preview_gif": {
//           "url": "https://media2.giphy.com/media/3og0IPxMM0erATueVW/giphy-preview.gif",
//           "width": "110",
//           "height": "109",
//           "size": "44567"
//         },
//         "480w_still": {
//           "url": "https://media3.giphy.com/media/3og0IPxMM0erATueVW/480w_s.jpg",
//           "width": "480",
//           "height": "476"
//         }
//       },
//       "title": "over it no GIF"
//     }
//   ],
//   "pagination": {
//     "total_count": 2,
//     "count": 2,
//     "offset": 0
//   },
//   "meta": {
//     "status": 200,
//     "msg": "OK",
//     "response_id": "5c33afd439334843675e56c5"
//   }
// }
