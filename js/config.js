/* =============================================================
   WEDDING SITE CONFIG  —  EDIT EVERYTHING HERE
   -------------------------------------------------------------
   This is the single source of truth for the whole site.
   You do NOT need to touch index.html to update content.
   After editing, just re-upload this file to your S3 bucket.
   ============================================================= */

const WEDDING = {
  /* ---- Couple ---- */
  groomName: "Arjun",
  brideName: "Priya",
  // Shown as the small line above the names in the hero (optional)
  intro: "Together with their families, invite you to celebrate",

  /* ---- Events ----
     There are TWO events: the Wedding and the Reception.
     Each has its own date, time, venue, and map. The site builds a
     card, a "Add to Google Calendar" button, and a Maps button for each.

     `dateISO`  MUST be a valid ISO date-time (powers the calendar button,
                and the first event also powers the countdown).
                Format: YYYY-MM-DDTHH:MM:SS  (24-hour time)
     `durationHours` = how long it runs (sets the calendar end time).

     The COUNTDOWN on the page counts down to events[0] (the first one),
     so keep the soonest / main event first. */
  events: [
    {
      label: "The Wedding",
      dateISO: "2026-12-15T10:00:00",
      durationHours: 3,
      displayDate: "Tuesday, December 15, 2026",
      displayTime: "10:00 AM onwards",
      venueName: "Sri Kalyana Mandapam",
      venueAddress: "12 Temple Road, Bengaluru, Karnataka 560004",
      // Paste the full Google Maps share link to this venue here.
      mapsLink: "https://www.google.com/maps/search/?api=1&query=Sri+Kalyana+Mandapam+Bengaluru",
    },
    {
      label: "The Reception",
      dateISO: "2026-12-16T19:00:00",
      durationHours: 4,
      displayDate: "Wednesday, December 16, 2026",
      displayTime: "7:00 PM onwards",
      venueName: "The Leela Palace",
      venueAddress: "23 Old Airport Road, Bengaluru, Karnataka 560008",
      // Paste the full Google Maps share link to this venue here.
      mapsLink: "https://www.google.com/maps/search/?api=1&query=The+Leela+Palace+Bengaluru",
    },
  ],

  /* ---- Our Story ---- */
  storyHeading: "Our Story",
  story:
    "From a chance meeting on a rainy afternoon to a lifetime of shared dreams — " +
    "our journey has been nothing short of magical. We can't wait to begin the " +
    "next chapter surrounded by the people we love most. Join us as we say " +
    "“I do.”",

  /* ---- Gallery ----
     Drop your images into the /assets folder and list the paths here.
     Any number of images works; the grid adapts automatically. */
  gallery: [
    "assets/gallery-1.jpeg",
    "assets/gallery-2.jpeg",
    "assets/gallery-3.jpeg",
    "assets/gallery-4.jpeg",
    "assets/gallery-5.jpeg",
    "assets/gallery-6.jpeg",
  ],

  /* ---- Hero background image ---- */
  heroImage: "assets/hero.jpeg",

  /* ---- Footer ---- */
  hashtag: "#ArjunWedsPriya",
  footerNote: "With love and gratitude, we look forward to celebrating with you.",
};
