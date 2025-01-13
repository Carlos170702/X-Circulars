export interface ProductsResponse {
  result: Products[];
  status: number;
}

export interface Products {
  images: string[];
  _id: string;
  url_image: string;
  id_category: number;
  brand: string;
  upc: string;
  size: string;
  variety: string[];
  price: string;
  must_buy: number;
  desc: string;
  notes: null | string;
  quality_cf: QualityCF;
  type_of_meat: TypeOfMeat;
  master_brand: MasterBrand;
  type_of_cut: QualityCF;
  createdById: number;
  status_active: boolean;
  plu?: Plu;
  pack?: number | null;
  count?: number | null;
  w_simbol?: null | string;
  embase?: null | string;
  createdAt?: Date;
  updatedAt: Date;
  id_product: number;
  __v: number;
  verify?: boolean;
  per?: null | string;
  conditions?: string;
}

export enum MasterBrand {
  Abbott = "Abbott",
  Arnold = "Arnold",
  Asd = "asd",
  Avenue = "Avenue ",
  Bachman = "Bachman",
  BlueDiamond = "Blue Diamond",
  Borden = "Borden",
  Brillo = "Brillo",
  CafeBustelo = "Cafe Bustelo",
  Cento = "Cento ",
  CocaCola = "Coca Cola",
  Dannon = "Dannon",
  Dare = "Dare",
  Df = "df",
  Downy = "Downy",
  DuncanHines = "Duncan Hines",
  Empty = "",
  EntenmannS = "Entenmann's",
  EssentialEveryday = "Essential Everyday",
  Everyday = "Everyday",
  Ferrero = "Ferrero",
  FluffyKelloggS = "Kellogg´s",
  FritoLay = "Frito Lay",
  Gain = "Gain",
  Gamesa = "Gamesa",
  GeneralMills = "General Mills",
  Gerber = "Gerber ",
  Gillette = "Gillette",
  Glaceau = "Glaceau",
  Heinz = "Heinz",
  Josue = "Josue",
  Keebler = "Keebler",
  KelloggS = "Kellogg's",
  KenSSteakHouse = "Ken's Steak House",
  Keurig = "Keurig",
  KonaBrewing = "Kona Brewing",
  Kotex = "Kotex",
  Kraft = "Kraft ",
  LayS = "Lay's",
  Lays = "Lays",
  Lifeway = "Lifeway",
  LilyS = "Lily's",
  MaltOMeal = "Malt O Meal ",
  Maruchan = "Maruchan",
  MasterBrandCento = "Cento",
  MasterBrandDuncanHines = "Duncan Hines  ",
  MasterBrandGeneralMills = "General Mills ",
  MasterBrandGerber = "Gerber",
  MasterBrandKelloggS = "Kellogg’s ",
  MasterBrandKraft = "Kraft",
  MasterBrandMaruchan = "Maruchan ",
  MasterBrandNestle = "Nestle ",
  MasterBrandReynolds = "Reynolds",
  MasterBrandRiceARoni = "Rice A Roni",
  MasterBrandYoplait = "Yoplait ",
  Materne = "Materne",
  Mexicana = "Mexicana",
  MrsCubbisonS = "Mrs. Cubbison's",
  Nabisco = "Nabisco",
  NatureSOwn = "Nature's Own",
  Nestle = "Nestle",
  Nestlé = "Nestlé",
  Nissin = "Nissin",
  Pearls = "Pearls",
  PepperidgeFarm = "Pepperidge Farm",
  Pillsbury = "Pillsbury",
  Post = "Post",
  PurpleKelloggS = "Kellogg's ",
  Ragu = "Ragu",
  Reynolds = "Reynolds ",
  RiceARoni = "Rice A Roni ",
  ScJohnson = "Sc Johnson",
  SlowSimmered = "Slow Simmered",
  SnowS = "Snow's",
  Stonyfield = "Stonyfield",
  Test = "test",
  TexasPete = "Texas Pete",
  The9Lives = "9Lives",
  Tropicana = "Tropicana",
  Vicks = "Vicks",
  Vintage = "Vintage",
  Yoplait = "Yoplait",
}

export enum Plu {
  Asd = "asd",
  Decaf = "Decaf",
  Empty = "",
  Frosting = "Frosting",
  Refined = "Refined",
  Sdf = "sdf",
}

export enum QualityCF {
  BottomRoundRoast = "Bottom Round Roast",
  Breast = "Breast",
  Empty = "",
  Fillet = "Fillet",
  RumpRoast = "Rump Roast",
  Sdf = "sdf",
  Whole = "Whole",
  Wings = "Wings",
}

export enum TypeOfMeat {
  Beef = "Beef",
  BonelessChicken = "Boneless Chicken",
  Chicken = "Chicken",
  Empty = "",
  Pork = "Pork",
  Salmon = "Salmon",
  Tilapia = "Tilapia",
}
