# Wasser Hotel

A hotel website for Wasser Hotel: black & gold luxury theme, built with React, TypeScript, Vite, Tailwind CSS v4, react-router-dom, and lucide-react icons.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/components/` - Header, Hero, About, Amenities, Rooms, Contact, Footer
- `src/pages/` - HomePage, RoomDetailPage
- `src/data/rooms.ts` - room categories, prices, descriptions, and images
- `src/index.css` - Tailwind theme tokens (colors, fonts) under `@theme`

Each room card on the homepage links to `/rooms/:id`, a dedicated detail page with a larger gallery, full description, and a WhatsApp booking link.

## Images

Real property photos live in `public/images/` and are referenced by absolute path (e.g. `/images/logo.jpeg`):

- `logo.jpeg`: used in `Header.tsx` and `Footer.tsx`
- `img1.jpeg`, `img2.jpeg`, `img3.jpeg`: lobby/interior shots, used in the `Hero.tsx` carousel and `About.tsx`
- `img4.jpeg`: exterior building shot, used as a hero slide. **Its signage reads "Walshek Hotel", not Wasser Hotel; replace with a real exterior photo before launch.**

Room photos in `src/data/rooms.ts` are still Unsplash stock placeholders (no real room photos were provided); swap those in when available.

## Things to customize before launch

- Replace `public/images/img4.jpeg` with a real Wasser Hotel exterior photo (see above).
- Swap the placeholder room images in `src/data/rooms.ts` for real photos.
- Update the phone number, email, and address in `Header.tsx`, `Contact.tsx`, `Footer.tsx`, and the WhatsApp link in `RoomCard.tsx` / `RoomDetailPage.tsx`.
- Wire the contact form in `Contact.tsx` to an actual email/booking backend (it currently only prevents default submission).
- Replace social links in `Footer.tsx` with real profile URLs.
