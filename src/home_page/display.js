export const getdata = async (apiurl) => {
  let response = await fetch(apiurl);
  response = await response.json();
  response = response.map((a) => a.show);
  return response;
};

export const getimg = (imgurl) => {
  imgurl = imgurl.map((a) => a.image.original);
  return imgurl;
};

export const totalitems = (result) => result.length;
