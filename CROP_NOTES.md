# Crop / Framing Review — Accommodation Room Carousels

Client room photos were optimized and placed **without any cropping** (founder
handles framing). The accommodation room cards use a **near-square frame**
(`.gal-track`, aspect ≈ 4:3.6) with `object-fit: cover`, so:

- **Landscape** photos lose their **left/right** edges.
- **Portrait** photos lose their **top/bottom**.
- The wider (16:9) or taller (9:16) the source, the heavier the crop.

Review the live carousels at `/accommodation` and crop the ones below so the main
subject sits safely inside the near-square frame.

## 🔴 Top priority

| Photo | Where (carousel position) | Why it needs framing |
|---|---|---|
| **`a-frame-iconic-gable-bed`** | A-Frame **Double** 3/3 · A-Frame **Triple** 3/3 · **Whole Villa** 10/11 | 9:16 tall — the iconic triangular gable window is at the **top**, the bed at the **bottom**. A near-square crop keeps the **middle** and can lose **both**. This is the signature A-frame shot — frame it deliberately (decide whether to feature the gable or the bed). |

## 🟠 Likely needs a crop

| Photo | Where | Why |
|---|---|---|
| `poolview-twin-canopy-beds` | Pool View 2/5 | 16:9 ultra-wide → the outer bed clips on each side |
| `poolview-beds-through-doors` | Pool View 3/5 | 16:9 + beds right-of-center → right-side clip |

## 🟡 Worth a look (milder)

| Photo | Where | Why |
|---|---|---|
| `poolview-bathroom-toilet` | Pool View 5/5 | 9:16 tall, toilet sits low → bottom may clip |
| `a-frame-bathroom-marble` | Whole Villa 11/11 | 9:16 tall, round mirror near top → top may clip |
| `a-frame-exterior-night-pool-01` | Whole Villa 2/11 | 9:16 tall, pool along bottom → bottom may clip |
| `a-frame-exterior-night-pool-02` | Whole Villa 3/11 | same |
| `a-frame-exterior-night-jacuzzi` | Whole Villa 4/11 | same |
| `paddyview-fourposter-beds` | Paddy View 2/6 | beds pushed right + wardrobe left → side clip |
| `paddyview-bathroom-concrete` | Paddy View 6/6 | toilet right-of-center → side clip |
| `apt-triple-seating-window` | Apt Triple 9/13 | strong wide-angle/fisheye bow (a crop won't fully fix the distortion) |

## ✅ Good as-is (no action expected)
All 6 Apartment Family shots; Paddy View canopy-beds / veranda / grounds / vanity;
Pool View veranda; A-frame day exterior, grove, both kitchens, both green bedrooms;
most Apartment Triple loft/bed/bathroom shots.

## Notes
- **Dropped at source** (not on the site): `WA0075` (bed cut off in-camera) and
  `WA0034` (no clear subject).
- **Watermark:** `poolview-pool-paddy-pro` (Pool View 1/5) carries the
  "Leisure Land Villas" brand watermark bottom-right — kept intentionally.
- **A-Frame Double & Triple rooms** currently **reuse** the three A-frame bedroom
  shots (`a-frame-bedroom-green-01`, `-green-02`, `-iconic-gable-bed`) — swap in
  dedicated double/triple photos later if you shoot them.

*Generated 2026-06-16 with the room-photo wiring.*
