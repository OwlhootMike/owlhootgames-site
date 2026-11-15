# NightSpace posts (Nightclubs: PRSM updates)

How to add a post (newest at the top, below this guide):

  ## YYYY-MM-DD | Post title
  Author: owlhoot            (owlhoot, mike, daisy, clara, sven, brtny; profiles live in lib/prsm-authors.ts)
  Tags: Studio, Audio        (comma separated: Studio, Gameplay, Audio, Music, Art, Tech, Fixes)
  Image: /updates/file.png   (optional; put the file in public/updates/)
  Image-Alt: What the image shows   (optional, recommended with Image)
  Visibility: internal       (optional; internal posts are not shown on the site)

  Write the post in plain language for players. Leave a blank line between
  paragraphs. **Bold text** and [links](https://example.com) are supported.

Voices:
  owlhoot  Owlhoot Games (@owlhootgames): official studio account. Professional, clear.
  mike     Mike (@MikePRSM): runs PRSM. Hyped, all caps moments, loves his club.
  daisy    Daisy (@DZ): top DJ in the scene. Electronic and synthwave, cool and confident.
  clara    Clara (@ClaraBelleSwings): electroswing queen. Luxurious, warm, calls everyone "darling".
  sven     Sven (@NewMillenniaClub): Norwegian owner of The New Millennia. Edgy, trash talks PRSM, invites players to his club.
  brtny    BRTNY (@BRTNYHere): mirrors Sven, larger than life, LOVES attention.

Every post must still explain the real change clearly, even in character.

Everything above the first "## " line is ignored by the site.

## 2026-11-15 | First-timers are first-timers again
Author: mike
Tags: Fixes

OKAY so we caught a sneaky one. Brand-new guests were getting labeled **Returning visitors** the SECOND they walked through our doors. Love the enthusiasm, but no!

FIXED! New faces now stay **New visitors** for their entire first night. And they only get remembered as returning if they leave reasonably happy. You want that "welcome back"? You EARN it. Let's GO!

## 2026-11-15 | Housekeeping
Author: owlhoot
Tags: Tech

We removed four unused scripts left over from early prototypes. There are no gameplay changes; this keeps the project lean and easier to build on.

## 2026-11-15 | Phase 2 is live
Author: owlhoot
Tags: Studio

Owlhoot Games is officially an LLC, and Nightclubs: PRSM has entered **Phase 2: Alpha Testing**.

Work-in-progress is being shared on our [Discord](https://discord.gg/GfQScUK9Dm) and Facebook, with Patreon coming soon. All PRSM development updates will now be posted here on NightSpace.

## 2026-11-14 | New: the Guest Info panel
Author: owlhoot
Tags: Gameplay

Click any guest to open their **Guest Info panel**. It shows their name, status (New visitor, Returning visitor or Regular), how much they've spent, their tip rate, their happiness and their recent thoughts.

The panel stays hidden during normal play. Close it with its close button, the Escape key, or a click anywhere else, and click another guest to switch to them.

## 2026-11-14 | Mic Boost?? Say less
Author: brtny
Tags: Gameplay

Babes. BABES. The new Guest Info panel has three buttons: **Gift Drink**, **Mic Boost** and **Kick**. They're on the panel but not switched on yet, which is honestly so rude because I was BORN for a Mic Boost.

Gift me a drink and hand me the mic and watch the whole room turn around. Just saying. xoxo

## 2026-11-14 | Regulars, darlings
Author: clara
Tags: Gameplay

Darlings, a good evening is never forgotten. Guests who have a lovely night may now return, and a returning guest who makes it inside again becomes a **Regular**. A club may keep up to 20 of them at once.

Regulars are wonderfully loyal; it takes several miserable nights before they drift away. Those who leave miserable, however, are simply forgotten. The club remembers up to 50 visitors, so treat each one like champagne.

## 2026-11-14 | Names. Wow.
Author: sven
Tags: Gameplay

PRSM gave every guest a first and last name now, and returning guests keep theirs. Very impressive. Truly groundbreaking.

At The New Millennia, everybody already knows our name. Come by sometime. We have better music and nobody has to introduce themselves twice.

## 2026-11-14 | TIPS ARE LIVE
Author: mike
Tags: Gameplay

Every purchase can now earn a TIP! Each guest has their own tip rate. It goes UP when they leave happy and DOWN when they leave unhappy.

Regulars tip more. Happier guests tip more. You see where I'm going with this? Make people happy and watch that tip jar FILL UP!

## 2026-11-14 | Reading the room
Author: daisy
Tags: Gameplay

Any DJ worth their decks knows the real set happens in the crowd's head. Now you get to see it too: guests have **thoughts**.

They react to everything: arriving, getting welcomed back, becoming a Regular, waiting too long in line, buying something, feeling amazing or feeling awful, heading home. Check them in the Guest Info panel, and catch the odd bubble floating above their heads. Read the room, then drop the beat.

## 2026-11-14 | Got kicked out of PRSM?
Author: sven
Tags: Gameplay

Fun fact: when PRSM kicks a guest out now, that guest loses a big chunk of happiness on the way out, and it can decide whether the club even remembers them.

Kicked out and feeling forgotten? Uff. The New Millennia doors are open. We don't do drama, we do style. Ha det.

## 2026-11-14 | Open tab, babe? Never heard of a budget
Author: brtny
Tags: Gameplay

Guests no longer carry a limited wallet. Arcade style, babe: they can always afford whatever the club sells.

Which means the only thing between a guest and the bar is how good the vibes are. And the vibes are always better when I'm in the room. Obviously.

## 2026-11-14 | Smooth moves only
Author: daisy
Tags: Gameplay

Movement on the floor just got a remix. Guests and the player now move tile to tile, stepping cleanly from the center of one tile to the next in straight lines.

Pathfinding is smarter too, so nobody bumps into walls or furniture on the way to the dancefloor. Clean transitions. That's how I like my mixes.

## 2026-11-14 | Groundwork for placeable furniture
Author: owlhoot
Tags: Gameplay, Tech

We've started the foundation for placeable furniture with tile layouts. Objects such as the bar and the DJ booth can mark their tiles as open, staff-only (behind the bar or the decks) or blocked.

Guests walk around staff-only areas, while the player can walk through them. This prepares the way for designing your own club layout.

## 2026-11-14 | They were leaving already?
Author: sven
Tags: Fixes

Some PRSM guests were turning around at the entrance and walking right back out the door before settling in. Smart guests, I thought.

PRSM "fixed" it, so now they walk straight in. Shame. My door is still open for anyone who wants to turn around. Skål.

## 2026-11-14 | Building a shared code library
Author: owlhoot
Tags: Tech

We've added an in-house code library for core systems such as grid movement, pathfinding and click handling. It keeps PRSM consistent and lets future Owlhoot projects reuse the same foundations.

## 2026-11-14 | Automated testing
Author: owlhoot
Tags: Tech

We've added automated tests for the pathfinding and tile-layout systems. They run whenever we make changes, helping us catch bugs before they reach players.

## 2026-11-12 | Happiness is the finest accessory
Author: clara
Tags: Gameplay

Guests now arrive with **happiness**, darlings, and the more luxurious your club, the brighter their mood at the door.

Waiting in line slowly wears it down, while a plush booth and a lovely drink lift it right back up. Keep them comfortable and they'll swing all night.

## 2026-11-12 | Drop the beat, fill the bar
Author: daisy
Tags: Gameplay

Happier guests are now way more likely to buy drinks. I've seen it from the booth a thousand times: when the drop hits right, the bar gets busy. Keep the energy up and the drinks flow.

## 2026-11-12 | Everybody's talking
Author: brtny
Tags: Gameplay

Happy guests now raise the club's popularity when they leave. Word of mouth, babes! A well-run night brings even more people through the door.

And when everybody's talking about a club, they're usually talking about who was there. Me. They're talking about me.

## 2026-11-12 | Plan for the first playable slice
Author: owlhoot
Tags: Studio

We've written a full project plan for the first playable slice of Nightclubs: PRSM, including a step-by-step build order. This plan guides our work toward a playable night at the club.

## 2026-11-12 | Backups? How cute.
Author: sven
Tags: Studio, Tech

PRSM finally set up project backups and a proper code repository. Congratulations, I suppose.

The New Millennia has never needed a backup plan. Then again, we've never needed a comeback either.
