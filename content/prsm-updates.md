# NightSpace posts (Nightclubs: PRSM updates)

How to add a post (newest at the top, below this guide):

  ## YYYY-MM-DD | Post title
  Author: owlhoot            (owlhoot, mike, daisy, clara, sven, brtny, kts, davie; profiles live in lib/prsm-authors.ts)
  Tags: Studio, Audio        (comma separated: Studio, Gameplay, Audio, Music, Art, Tech, Fixes)
  Image: /updates/file.png   (optional; put the file in public/updates/)
  Image-Alt: What the image shows   (optional, recommended with Image)
  Visibility: internal       (optional; internal posts are not shown on the site)

  Write the post in plain language for players. Leave a blank line between
  paragraphs. **Bold text** and [links](https://example.com) are supported.

How posts should sound:
  owlhoot posts are the official studio voice: they describe the change plainly (features, fixes, tech).
  Everyone else talks IN the world, like club people talking about house rules and how the night works.
  No talk of features, panels, buttons, systems, code or patches in character posts or replies.
  Example: not "Guests now have a tip rate", but "House rule behind the bar: happy guests tip more."
  The real change must still be clear from what they say.

Voices:
  owlhoot  Owlhoot Games (@owlhootgames): official studio account. Professional, clear.
  mike     Mike (@MikePRSM): runs PRSM. Hyped, all caps moments, loves his club.
  daisy    Daisy (@DZ): top DJ in the scene. Electronic and synthwave, cool and confident.
  clara    Clara (@ClaraBelleSwings): electroswing queen. Luxurious, warm, calls everyone "darling".
  sven     Sven (@NewMillenniaClub): Norwegian owner of The New Millennia. Edgy, trash talks PRSM, invites players to his club.
  brtny    BRTNY (@BRTNYHere): mirrors Sven, larger than life, LOVES attention.
  kts      KTS (@BartendingTricks): very laid back and chill, loves ducks (uses duck emojis), all about bars, drinks and good vibes.
  davie    Davie (@GoliathGangCrew): VIP. Supportive of everyone and every club, all about good vibes and good times.
           Never has a negative thought. Rolls with his crew. Nobody ever goes against Davie when replying to him,
           not even Sven or RHV. Gets massive likes (handled automatically by his VIP profile).
  rhv      RHV (@redhotempress): REPLIES ONLY, never her own post (character for later). Talks about luxury.
           Has a bone to pick with Mike and Daisy (cold, never violent), always praises Clara,
           friendly with Sven and BRTNY, generic with KTS. Nobody treats her as a rival.

Relationships (lore):
  Clara and Daisy are twin sisters with a rivalry. They talk to each other as sisters ("sis").
  They do NOT work at PRSM: Daisy owns the SynthDeck, Clara owns the Brass Palace.
  Mike is secretly their father: he never mentions or hints at it, and they never call him dad.
  Daisy and Clara are friendly with Mike but keep a business rivalry with him where it fits.
  They're close with KTS, like family.
  Mike and KTS work together at PRSM. Mike's rival is Sven, and they go back and forth.
  Sven and BRTNY work together at The New Millennia, so they back each other up against PRSM.
  Everyone loves Davie.

Who reacts to what (not exclusive; mix it up):
  Luxury levels, club looks, customization -> clara (shows off, caring but a bit self-centered);
      sven talks down the image and quality.
  Happiness, guest experience, music       -> daisy (customer service, experiences, music quality).
  Drinks, bartenders, the bar              -> kts.
  Good times, crowds, popularity           -> davie.
  Characters reply to each other at different times, drop hints about what's
  coming, and it should read like a back-and-forth conversation.

Replies go under a post. Start each reply with "> who | when" (when = time after
the post, like 20m, 3h or 1d), then the text on the following ">" lines.
Each reply's "when" must be the same as or later than the reply above it. The site
turns it into a clock time (each post gets a time between 7:00 PM and 11:45 PM),
so the thread reads in order. The build warns if a reply is out of order.
@handles in replies are highlighted. Example:

  > clara | 3h
  > Darling, a velvet booth is not furniture. It's a statement.

Optional on any post: "Likes: 250000" and "Loves: 90000" to set the reaction counts
(otherwise they're generated automatically and stay the same between builds).

Everything above the first "## " line is ignored by the site.

## 2026-11-15 | First night is a first night
Author: mike
Tags: Fixes

NEW HOUSE RULE AT PRSM! Your first night is YOUR first night. Walk in for the first time and you're a **New visitor** from the door to the dancefloor to the cab home. No skipping ahead!

Want us to say "welcome back" next time? Leave HAPPY. That's it. That's the rule. You EARN the welcome back. Let's GO!

> daisy | 2h
> First impressions are everything. A first night should feel like a first night. Good call, @MikePRSM.

> davie | 3h
> First night jitters, first night magic. Nothing beats it. The crew remembers every one of ours 🙌

> mike | 3h
> @GoliathGangCrew the VIP has SPOKEN! First round's on PRSM when the crew rolls in!

> sven | 5h
> At The New Millennia we never forget a face. Mostly because they keep coming back.

> mike | 6h
> @NewMillenniaClub they keep coming back because they got LOST, Sven.

## 2026-11-15 | Housekeeping
Author: owlhoot
Tags: Tech

We removed four unused scripts left over from early prototypes. There are no gameplay changes; this keeps the project lean and easier to build on.

> kts | 1h
> clean bar, clean house. respect 🦆

## 2026-11-15 | Phase 2 is live
Author: owlhoot
Tags: Studio

Owlhoot Games is officially an LLC, and Nightclubs: PRSM has entered **Phase 2: Alpha Testing**.

Work-in-progress is being shared on our [Discord](https://discord.gg/GfQScUK9Dm) and Facebook, with Patreon coming soon. All PRSM development updates will now be posted here on NightSpace.

> mike | 20m
> PHASE 2, BABY!!! Doors are OPEN on Discord. Come say hi!

> davie | 45m
> Big night for everybody! Proud of the whole scene. The crew's already on the guest list 🙌

> brtny | 1h
> Alpha testing? So like... a VIP preview. I'll allow it.

> sven | 3h
> Enjoy your alpha. Some of us are already the final version.

> mike | 4h
> @NewMillenniaClub final version of what, Sven? Last decade's playlist?

> sven | 5h
> @MikePRSM at least our playlist has a dancefloor people actually stay on.

> sven | 6h
> @GoliathGangCrew and Davie, for you, the door at The New Millennia is always open. Even on PRSM's big night.

## 2026-11-14 | New: the Guest Info panel
Author: owlhoot
Tags: Gameplay

Click any guest to open their **Guest Info panel**. It shows their name, status (New visitor, Returning visitor or Regular), how much they've spent, their tip rate, their happiness and their recent thoughts.

The panel stays hidden during normal play. Close it with its close button, the Escape key, or a click anywhere else, and click another guest to switch to them.

> daisy | 1h
> This is the stuff I love. Knowing who's on your floor and how they feel is half of a great set. We've read the crowd like that at the SynthDeck since day one. See how they feel, then pick the next track.

> clara | 3h
> Darling, a proper hostess always knows her guests' names. Now everyone gets to be a proper hostess. Almost as good as me.

> daisy | 4h
> @ClaraBelleSwings "almost as good as you." Sis, you forgot half the guest list at our own birthday party.

> kts | 4h
> knowing who tips well before they even order? that's a bartender's dream 🦆

## 2026-11-14 | Mic Boost?? Say less
Author: brtny
Tags: Gameplay

Babes. BABES. Word around PRSM is that soon you'll be able to **send a guest a drink**, **hand them the mic**, or **show them the door**. Not yet though, which is honestly so rude because I was BORN to be handed a mic.

Send me a drink, pass me the mic and watch the whole room turn around. Just saying. xoxo

> sven | 1h
> BRTNY on a PRSM mic? Waste of talent. She already owns the stage at The New Millennia.

> brtny | 1h
> @NewMillenniaClub aww, boss. A girl can window-shop. But yes, my stage, my spotlight. xoxo

> kts | 2h
> a drink on the house for a guest?? say less. I'll have something ready 🦆

> davie | 3h
> @BRTNYHere you on the mic is a whole event. The crew will be front row, every time 🙌

> brtny | 3h
> @GoliathGangCrew DAVIE. See, this is why you're VIP. xoxo

## 2026-11-14 | Regulars, darlings
Author: clara
Tags: Gameplay

Darlings, a house rule I hold dear: a lovely evening is never forgotten. Guests who leave happy may come back, and a guest who returns and steps inside again becomes a **Regular**. A club may keep up to 20 of them at once.

Regulars are wonderfully loyal and will forgive a few miserable nights before they drift away. Those who leave miserable, however, are simply forgotten. A club only remembers up to 50 faces, so treat each one like champagne. At the Brass Palace, I know every Regular by their favorite glass.

> mike | 2h
> Up to 20 Regulars! I want a wall of fame with EVERY single name on it! The Brass Palace can keep its champagne list.

> davie | 3h
> Regulars are family. Twenty seats at the table and every one of them a friend 🙌

> clara | 3h
> @GoliathGangCrew Davie, darling, there's always a seat at the head of mine for you.

> sven | 4h
> Loyal through several miserable nights? At PRSM, they'll need that loyalty.

> clara | 5h
> @NewMillenniaClub Sven, darling, loyalty is earned with comfort and charm. You should try them sometime.

> daisy | 6h
> Regulars stay for the music, sis. The velvet is just where they sit between songs.

> clara | 7h
> @DZ and yet they always ask for me by name, darling sister.

> rhv | 9h
> @DZ spoken like someone who's never owned a decent chair. Clara is right, as always.

## 2026-11-14 | Names. Wow.
Author: sven
Tags: Gameplay

Over at PRSM, every guest has a first and last name now, and the ones who come back keep theirs. Very impressive. Truly groundbreaking.

At The New Millennia, everybody already knows our name. Come by sometime. We have better music and nobody has to introduce themselves twice.

> mike | 30m
> @NewMillenniaClub you just admitted nobody remembers anybody's name at your place, Sven.

> brtny | 2h
> Everyone already knows my name. Just saying.

> rhv | 3h
> @NewMillenniaClub ha. Save me the corner table, Sven. The one with the good lighting.

## 2026-11-14 | Tip jar's open 🦆
Author: kts
Tags: Gameplay

Ayy, house rule behind the bar: tip what feels right 🦆 Every drink can come with a tip now.

Everybody tips their own way. Leave happy and you tip a little more next time, leave grumpy and you tip less. Regulars tip more, happy folks tip more. Pour 'em right, keep it chill, and the jar fills itself 🦆🦆

> clara | 2h
> The finest rooms earn the finest tips, darling. Generous guests reward a beautiful club, and I do so love being rewarded.

> rhv | 3h
> Fine rooms, fine tips. Exactly, Clara. @BartendingTricks nice post.

> mike | 3h
> TIP JAR FULL OR BUST! @BartendingTricks keep those pours coming!

> kts | 4h
> @MikePRSM always, boss 🦆

> davie | 4h
> @BartendingTricks best pours in the city. Tipping big tonight, everybody follow my lead 🙌

> kts | 5h
> @GoliathGangCrew the legend himself 🦆🦆🦆

> daisy | 5h
> @BartendingTricks proud of you, KTS. Save me a seat at the bar after my set at the SynthDeck.

## 2026-11-14 | Reading the room
Author: daisy
Tags: Gameplay

Any DJ worth their decks knows the real set happens in the crowd's head. At PRSM, you can hear it now: guests have **thoughts**.

Walking in, getting welcomed back, becoming a Regular, waiting too long in line, buying a drink, feeling amazing or feeling awful, heading home: they react to all of it. Click a guest to read their mind, or catch the odd bubble floating above their heads. Read the room, then drop the beat.

> clara | 2h
> Lovely post, sister dear. Though I do hope "waiting too long in line" never crosses my guests' minds. Unthinkable.

> sven | 3h
> At The New Millennia our guests only have one thought: "why didn't I come here first?"

> daisy | 4h
> @NewMillenniaClub their thoughts are out in the open now, Sven. Want to bet what your guests are really thinking?

> davie | 5h
> Only thing on my mind is good music and good people. @DZ you always deliver both 🙌

## 2026-11-14 | Got kicked out of PRSM?
Author: sven
Tags: Gameplay

PRSM's door policy, for those keeping track: get kicked out and you leave a lot less happy than you came in. Leave unhappy enough, and PRSM forgets you were ever there.

Kicked out and feeling forgotten? Uff. The New Millennia doors are open. We don't do drama, we do style. Ha det.

> kts | 1h
> only kick 'em if you gotta. most folks just need some water and a chill corner 🦆

> mike | 2h
> @NewMillenniaClub PRSM kicks out the riff-raff. Funny where they end up, huh? @BartendingTricks has the water ready for everyone else.

> davie | 3h
> Love that there's always a door open somewhere. Room for everybody in this city 🙌

> sven | 4h
> @GoliathGangCrew well said, Davie. The corner booth is yours whenever you want it.

## 2026-11-14 | Open tab, babe? Never heard of a budget
Author: brtny
Tags: Gameplay

House rule at PRSM: nobody's counting coins, babe. Arcade style: every guest can always afford whatever the club sells.

Which means the only thing between a guest and the bar is the vibe. And the vibe is always better when I'm in the room. Obviously.

> kts | 1h
> no wallets, no problem. more time pouring, less time counting 🦆

> davie | 2h
> Open tab energy! Nobody leaves thirsty when the crew's around 🙌

> sven | 2h
> Arcade style. Fitting. PRSM always did feel like a funfair.

> rhv | 4h
> @BRTNYHere an open tab and a spotlight? That's a proper night out. Count me in.

## 2026-11-14 | Smooth moves only
Author: daisy
Tags: Gameplay

Floor etiquette, SynthDeck approved: at PRSM, everybody moves square by square now, in clean, straight lines.

And nobody bumps into walls or furniture on the way to the dancefloor anymore. Clean transitions. That's how I like my mixes.

> mike | 1h
> Clean transitions on the floor AND on the decks. That's the PRSM standard!

> daisy | 2h
> @MikePRSM cute. That's been the SynthDeck standard since opening night. Good to see PRSM catching up.

> clara | 3h
> "Clean transitions," she says. Darling, you still trip over your own cables. Love you, sis.

> daisy | 4h
> @ClaraBelleSwings at least my cables don't come with a velvet rope.

## 2026-11-14 | Groundwork for placeable furniture
Author: owlhoot
Tags: Gameplay, Tech

We've started the foundation for placeable furniture with tile layouts. Objects such as the bar and the DJ booth can mark their tiles as open, staff-only (behind the bar or the decks) or blocked.

Guests walk around staff-only areas, while the player can walk through them. This prepares the way for designing your own club layout.

> clara | 1h
> Furniture of our own choosing, darlings? Now we're talking. A club is only as lovely as its booths, and I have opinions about velvet.

> rhv | 2h
> Finally, someone in this thread with taste. @ClaraBelleSwings, velvet is the bare minimum. @MikePRSM, try to keep up this time.

> kts | 2h
> staff only behind the bar. finally, my own little pond 🦆

> sven | 3h
> Furniture. How brave. Let me know when PRSM finds something worth sitting on.

> clara | 4h
> @NewMillenniaClub Sven, darling, we can't all decorate in grey concrete. Some of us have taste, and soon everyone will see it.

## 2026-11-14 | They were leaving already?
Author: sven
Tags: Fixes

Some PRSM guests were turning around at the entrance and walking right back out the door before settling in. Smart guests, I thought.

PRSM sorted out its doorway, so now they walk straight in. Shame. My door is still open for anyone who wants to turn around. Skål.

> daisy | 1h
> Guests were spinning around at the door like a scratched record. Glad that's over. The entrance sets the tone for the whole night.

## 2026-11-14 | Building a shared code library
Author: owlhoot
Tags: Tech

We've added an in-house code library for core systems such as grid movement, pathfinding and click handling. It keeps PRSM consistent and lets future Owlhoot projects reuse the same foundations.

## 2026-11-14 | Automated testing
Author: owlhoot
Tags: Tech

We've added automated tests for the pathfinding and tile-layout systems. They run whenever we make changes, helping us catch bugs before they reach players.

> mike | 2h
> Fewer surprises, more PARTY. Love it.

## 2026-11-12 | Happiness is the finest accessory
Author: clara
Tags: Gameplay

Darlings, every guest arrives with their **happiness**, and the more luxurious the club, the brighter their mood at the door.

A long wait in line slowly wears it down, while a plush booth and a lovely drink lift it right back up. Keep them comfortable and they'll swing all night.

> daisy | 1h
> Comfort gets them in the mood, sis, but the music keeps them there. Booths and drinks lift spirits for now. Wait until the decks get their turn.

> sven | 2h
> A luxury club? PRSM? I'll believe it when I see one chandelier.

> clara | 3h
> @NewMillenniaClub patience, darling. Good taste takes time. Yours is still loading.

> rhv | 4h
> Luxury at the door is how you set the tone. Clara has always understood that. @DZ, the music can't fix a cheap room, and @MikePRSM is still learning what the word luxury means.

> davie | 5h
> Happy people make every room beautiful. Can't wait to see what you do with yours, @ClaraBelleSwings 🙌

## 2026-11-12 | Good vibes, good pours 🦆
Author: kts
Tags: Gameplay

No rush, no stress. Just know this: happy guests buy way more drinks 🦆

Good vibes on the floor means a busy bar. Keep everybody smiling and I'll keep the glasses moving. Easy 🦆

> daisy | 1h
> Happy floor, busy bar. That's the whole equation.

> clara | 2h
> @BartendingTricks my favorite bartender in the whole city. There's always a seat for you at the Brass Palace, sweetheart.

> brtny | 3h
> Drinks are on whoever's standing next to me.

## 2026-11-12 | Everybody's talking 🙌
Author: davie
Tags: Gameplay

Big love to every club in this city. Here's how the scene works: when a guest leaves happy, they tell their friends, and the club's **popularity** goes up.

Great night, bigger crowd next time. That's the whole secret. Good vibes travel, so spread 'em everywhere you go 🙌

> mike | 20m
> @GoliathGangCrew THE VIP HIMSELF!! PRSM's line around the block starts with YOU, Davie!

> daisy | 1h
> Happy crowd, full floor. Thanks for always spreading the love, Davie.

> brtny | 1h
> @GoliathGangCrew Davie gets it. I tell my friends, my friends tell their friends, and everybody ends up wherever I am. xoxo

> sven | 2h
> Wise words, Davie. Even I can't argue with that.

> clara | 3h
> Davie, darling, you are the finest word of mouth in the whole city.

> kts | 3h
> bar's ready whenever the crew gets here 🦆

## 2026-11-12 | Plan for the first playable slice
Author: owlhoot
Tags: Studio

We've written a full project plan for the first playable slice of Nightclubs: PRSM, including a step-by-step build order. This plan guides our work toward a playable night at the club.

> mike | 1h
> Step by step, all the way to opening night. I CAN'T WAIT!

> davie | 2h
> Opening night is gonna be one for the books. The whole crew's coming 🙌

## 2026-11-12 | Backups? How cute.
Author: sven
Tags: Studio, Tech

PRSM keeps a spare copy of everything now, just in case the lights go out. Congratulations, I suppose.

The New Millennia has never needed a backup plan. Then again, we've never needed a comeback either.

> mike | 1h
> @NewMillenniaClub no backup plan and no comeback? Sounds like a club that never opened, Sven.
