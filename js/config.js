/* =============================================================
   WEDDING SITE CONFIG  —  EDIT EVERYTHING HERE
   -------------------------------------------------------------
   This is the single source of truth for the whole site.
   You do NOT need to touch index.html to update content.
   After editing, just re-upload this file to your S3 bucket.
   ============================================================= */

const WEDDING = {
  /* ---- Couple ---- */
  groomName: "Merwin Tamilselven",
  brideName: "Sheela Angle",
  // Shown as the small line above the names in the hero (optional)
  intro: "Together with our families, invite you to celebrate",

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
      dateISO: "2026-06-25T16:00:00",
      durationHours: 3,
      displayDate: "Thursday, June 25, 2026",
      displayTime: "04:00 PM onwards",
      venueName: "APostolic Christian Assembly",
      venueAddress: "No.294, M.H Road, Vadakarai, Chennai-52",
      // Paste the full Google Maps share link to this venue here.
      mapsLink: "https://maps.app.goo.gl/1AMbsbLHCphaW2wK9",
    },
    {
      label: "The Reception",
      dateISO: "2026-06-25T18:30:00",
      durationHours: 4,
      displayDate: "Thursday, June 25, 2026",
      displayTime: "06:30 PM onwards",
      venueName: "K.T.S Mahal",
      venueAddress: "Redhills (Near Galaxy Mall)",
      // Paste the full Google Maps share link to this venue here.
      mapsLink: "https://maps.app.goo.gl/ySP5RyvaS9robfbu6",
    },
  ],

  /* ---- Our Story ---- */
  storyHeading: "Our Story",
  story:
    "From a chance meeting on a beautiful day to a lifetime of shared dreams — " +
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
  hashtag: "#MarwinwedsSheela",
  footerNote: "With love and gratitude, we look forward to celebrating with you.",
};
