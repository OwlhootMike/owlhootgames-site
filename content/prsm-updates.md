# NightSpace posts (Nightclubs: PRSM updates)

How to add a post (newest at the top, below this guide):

  ## YYYY-MM-DD | Post title
  Author: owlhoot            (owlhoot, mike, daisy, clara, sven, brtny, kts; profiles live in lib/prsm-authors.ts)
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
  kts      KTS (@BartendingTricks): very laid back and chill, loves ducks (uses duck emojis), all about bars, drinks and good vibes.

Relationships (lore):
  Clara and Daisy are twin sisters with a rivalry. They talk to each other as sisters ("sis").
  Mike is secretly their father: he never mentions or hints at it, and they never call him dad.
  Mike and KTS work together at PRSM. Sven and BRTNY work together at The New Millennia,
  so they back each other up against PRSM.

Who reacts to what (not exclusive; mix it up):
  Luxury levels, club looks, customization -> clara (shows off, caring but a bit self-centered);
      sven talks down the image and quality.
  Happiness, guest experience, music       -> daisy (customer service, experiences, music quality).
  Drinks, bartenders, the bar              -> kts.
  Characters reply to each other at different times, drop hints about what's
  coming, and it should read like a back-and-forth conversation.

Replies go under a post. Start each reply with "> who | when" (when = time after
the post, like 20m, 3h or 1d), then the text on the following ">" lines.
@handles in replies are highlighted. Example:

  > clara | 3h
  > Darling, a velvet booth is not furniture. It's a statement.

Optional on any post: "Likes: 250" and "Loves: 90" to set the reaction counts
(otherwise they're generated automatically and stay the same between builds).

Every post must still explain the real change clearly, even in character.

Everything above the first "## " line is ignored by the site.

## 2026-11-15 | First-timers are first-timers again
Author: mike
Tags: Fixes

OKAY so we caught a sneaky one. Brand-new guests were getting labeled **Returning visitors** the SECOND they walked through our doors. Love the enthusiasm, but no!

FIXED! New faces now stay **New visitors** for their entire first night. And they only get remembered as returning if they leave reasonably happy. You want that "welcome back"? You EARN it. Let's GO!

> daisy | 2h
> First impressions are everything. A first night should feel like a first night. Good catch, @MikePRSM.

> sven | 5h
> At The New Millennia we never forget a face. Mostly because they keep coming back.

> mike | 6h
> @NewMillenniaClub they keep coming back because they got LOST, Sven.

## 2026-11-15 | Housekeeping
Author: owlhoot
Tags: Tech

We removed four unused scripts left over from early prototypes. There are no gameplay changes; this keeps the project lean and easier to build on.

> kts | 1h
> clean bar, clean code. respect 🦆

## 2026-11-15 | Phase 2 is live
Author: owlhoot
Tags: Studio

Owlhoot Games is officially an LLC, and Nightclubs: PRSM has entered **Phase 2: Alpha Testing**.

Work-in-progress is being shared on our [Discord](https://discord.gg/GfQScUK9Dm) and Facebook, with Patreon coming soon. All PRSM development updates will now be posted here on NightSpace.

> mike | 20m
> PHASE 2, BABY!!! Doors are OPEN on Discord. Come say hi!

> brtny | 1h
> Alpha testing? So like... a VIP preview. I'll allow it.

> sven | 3h
> Enjoy your alpha. Some of us are already the final version.

## 2026-11-14 | New: the Guest Info panel
Author: owlhoot
Tags: Gameplay

Click any guest to open their **Guest Info panel**. It shows their name, status (New visitor, Returning visitor or Regular), how much they've spent, their tip rate, their happiness and their recent thoughts.

The panel stays hidden during normal play. Close it with its close button, the Escape key, or a click anywhere else, and click another guest to switch to them.

> daisy | 1h
> This is the stuff I love. Knowing who's on your floor and how they feel is half of a great set. Check their happiness, then pick the next track.

> clara | 3h
> Darling, a proper hostess always knows her guests' names. Now everyone gets to be a proper hostess. Almost as good as me.

> daisy | 4h
> @ClaraBelleSwings "almost as good as you." Sis, you forgot half the guest list at our own birthday party.

> kts | 4h
> tip rate right there on the panel? that's the bartender's cheat sheet 🦆

## 2026-11-14 | Mic Boost?? Say less
Author: brtny
Tags: Gameplay

Babes. BABES. The new Guest Info panel has three buttons: **Gift Drink**, **Mic Boost** and **Kick**. They're on the panel but not switched on yet, which is honestly so rude because I was BORN for a Mic Boost.

Gift me a drink and hand me the mic and watch the whole room turn around. Just saying. xoxo

> sven | 1h
> BRTNY on a PRSM mic? Waste of talent. She already owns the stage at The New Millennia.

> brtny | 1h
> @NewMillenniaClub aww, boss. A girl can window-shop. But yes, my stage, my spotlight. xoxo

> kts | 2h
> gift drink button?? say less. I'll have something ready when it switches on 🦆

## 2026-11-14 | Regulars, darlings
Author: clara
Tags: Gameplay

Darlings, a good evening is never forgotten. Guests who have a lovely night may now return, and a returning guest who makes it inside again becomes a **Regular**. A club may keep up to 20 of them at once.

Regulars are wonderfully loyal; it takes several miserable nights before they drift away. Those who leave miserable, however, are simply forgotten. The club remembers up to 50 visitors, so treat each one like champagne.

> mike | 2h
> Up to 20 Regulars! I want a wall of fame with EVERY single name on it!

> sven | 4h
> Loyal through several miserable nights? At PRSM, they'll need that loyalty.

> clara | 5h
> @NewMillenniaClub Sven, darling, loyalty is earned with comfort and charm. You should try them sometime.

> daisy | 6h
> Regulars stay for the music, sis. The velvet is just where they sit between songs.

> clara | 7h
> @DZ and yet they always ask for me by name, darling sister.

## 2026-11-14 | Names. Wow.
Author: sven
Tags: Gameplay

PRSM gave every guest a first and last name now, and returning guests keep theirs. Very impressive. Truly groundbreaking.

At The New Millennia, everybody already knows our name. Come by sometime. We have better music and nobody has to introduce themselves twice.

> mike | 30m
> @NewMillenniaClub you just admitted nobody remembers anybody's name at your place, Sven.

> brtny | 2h
> Everyone already knows my name. Just saying.

## 2026-11-14 | Tip jar's open 🦆
Author: kts
Tags: Gameplay

Ayy, good news from behind the bar. Every purchase can earn a tip now 🦆

Each guest has their own tip rate. It goes up when they leave happy and drops when they leave unhappy. Regulars tip more, happy folks tip more. Pour 'em right, keep it chill, and the jar fills itself 🦆🦆

> clara | 2h
> The finest rooms earn the finest tips, darling. Generous guests reward a beautiful club, and I do so love being rewarded.

> mike | 3h
> TIP JAR FULL OR BUST! @BartendingTricks keep those pours coming!

> kts | 4h
> @MikePRSM always, boss 🦆

## 2026-11-14 | Reading the room
Author: daisy
Tags: Gameplay

Any DJ worth their decks knows the real set happens in the crowd's head. Now you get to see it too: guests have **thoughts**.

They react to everything: arriving, getting welcomed back, becoming a Regular, waiting too long in line, buying something, feeling amazing or feeling awful, heading home. Check them in the Guest Info panel, and catch the odd bubble floating above their heads. Read the room, then drop the beat.

> clara | 2h
> Lovely post, sister dear. Though I do hope "waiting too long in line" never shows up in my guests' thoughts. Unthinkable.

> sven | 3h
> At The New Millennia our guests only have one thought: "why didn't I come here first?"

> daisy | 4h
> @NewMillenniaClub thoughts are on the panel now, Sven. Want to bet what your guests are really thinking?

## 2026-11-14 | Got kicked out of PRSM?
Author: sven
Tags: Gameplay

Fun fact: when PRSM kicks a guest out now, that guest loses a big chunk of happiness on the way out, and it can decide whether the club even remembers them.

Kicked out and feeling forgotten? Uff. The New Millennia doors are open. We don't do drama, we do style. Ha det.

> kts | 1h
> only kick 'em if you gotta. most folks just need some water and a chill corner 🦆

> mike | 2h
> @NewMillenniaClub PRSM kicks out the riff-raff. Funny where they end up, huh? @BartendingTricks has the water ready for everyone else.

## 2026-11-14 | Open tab, babe? Never heard of a budget
Author: brtny
Tags: Gameplay

Guests no longer carry a limited wallet. Arcade style, babe: they can always afford whatever the club sells.

Which means the only thing between a guest and the bar is how good the vibes are. And the vibes are always better when I'm in the room. Obviously.

> kts | 1h
> no wallets, no problem. more time pouring, less time counting 🦆

> sven | 2h
> Arcade style. Fitting, for a club that feels like a game.

## 2026-11-14 | Smooth moves only
Author: daisy
Tags: Gameplay

Movement on the floor just got a remix. Guests and the player now move tile to tile, stepping cleanly from the center of one tile to the next in straight lines.

Pathfinding is smarter too, so nobody bumps into walls or furniture on the way to the dancefloor. Clean transitions. That's how I like my mixes.

> mike | 1h
> Clean transitions on the floor AND on the decks. That's the PRSM standard!

> clara | 2h
> "Clean transitions," she says. Darling, you still trip over your own cables. Love you, sis.

> daisy | 3h
> @ClaraBelleSwings at least my cables don't come with a velvet rope.

## 2026-11-14 | Groundwork for placeable furniture
Author: owlhoot
Tags: Gameplay, Tech

We've started the foundation for placeable furniture with tile layouts. Objects such as the bar and the DJ booth can mark their tiles as open, staff-only (behind the bar or the decks) or blocked.

Guests walk around staff-only areas, while the player can walk through them. This prepares the way for designing your own club layout.

> clara | 1h
> Placeable furniture, darlings? Now we're talking. A club is only as lovely as its booths, and I have opinions about velvet.

> kts | 2h
> staff-only behind the bar. finally, my own little pond 🦆

> sven | 3h
> Furniture. How brave. Let me know when PRSM finds something worth sitting on.

> clara | 4h
> @NewMillenniaClub Sven, darling, we can't all decorate in grey concrete. Some of us have taste, and soon everyone will see it.

## 2026-11-14 | They were leaving already?
Author: sven
Tags: Fixes

Some PRSM guests were turning around at the entrance and walking right back out the door before settling in. Smart guests, I thought.

PRSM "fixed" it, so now they walk straight in. Shame. My door is still open for anyone who wants to turn around. Skål.

> daisy | 1h
> Guests were spinning around at the door like a scratched record. Glad that's fixed. The entrance sets the tone for the whole night.

## 2026-11-14 | Building a shared code library
Author: owlhoot
Tags: Tech

We've added an in-house code library for core systems such as grid movement, pathfinding and click handling. It keeps PRSM consistent and lets future Owlhoot projects reuse the same foundations.

## 2026-11-14 | Automated testing
Author: owlhoot
Tags: Tech

We've added automated tests for the pathfinding and tile-layout systems. They run whenever we make changes, helping us catch bugs before they reach players.

> mike | 2h
> Robots checking the code so I can focus on the PARTY. Love it.

## 2026-11-12 | Happiness is the finest accessory
Author: clara
Tags: Gameplay

Guests now arrive with **happiness**, darlings, and the more luxurious your club, the brighter their mood at the door.

Waiting in line slowly wears it down, while a plush booth and a lovely drink lift it right back up. Keep them comfortable and they'll swing all night.

> daisy | 1h
> Comfort gets them in the mood, sis, but the music keeps them there. Booths and drinks lift happiness for now. Wait until the decks get their turn.

> sven | 2h
> A luxury level? At PRSM? I'll believe it when I see one chandelier.

> clara | 3h
> @NewMillenniaClub patience, darling. Good taste takes time. Yours is still loading.

## 2026-11-12 | Good vibes, good pours 🦆
Author: kts
Tags: Gameplay

No rush, no stress. Just know this: happier guests are way more likely to buy drinks now 🦆

Good vibes on the floor means a busy bar. Keep everybody smiling and I'll keep the glasses moving. Easy 🦆

> daisy | 1h
> Happy floor, busy bar. That's the whole equation.

> brtny | 3h
> Drinks are on whoever's standing next to me.

## 2026-11-12 | EVERYBODY'S TALKING ABOUT PRSM
Author: mike
Tags: Gameplay

Happy guests now raise the club's POPULARITY when they leave! That's word of mouth, baby!

Run a great night and the next one brings in even MORE people. The line around the block? That's the dream, and now you can build it. LET'S GOOO!

> brtny | 1h
> Everybody's talking about PRSM? Cute. They talk about The New Millennia because I'm there.

> sven | 2h
> @BRTNYHere exactly. Popularity is easy when the bar is this low.

> kts | 3h
> the bar's not low, it's right where the drinks are 🦆

## 2026-11-12 | Plan for the first playable slice
Author: owlhoot
Tags: Studio

We've written a full project plan for the first playable slice of Nightclubs: PRSM, including a step-by-step build order. This plan guides our work toward a playable night at the club.

> mike | 1h
> Step by step, all the way to opening night. I CAN'T WAIT!

## 2026-11-12 | Backups? How cute.
Author: sven
Tags: Studio, Tech

PRSM finally set up project backups and a proper code repository. Congratulations, I suppose.

The New Millennia has never needed a backup plan. Then again, we've never needed a comeback either.

> mike | 1h
> @NewMillenniaClub no backup plan and no comeback? Sounds like a club that never opened, Sven.
