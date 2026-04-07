import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js";

const app = new Hono();

app.use("*", logger(console.log));

app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

// ── Seed data ────────────────────────────────────────────────────────────────
const TOPS_IMAGES = [
  "https://images.unsplash.com/flagged/photo-1580154214079-3e748e87946f?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1760287363713-a864ca9b1b1f?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1765337210302-cb6271ae6f9f?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=338&h=450&fit=crop",
];

const OUTERWEAR_IMAGES = [
  "https://images.unsplash.com/photo-1760533091973-1262bf57d244?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1736630070847-4d6b14e67e35?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1692180142575-c31fcd106b5b?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1548624313-0396d25c5941?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=338&h=450&fit=crop",
];

const ACCESSORIES_IMAGES = [
  "https://images.unsplash.com/photo-1774653273863-a689ee748eee?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1662434921518-e78ecdc3eeaf?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1586495777744-4e6232bf2919?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1624028547706-dca3e36a3729?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1509941943102-10c232535736?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=338&h=450&fit=crop",
];

const SHOES_IMAGES = [
  "https://images.unsplash.com/photo-1650320079970-b4ee8f0dae33?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1773021370310-7fe0b80838ec?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1769038946405-c1f89366a8de?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=338&h=450&fit=crop",
];

const BAGS_IMAGES = [
  "https://images.unsplash.com/photo-1634419446253-a1da206cf824?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1758542988969-39a10168b2ce?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1643564031178-cf4fa705d0a4?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=338&h=450&fit=crop",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=338&h=450&fit=crop",
];

function pick<T>(arr: T[], i: number): T {
  return arr[i % arr.length];
}

function generateProducts() {
  const rows: any[] = [];

  // ── TOPS (50개) ────────────────────────────────────────────────────────────
  const topsBrands = ["POLO RALPH LAUREN", "TOMMY HILFIGER", "LACOSTE", "BURBERRY", "STONE ISLAND", "GUCCI", "PRADA", "MONCLER"];
  const topsNames = [
    "Classic Pique Polo Shirt", "Slim Fit Cotton T-Shirt", "Striped Breton Tee",
    "Logo Embroidered Sweatshirt", "Merino Wool Crew-Neck", "Oxford Button-Down Shirt",
    "Linen Blend Popover Shirt", "Essential Graphic Tee", "Ribbed Tank Top",
    "Washed Denim Shirt", "Oversized Vintage Tee", "Signature Stripe Rugby Shirt",
    "Thermal Henley", "Seersucker Camp Collar Shirt", "Pigment Dyed Crewneck",
    "Micro Check Flannel Shirt", "Cropped French Terry Hoodie", "Cotton Voile Smock Shirt",
    "Sport Mesh Polo", "Bold Logo Crewneck Sweatshirt",
  ];
  for (let i = 0; i < 50; i++) {
    const oneprice = [89000, 119000, 149000, 189000, 229000, 279000, 329000, 389000, 429000, 529000][i % 10];
    const discountRate = [5, 10, 15, 20, 25, 30][i % 6];
    const prd_price = Math.round(oneprice * (1 - discountRate / 100) / 100) * 100;
    rows.push({
      brand: topsBrands[i % topsBrands.length],
      product_name: topsNames[i % topsNames.length] + (i >= topsNames.length ? ` ${Math.floor(i / topsNames.length) + 1}` : ""),
      img: pick(TOPS_IMAGES, i),
      discount: discountRate,
      prd_price,
      oneprice,
      score: parseFloat((3.5 + Math.random() * 1.4).toFixed(1)),
      reviewer_count: Math.floor(20 + Math.random() * 480),
      category: "Tops",
    });
  }

  // ── OUTERWEAR (50개) ───────────────────────────────────────────────────────
  const outerBrands = ["MONCLER", "STONE ISLAND", "BURBERRY", "CANADA GOOSE", "PRADA", "GUCCI", "POLO RALPH LAUREN", "ARC'TERYX"];
  const outerNames = [
    "Down-Filled Puffer Jacket", "Classic Trench Coat", "Wool Blend Overcoat",
    "Quilted Shell Jacket", "Waxed Cotton Field Jacket", "Shearling-Lined Bomber",
    "Technical Gore-Tex Anorak", "Double-Breasted Peacoat", "Fleece Zip-Up Jacket",
    "Leather Biker Jacket", "Padded Vest Gilet", "Tweed Blazer Coat",
    "Ripstop Windbreaker", "Reversible Sherpa Jacket", "Stadium Length Puffer",
    "Melton Wool Duffle Coat", "Performance Shell Parka", "Vintage Wash Denim Jacket",
    "Satin Bomber Jacket", "Technical Mountain Jacket",
  ];
  for (let i = 0; i < 50; i++) {
    const oneprice = [289000, 389000, 489000, 589000, 689000, 889000, 1089000, 1389000, 1589000, 1989000][i % 10];
    const discountRate = [5, 10, 15, 20, 25][i % 5];
    const prd_price = Math.round(oneprice * (1 - discountRate / 100) / 1000) * 1000;
    rows.push({
      brand: outerBrands[i % outerBrands.length],
      product_name: outerNames[i % outerNames.length] + (i >= outerNames.length ? ` ${Math.floor(i / outerNames.length) + 1}` : ""),
      img: pick(OUTERWEAR_IMAGES, i),
      discount: discountRate,
      prd_price,
      oneprice,
      score: parseFloat((3.6 + Math.random() * 1.3).toFixed(1)),
      reviewer_count: Math.floor(15 + Math.random() * 350),
      category: "Outerwear",
    });
  }

  // ── ACCESSORIES (50개) ────────────────────────────────────────────────────
  const accBrands = ["GUCCI", "PRADA", "BURBERRY", "TOMMY HILFIGER", "LACOSTE", "STONE ISLAND", "POLO RALPH LAUREN", "MONCLER"];
  const accNames = [
    "Wool Cashmere Scarf", "Signature Leather Belt", "Gold-Tone Chain Bracelet",
    "Classic Aviator Sunglasses", "Slim Logo Wool Tie", "Enamel Pin Brooch",
    "Leather Card Holder Wallet", "Silk Pocket Square", "Logo Embossed Cap",
    "Knit Beanie Hat", "Stainless Watch Strap", "Pearl Drop Earrings",
    "GG Monogram Wallet", "Tortoiseshell Acetate Glasses", "Woven Straw Hat",
    "Metallic Hair Clip Set", "Canvas Baseball Cap", "Suede Leather Gloves",
    "Reversible Leather Belt", "Charm-Embellished Keyring",
  ];
  for (let i = 0; i < 50; i++) {
    const oneprice = [39000, 59000, 79000, 99000, 139000, 179000, 219000, 279000, 349000, 429000][i % 10];
    const discountRate = [0, 5, 10, 15, 20, 30][i % 6];
    const prd_price = discountRate === 0 ? oneprice : Math.round(oneprice * (1 - discountRate / 100) / 100) * 100;
    rows.push({
      brand: accBrands[i % accBrands.length],
      product_name: accNames[i % accNames.length] + (i >= accNames.length ? ` ${Math.floor(i / accNames.length) + 1}` : ""),
      img: pick(ACCESSORIES_IMAGES, i),
      discount: discountRate,
      prd_price,
      oneprice,
      score: parseFloat((3.4 + Math.random() * 1.5).toFixed(1)),
      reviewer_count: Math.floor(10 + Math.random() * 600),
      category: "Accessories",
    });
  }

  // ── SHOES (50개) ──────────────────────────────────────────────────────────
  const shoesBrands = ["GUCCI", "PRADA", "BURBERRY", "POLO RALPH LAUREN", "TOMMY HILFIGER", "LACOSTE", "STONE ISLAND", "MONCLER"];
  const shoesNames = [
    "Leather Derby Shoes", "Classic White Sneakers", "Suede Chelsea Boots",
    "Lace-Up Running Trainers", "Woven Espadrille Loafers", "Patent Leather Pumps",
    "High-Top Canvas Sneakers", "Moccasin Driving Shoes", "Ankle Strap Sandals",
    "Velvet Slip-On Loafers", "Trail Running Shoes", "Platform Leather Boots",
    "Mesh Sports Sneakers", "Croc-Embossed Mules", "Brogue Wingtip Oxfords",
    "Nubuck Hiking Boots", "Metallic Leather Flats", "Rope-Sole Wedge Sandals",
    "Knit Sock Sneakers", "Rubber Sole Monk Strap",
  ];
  for (let i = 0; i < 50; i++) {
    const oneprice = [119000, 159000, 199000, 249000, 299000, 369000, 449000, 549000, 669000, 789000][i % 10];
    const discountRate = [0, 5, 10, 15, 20, 25, 30][i % 7];
    const prd_price = discountRate === 0 ? oneprice : Math.round(oneprice * (1 - discountRate / 100) / 1000) * 1000;
    rows.push({
      brand: shoesBrands[i % shoesBrands.length],
      product_name: shoesNames[i % shoesNames.length] + (i >= shoesNames.length ? ` ${Math.floor(i / shoesNames.length) + 1}` : ""),
      img: pick(SHOES_IMAGES, i),
      discount: discountRate,
      prd_price,
      oneprice,
      score: parseFloat((3.5 + Math.random() * 1.4).toFixed(1)),
      reviewer_count: Math.floor(18 + Math.random() * 520),
      category: "Shoes",
    });
  }

  // ── BAGS (50개) ───────────────────────────────────────────────────────────
  const bagsBrands = ["GUCCI", "PRADA", "BURBERRY", "MONCLER", "STONE ISLAND", "POLO RALPH LAUREN", "TOMMY HILFIGER", "LACOSTE"];
  const bagsNames = [
    "GG Canvas Tote Bag", "Saffiano Leather Crossbody", "Nova Check Bowling Bag",
    "Mini Quilted Shoulder Bag", "Nylon Zip Backpack", "Woven Raffia Bucket Bag",
    "Logo-Strap Messenger Bag", "Chain-Detail Evening Clutch", "Canvas Weekend Duffel",
    "Leather Doctor Bag", "Velvet Drawstring Pouch", "Croc-Effect Mini Bag",
    "Canvas Shopper Tote", "Suede Fringe Hobo Bag", "Patent Leather Top-Handle",
    "Tech-Fabric Laptop Backpack", "Washed Denim Tote", "Braided Handle Bucket Bag",
    "Gold-Clasp Envelope Clutch", "Neoprene Sport Backpack",
  ];
  for (let i = 0; i < 50; i++) {
    const oneprice = [189000, 289000, 389000, 489000, 589000, 789000, 989000, 1289000, 1589000, 1989000][i % 10];
    const discountRate = [0, 5, 10, 15, 20][i % 5];
    const prd_price = discountRate === 0 ? oneprice : Math.round(oneprice * (1 - discountRate / 100) / 1000) * 1000;
    rows.push({
      brand: bagsBrands[i % bagsBrands.length],
      product_name: bagsNames[i % bagsNames.length] + (i >= bagsNames.length ? ` ${Math.floor(i / bagsNames.length) + 1}` : ""),
      img: pick(BAGS_IMAGES, i),
      discount: discountRate,
      prd_price,
      oneprice,
      score: parseFloat((3.6 + Math.random() * 1.3).toFixed(1)),
      reviewer_count: Math.floor(12 + Math.random() * 450),
      category: "Bags",
    });
  }

  return rows;
}

// ── Health check ─────────────────────────────────────────────────────────────
app.get("/make-server-5793bf42/health", (c) => {
  return c.json({ status: "ok" });
});

// ── POST /make-server-5793bf42/seed ──────────────────────────────────────────
// Tops, Outerwear, Accessories, Shoes, Bags 더미데이터 삽입 (Bottoms 제외)
app.post("/make-server-5793bf42/seed", async (c) => {
  try {
    // 기존 시드 데이터 삭제 (Bottoms 제외)
    const categoriesToSeed = ["Tops", "Outerwear", "Accessories", "Shoes", "Bags"];
    const { error: delErr } = await supabase
      .from("product")
      .delete()
      .in("category", categoriesToSeed);

    if (delErr) {
      console.log("Delete error:", JSON.stringify(delErr));
      return c.json({ error: `Delete error: ${delErr.message}` }, 500);
    }

    const rows = generateProducts();
    console.log(`[seed] Inserting ${rows.length} products...`);

    // 50개씩 나눠서 삽입
    const chunkSize = 50;
    let inserted = 0;
    for (let i = 0; i < rows.length; i += chunkSize) {
      const chunk = rows.slice(i, i + chunkSize);
      const { error: insErr } = await supabase.from("product").insert(chunk);
      if (insErr) {
        console.log("Insert error:", JSON.stringify(insErr));
        return c.json({ error: `Insert error at chunk ${i}: ${insErr.message}` }, 500);
      }
      inserted += chunk.length;
    }

    console.log(`[seed] Done. Inserted ${inserted} products.`);
    return c.json({ ok: true, inserted });
  } catch (e) {
    console.log("Seed unexpected error:", e);
    return c.json({ error: `Unexpected error: ${String(e)}` }, 500);
  }
});

// ── GET /make-server-5793bf42/products ───────────────────────────────────────
app.get("/make-server-5793bf42/products", async (c) => {
  try {
    const page      = Math.max(1, parseInt(c.req.query("page")  ?? "1"));
    const limit     = Math.max(1, parseInt(c.req.query("limit") ?? "40"));
    const sort      = c.req.query("sort")       ?? "popular";
    const category  = c.req.query("category")   ?? "";
    const priceMin  = c.req.query("price_min")  ?? "";
    const priceMax  = c.req.query("price_max")  ?? "";
    const ratingMin = c.req.query("rating_min") ?? "";

    console.log(`[products] category="${category}" page=${page} limit=${limit} sort=${sort}`);

    // ── count query ──────────────────────────────────────────────────────────
    let countQ = supabase
      .from("product")
      .select("*", { count: "exact", head: true });

    if (category)  countQ = countQ.eq("category", category);
    if (priceMin)  countQ = countQ.gte("prd_price", parseFloat(priceMin));
    if (priceMax)  countQ = countQ.lte("prd_price", parseFloat(priceMax));
    if (ratingMin) countQ = countQ.gte("score", parseFloat(ratingMin));

    const { count, error: countErr } = await countQ;

    if (countErr) {
      console.log("Count error:", JSON.stringify(countErr));
      return c.json({ error: `Count error: ${countErr.message}` }, 500);
    }

    // ── data query ───────────────────────────────────────────────────────────
    let dataQ = supabase.from("product").select("*");

    if (category)  dataQ = dataQ.eq("category", category);
    if (priceMin)  dataQ = dataQ.gte("prd_price", parseFloat(priceMin));
    if (priceMax)  dataQ = dataQ.lte("prd_price", parseFloat(priceMax));
    if (ratingMin) dataQ = dataQ.gte("score", parseFloat(ratingMin));

    switch (sort) {
      case "newest":     dataQ = dataQ.order("id",        { ascending: false }); break;
      case "price_asc":  dataQ = dataQ.order("prd_price", { ascending: true  }); break;
      case "price_desc": dataQ = dataQ.order("prd_price", { ascending: false }); break;
      case "rating":     dataQ = dataQ.order("score",     { ascending: false }); break;
      default:           dataQ = dataQ.order("id",        { ascending: true  }); break;
    }

    const offset = (page - 1) * limit;
    dataQ = dataQ.range(offset, offset + limit - 1);

    const { data, error: dataErr } = await dataQ;

    if (dataErr) {
      console.log("Data error:", JSON.stringify(dataErr));
      return c.json({ error: `Data error: ${dataErr.message}` }, 500);
    }

    console.log(`[products] returned ${data?.length ?? 0} rows, total=${count}`);

    const products = (data ?? []).map((row: any) => ({
      id:            row.id,
      brand:         row.brand          ?? "",
      name:          row.product_name   ?? "",
      img:           row.img            ?? "",
      discount:      Number(row.discount)       || 0,
      prdPrice:      Number(row.prd_price)      || 0,
      onePrice:      Number(row.oneprice)       || 0,
      score:         Number(row.score)          || 0,
      reviewercount: Number(row.reviewer_count) || 0,
      category:      row.category       ?? "",
    }));

    return c.json({ products, total: count ?? 0, page, limit });
  } catch (e) {
    console.log("Unexpected error:", e);
    return c.json({ error: `Unexpected error: ${String(e)}` }, 500);
  }
});

Deno.serve(app.fetch);