WOLVES PACK STUDIOS WEBSITE
===========================

This is a plain HTML/CSS/JS website. No framework and no build step are required.

FILES
-----
index.html              Home page
real-estate.html        Real estate service page
weddings.html           Weddings service page
cinematography.html     Cinematography service page
contact.html            Contact page
styles.css              All styling
script.js               Mobile menu + small animations

QUICK PREVIEW IN VS CODE
------------------------
1. Open the wolves-pack-studios-site folder in VS Code.
2. Install the "Live Server" extension (optional but recommended).
3. Right-click index.html -> Open with Live Server.
4. Click around the navigation to test all pages.

EDITING YOUR YOUTUBE PORTFOLIO
------------------------------
Search the HTML files for:
    EDIT: Replace this URL with your YouTube video

Then replace the example https://www.youtube.com/ URL with your real video URL.
You can also change the project title and description in the same card.

ADDING A NEW PORTFOLIO CARD
---------------------------
Copy an entire <article class="portfolio-card"> ... </article> block and paste it
under the other portfolio cards.

ADDING A REAL YOUTUBE EMBED
---------------------------
You can replace a placeholder video block with an iframe. Example:

<iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Your video title"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>

Then put that iframe inside the .video-embed area, or create a 16:9 wrapper around it.

CONTACT DETAILS
---------------
Search for:
    EDIT these values

Then change the email and social links to your real ones.

HOMEPAGE PHOTO / HERO IMAGE
---------------------------
The current design uses abstract placeholders so the site works immediately.
You can later replace .about-photo and .hero-card in the HTML/CSS with your own stills,
portraits or a showreel background.

CONTACT FORM
------------
The form currently prevents a real send and only shows a demo message. To make it send
messages on a hosted website, connect it to a service such as Formspree or Netlify Forms.

DEPLOYMENT
----------
Because this is static HTML, CSS and JS, it can be hosted on free static hosting such as
Cloudflare Pages or GitHub Pages, as well as many paid hosts.
