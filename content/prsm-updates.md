# PRSM Backstage posts

How to add a post (newest at the top, below this guide):

  ## YYYY-MM-DD | Post title
  Author: owlhoot            (owlhoot or mike-a; senders live in lib/prsm-authors.ts)
  Tags: Studio, Audio        (comma separated: Studio, Gameplay, Audio, Music, Art, Tech, Fixes)
  Image: /updates/file.png   (optional; put the file in public/updates/)
  Image-Alt: What the image shows   (optional, recommended with Image)
  Visibility: internal       (optional; internal posts are not shown on the site)

  Write the post in plain language for players. Leave a blank line between
  paragraphs. **Bold text** and [links](https://example.com) are supported.

Everything above the first "## " line is ignored by the site.

## 2026-11-15 | First-timers are first-timers again
Author: owlhoot
Tags: Fixes

Small bug, big vibe killer: brand-new guests were getting tagged as **Returning visitors** the second they stepped inside. Awkward!

That's fixed. New faces now stay **New visitors** for their whole first night, and the club only remembers them for next time if they leave reasonably happy. You have to earn that "welcome back."

## 2026-11-15 | A little spring cleaning
Author: owlhoot
Tags: Tech

We swept out four old scripts left over from our earliest prototypes. Nothing changes on the dancefloor. It just keeps the project tidy so we can build faster.

## 2026-11-15 | Phase 2 is live
Author: owlhoot
Tags: Studio

Owlhoot Games is officially an LLC, and Nightclubs: PRSM has entered **Phase 2: Alpha Testing**.

Work-in-progress is being shared on our [Discord](https://discord.gg/GfQScUK9Dm) and Facebook, with Patreon coming soon. From now on, every new update for PRSM lands right here, straight from the booth.

## 2026-11-14 | Meet your guests: the Guest Info panel
Author: owlhoot
Tags: Gameplay

Ever wondered who's actually on your dancefloor? Click any guest to open their **Guest Info panel**: their name, whether they're a New visitor, Returning visitor or Regular, how much they've spent, their tip rate, their happiness and what's been on their mind.

It stays out of the way during normal play. Close it with the close button, Escape, or a click anywhere else, and click another guest to switch to them.

## 2026-11-14 | Sneak peek: Gift Drink, Mic Boost and Kick
Author: owlhoot
Tags: Gameplay

Keen eyes will spot three new buttons on the Guest Info panel: **Gift Drink**, **Mic Boost** and **Kick**. They're on the panel now but not switched on yet. Consider this a teaser for how you'll be able to treat (or not treat) your crowd.

## 2026-11-14 | Your crowd remembers you: Regulars are here
Author: owlhoot
Tags: Gameplay

Run a great night and guests will want to come back. When a returning guest makes it inside again, they become a **Regular**, and you can have up to 20 at a time.

Regulars are loyal. It takes several miserable nights before they give up on you. Visitors who leave miserable, though, are forgotten. The club keeps up to 50 visitors in its memory, so every night counts.

## 2026-11-14 | Every guest has a name now
Author: owlhoot
Tags: Gameplay

No more anonymous partygoers. Every guest now walks in with a first and last name, and returning guests keep theirs, so you'll start recognizing your favorite faces night after night.

## 2026-11-14 | Tips are in the jar
Author: owlhoot
Tags: Gameplay

Every purchase can now earn you a tip. Each guest has their own tip rate: it goes up when they leave happy and drops when they leave unhappy.

Regulars tip more, and happier guests tip more. Treat people right and your tip jar shows it.

## 2026-11-14 | What's on your guests' minds?
Author: owlhoot
Tags: Gameplay

Guests now have **thoughts**! They react to what happens to them: arriving, getting welcomed back, becoming a Regular, waiting too long in line, buying something, feeling great or feeling awful, and heading home.

You'll find their thoughts in the Guest Info panel, and every so often one pops up in a bubble above their head. Listen to your crowd.

## 2026-11-14 | Kicked out? They'll remember that
Author: owlhoot
Tags: Gameplay

Showing someone the door now comes with a cost: a kicked-out guest loses a big chunk of happiness on the way out. That can decide whether the club remembers them at all, so think twice before you call security.

## 2026-11-14 | Open tabs for everyone
Author: owlhoot
Tags: Gameplay

We've gone arcade style: guests no longer carry a limited wallet. They can always afford whatever the club sells, so your focus stays on keeping them happy and the drinks flowing.

## 2026-11-14 | Smoother moves on the club floor
Author: owlhoot
Tags: Gameplay

Guests and you now move tile to tile across the club floor, stepping cleanly from the center of one tile to the next in straight lines. Pathfinding is smarter too, so everyone finds their way around walls and furniture without the awkward shuffling.

## 2026-11-14 | Laying the floor plan for furniture
Author: owlhoot
Tags: Gameplay, Tech

We've laid the groundwork for placeable furniture. Pieces like the bar and the DJ booth can now mark their tiles as open, staff-only (behind the bar or the decks) or blocked.

Guests politely walk around staff-only areas, while you can head right through. This sets the stage for designing your own club layout.

## 2026-11-14 | No more moonwalking at the door
Author: owlhoot
Tags: Fixes

Some guests were turning the wrong way as they came in and slipping back out through the door before settling in. Smooth moves, wrong direction. Fixed: everyone now walks straight in and joins the party.

## 2026-11-14 | Building our own toolbox
Author: owlhoot
Tags: Tech

Behind the scenes, we've built a shared in-house code library for our core systems: grid movement, pathfinding, click handling and more. It keeps PRSM solid and gives future Owlhoot projects a head start.

## 2026-11-14 | Robots checking our homework
Author: owlhoot
Tags: Tech

We added automated tests for pathfinding and tile layouts. Every time we change something, they make sure guests still find their way around the club, so fewer bugs make it onto your dancefloor.

## 2026-11-12 | Happy guests, happy club
Author: owlhoot
Tags: Gameplay

Guests now have **happiness**! Everyone arrives with a starting mood that gets better the more luxurious your club is.

Waiting in line slowly wears it down, while booths and drinks lift it back up. Keep the line moving and the vibes high.

## 2026-11-12 | Good vibes sell drinks
Author: owlhoot
Tags: Gameplay

Happier guests are now much more likely to buy drinks. A great mood is good for business, so keep your crowd smiling and the bar stays busy.

## 2026-11-12 | Word of mouth is real
Author: owlhoot
Tags: Gameplay

Happy guests now spread the word. When they leave in a good mood, your club's popularity goes up, which means a well-run night brings even more people through the door next time.

## 2026-11-12 | The road to our first playable slice
Author: owlhoot
Tags: Studio

We've mapped out a full plan for the first playable slice of Nightclubs: PRSM, with a step-by-step build order. It's our checklist for getting a real, playable night at the club into your hands.

## 2026-11-12 | Backups locked in
Author: owlhoot
Tags: Studio, Tech

Not glamorous, but important: the project is now fully backed up and set up in a proper code repository. Your future nightclub is safe and sound.
Author: owlhoot
Tags: Studio

Owlhoot Games is officially an LLC, and Nightclubs: PRSM has entered **Phase 2: Alpha Testing**.

Work-in-progress is being shared on our [Discord](https://discord.gg/GfQScUK9Dm) and Facebook, with Patreon coming soon. From now on, every new update for PRSM lands right here, straight from the booth.
