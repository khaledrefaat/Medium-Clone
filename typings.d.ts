interface Crop {
  _type: string;
  bottom: number | string;
  top: number | string;
  left: number | string;
  right: number | string;
}

interface HotSpot {
  _type: string;
  height: string;
  width: string;
  x: string;
  y: string;
}

interface Body {
  _key: string;
  children: { _key: string; _type: string; text: string; marks: [] }[];
  markDefs: [];
  style: string;
}

export interface Post {
  _id: string;
  title: string;
  description: string;
  slug: { current: string; _type: string };
  body: Body[];
  author: { image: { _type: string }; name: string };
  mainImage: {
    asset: { _ref: string; _type: string };
    crop: Crop;
    hotspot: HotSpot;
  };
}
