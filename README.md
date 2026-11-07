# Sign Speak (website)

Recognises common hand signs from the camera and turns them into large on-screen text and a
spoken voice. Works straight away, no teaching needed. Runs entirely in the browser (phone,
tablet or computer); nothing is uploaded.

Files: index.html (the site), signs.json (the list of signs and messages), plus manifest.json,
icon.svg, sw.js (optional: home-screen install and offline use). Keep them together.

## Put it online (the camera only works on https or localhost)
- **Netlify Drop**: app.netlify.com/drop, drag this folder in. You get a link in seconds.
- **GitHub Pages / Cloudflare Pages**: upload the files, enable Pages.
Open the link in Chrome (Android/computer) or Safari (iPhone). It asks for the camera on open.

Try on your computer first: `python -m http.server 8000` in this folder, open http://localhost:8000

## Built-in signs
**One hand (19):** open palm, closed fist, one finger up, two fingers, three fingers, four fingers,
pinky only, thumbs up, thumbs down, call sign, OK sign, love sign, L shape, horns, point down,
point sideways, thumb sideways, fingertips together*, flat hand sideways*.
**Two hands (11)**, show both to the camera: both palms open, palms together, both fists,
both thumbs up, both thumbs down, both index up, both V signs, both call signs, both love signs,
fist and open palm, crossed fists.
Hold any sign for about a second. *Starts switched off because it looks like a resting hand;
turn it on in the Signs tab.

## The signs file (signs.json)
Edit it in any text editor to change what each sign says, rename it, or switch it off:

    { "version": "2",
      "signs": [ { "key": "OPEN_PALM", "message": "I need help now.", "enabled": true } ] }

- `key` must be one of the built-in keys listed in the provided signs.json.
- Put the file next to index.html and it loads automatically. Change `version` whenever you
  edit it so the page applies the new copy.
- Or open the **Signs** tab -> **Load signs file** / **Save signs file**.

## Own signs (optional)
**Own signs** tab: add a personal sign, record it for 5 seconds. Also record NEUTRAL (relaxed hand).

## Tips
- Plain background, good light, whole hand in view, steady for a second.
- Switch off any sign that looks like the person's resting hand so it never speaks by accident.
