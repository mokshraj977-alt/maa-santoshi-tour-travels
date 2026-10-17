# Maa Santoshi Tour & Travels

A responsive client-presentation website for Maa Santoshi Tour & Travels in Bilaspur, Chhattisgarh. Built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run the production checks with:

```bash
npm run lint
npm run build
npm run start
```

## Website features

- Responsive navigation and travel-service, sample-fleet, gallery, reviews, and contact sections.
- A client-side trip enquiry form that validates input and opens a pre-filled WhatsApp message. It does not store or submit data to a backend and does not confirm a booking.
- Click-to-call phone links, WhatsApp enquiry links, and Google Maps search/directions links.
- A separate ambulance-enquiry section. Availability and hours are not confirmed; the website is not an emergency dispatch service.

Fleet images, categories, and passenger capacities are illustrative demo content, not a verified inventory. The displayed 5.0 rating and 40 reviews are identified as supplied listing information; review quotes and an Instagram profile were not provided. Demo photos are downloaded under the [Unsplash License](https://unsplash.com/license), bundled in `public/images/`, and served directly without remote image fetches or Next.js image optimization.

## Deploy on Vercel

1. Push this project to a Git provider such as GitHub.
2. In [Vercel](https://vercel.com/new), import the repository and select the project root.
3. Keep the detected Next.js framework and default build settings (`npm run build`); no environment variables or backend services are required.
4. Select **Deploy**. Vercel will build and publish the site; subsequent pushes to the connected branch trigger deployments.

The site uses no verified Google Business Profile URL or Instagram URL; the Maps button opens a search for the supplied business name and address.
