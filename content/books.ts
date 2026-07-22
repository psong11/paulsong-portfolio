// Single source of truth for the Reading section — a commonplace book, not a
// catalog. Each book expands to reveal marginalia: quotes marked and the
// thoughts had, interleaved in reading order so each book reads as a small
// narrative. Add a book here and it appears on the shelf.

export type Marginalia =
  | { kind: "quote"; text: string; page?: number }
  | { kind: "thought"; text: string; page?: number };

export type ShelfKey =
  | "nightstand"
  | "stories"
  | "faith"
  | "nature"
  | "systems"
  | "lives";

/** The shelves, in display order — group titles are part of the voice. */
export const SHELVES: { key: ShelfKey; title: string }[] = [
  { key: "nightstand", title: "On the nightstand" },
  { key: "systems", title: "Systems, machines, and the built world" },
  { key: "lives", title: "Lives and civilizations" },
  { key: "nature", title: "The natural world, from quarks to crops" },
  { key: "faith", title: "Faith, examined" },
  { key: "stories", title: "Stories that rewired me" },
];

export type Book = {
  slug: string;
  /** Which shelf the book lives on. */
  shelf: ShelfKey;
  title: string;
  author?: string;
  /** Year finished, if noted. Omit when unknown. */
  yearRead?: number;
  /** Currently reading — shows a "reading" tag instead of a year. */
  reading?: boolean;
  /** Marked quotes and thoughts, in the order met. Empty is fine — the book
   *  then renders as a plain titled row (no expander). */
  notes: Marginalia[];
};

// Currently-reading first, then books with marginalia, then the rest of the
// shelf as plain rows.
export const BOOKS: Book[] = [
  { slug: "the-alchemy-of-air", shelf: "nightstand", title: "The Alchemy of Air", author: "Thomas Hager", reading: true, notes: [] },
  { slug: "the-grid", shelf: "nightstand", title: "The Grid", author: "Gretchen Bakke", reading: true, notes: [] },
  { slug: "thinking-in-systems", shelf: "nightstand", title: "Thinking in Systems", author: "Donella Meadows", reading: true, notes: [] },
  { slug: "packing-for-mars", shelf: "nightstand", title: "Packing for Mars", author: "Mary Roach", reading: true, notes: [] },
  { slug: "walden", shelf: "nightstand", title: "Walden", author: "Henry David Thoreau", reading: true, notes: [] },
  {
    slug: "sing-unburied-sing", shelf: "stories",
    title: "Sing, Unburied, Sing",
    author: "Jesmyn Ward",
    notes: [
      { kind: "thought", text: "Read this recently and figured I'd concretize my brief thoughts on it. First of all, I'm a fiend for a good metaphor, and this book is chock full of 'em." },
      { kind: "quote", text: "But everything else about him was nothing like Pop, was like Pop had been wrung out like a wet rag and then dried up in the wrong shape." },
      { kind: "thought", text: "(Yeah, it's a simile, but metaphor is a cooler word than simile.) On every page, Ward's professorship in creative writing really comes through." },
      { kind: "thought", text: "Another thing I liked was the character of Pop — a strong, wise, hard-working yet gentle paragon of healthy masculinity with a wild backstory revealed at the end. He made me wish I was closer with my own grandpa, because according to my mom he was a stud, with I'm sure lots of stories from Imperial Japanese annexation, the Korean War, and managing his own corner store." },
      { kind: "thought", text: "The book made me think a lot about my family in general, dead and alive. I am the result of all my Korean ancestors' past choices, blood-bound to innumerable people I've never even made eye contact with. To my father's father's father's father's father, the \"United States\" was merely a word with no real distinction between fantasy and reality. Considering that, home should have always been Korea for me — but here I am in the United States, creating my own relationship with the soil here. Hopefully I'll live to see my great-grandson and show him the land his great gramps grew up on. Man will always have such an intimate relationship with land, a theme I can't stop thinking about ever since learning about אדם and אדמה." },
    ],
  },
  {
    slug: "never-let-me-go", shelf: "stories",
    title: "Never Let Me Go",
    author: "Kazuo Ishiguro",
    notes: [
      { kind: "thought", text: "This book made me eerily aware that I am living inside the nostalgia that grown-up Paul will hold while remembering my early twenties — as if I am always yearning to go back to a simpler time when I could laugh easier and dream bigger, but then realizing, that is now." },
      { kind: "thought", text: "All of the petty drama between Kathy's friends, the curiosity of her childhood, and the reflective monologues throughout her mercurial relationships felt comfortingly familiar — as if to say that all our lives are so similarly sewn together yet subtly unique, in a first haunting, then heartening way." },
      { kind: "thought", text: "Death is scary, but sometimes life is even scarier. Still, I love my life just the way it is, with all the things I've found and lost along the way." },
      { kind: "thought", text: "Deep stuff aside, Kazuo's writing style made it more captivating and page-teasing than a kdrama episode that cuts right after the main characters finally make eye contact in a random bus station after years of separation." },
      { kind: "thought", text: "Also I learned new British slang: \"daft.\"" },
      { kind: "thought", text: "It captures that indescribable feeling of the slow rust yet nostalgic magic that time does to a friendship. Similar to the feeling that Past Lives gave me. Tell people what you really want to tell them." },
      { kind: "thought", text: "This is one of those books where I'm scared of reading an analysis, because the memories and reflections it evoked felt so personal that I don't want someone to tell me how I should feel about them." },
    ],
  },
  {
    slug: "the-remains-of-the-day", shelf: "stories",
    title: "The Remains of the Day",
    author: "Kazuo Ishiguro",
    notes: [
      { kind: "thought", text: "Great read. A lot more straightforward than Never Let Me Go, but I still think I like the character development and growth of NLMG a bit better. Super realistic and relatable dialogue throughout, regardless." },
      { kind: "thought", text: "Always be aware of who you're working for, and what you're working towards. And grass isn't always greener on the other side of that big life decision. Just gotta be grateful for every moment and opportunity as it comes." },
      { kind: "thought", text: "The book made me think about the origins and culture of final clubs at Harvard, too — all the English old-money motifs and butler/stewardship." },
    ],
  },
  {
    slug: "the-grapes-of-wrath", shelf: "stories",
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    notes: [
      { kind: "quote", page: 232, text: "And it came about that owners no longer worked on their farms. They farmed on paper; and they forgot the land, the smell, the feel of it, and remembered only that they owned it, remembered only what they gained and lost by it." },
      { kind: "thought", text: "Money drives Man's creativity. Creativity should be used to make life better, not to churn money." },
      { kind: "quote", text: "Then such a farmer really became a storekeeper, and kept a store… and then the dispossessed were drawn west… Carloads, caravans, homeless, and hungry; 20,000 and 50,000 and 100,000 and 200,000. They streamed over the mountains, hungry and restless — restless ants, scurrying to find work to do: to lift, to push, to pull, to pick, to cut — anything, any burden to bear, for food." },
      { kind: "quote", page: 239, text: "Our people are good people; our people are kind people. Pray God some day kind people won't all be poor. Pray God some day a kid can eat." },
    ],
  },
  {
    slug: "klara-and-the-sun", shelf: "stories",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    notes: [
      { kind: "thought", text: "If only there were a way to ensure eternal life so that we could preserve the Human Heart. The infinity of rooms. The irreplaceability of my character." },
      { kind: "thought", text: "Something must die, must pay the price, for Josie to live. Either Klara dies or Josie dies and we never get the true Josie ever again. In order to reverse and conquer the effects of sin — which is death — something else MUST give its Life." },
      { kind: "thought", text: "I think the book touched a lot on the irreplaceability of the unique human character — the idea of life taking people in different directions, yet the memory of yourself in other people's minds being what is truly precious." },
    ],
  },
  {
    slug: "sapiens", shelf: "lives",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    notes: [
      { kind: "thought", text: "Since the dawn of human history, we've been trying to make a utopia for ourselves — agricultural revolution, capitalism, industrial revolution, etc. But really the collective desire to \"reach utopia\" is just an optimistic pretty-pink mask covering greed, ignorance, addiction, and all the other human vices that get taught to our children and their children — and not the lessons learned through genocide and economic collapse." },
      { kind: "thought", text: "The first step to freedom is to acknowledge what you are even being freed from." },
      { kind: "thought", text: "From the sole of the foot to the crown of the head, all is corrupt. What has been is what will be, and what has been done is what will be done; there is nothing new under the sun. Then He who sat on the throne said, \"Behold, I am making all things new.\" (Isaiah 1:6; Ecclesiastes 1:9; Revelation 21:5)" },
    ],
  },
  {
    slug: "living-buddha-living-christ", shelf: "faith",
    title: "Living Buddha, Living Christ",
    author: "Thich Nhat Hanh",
    notes: [
      { kind: "quote", text: "We do not have to die to arrive at the gates of Heaven. In fact, we have to be truly alive." },
      { kind: "thought", text: "The Breath and Mindfulness is part of the Holy Spirit. The Holy Spirit in Hebrew is Holy Wind." },
      { kind: "thought", text: "Christ preached a message of love where life comes truly awake — where love embraces darkness without fear, instead of fighting or avoiding it." },
      { kind: "thought", text: "Christianity proclaims a message of reincarnation because the soul never dies — it has always been and always will be — but the body must come back to life. Faith that is alive and ever-changing." },
      { kind: "thought", text: "We cannot box things like God into notions or concepts; it is simply reality. It can only be experienced. To truly see something is to see all of its forms — past, present, and future — and how it is connected with everything around it. The truth is not in any notions." },
      { kind: "quote", page: 244, text: "I like the expression \"resting in God.\" When you pray with all your heart, the Holy Spirit is in you, and as you continue to pray, the Holy Spirit continues in you. You do not need to do anything else. As long as the Holy Spirit is there, everything is fine. You are resting in God, and God will work in you. For transformation to take place, you only need to allow the Holy Spirit to stay in you." },
      { kind: "thought", text: "Life is reality. Reality cannot be explained in words or in pictures. It can only be explained by experiencing it, as Life through life. That is why Christ says that if anybody loves him, they will keep his word. The truth can only be expressed through your life." },
      { kind: "thought", text: "Fear, Attachment, Illusion, and Craving. The concept of the Trinity actually makes more sense to me through a Buddhist lens." },
      { kind: "quote", page: 265, text: "When the Buddha was asked, \"Sir, what do you and your monks practice?\" he replied, \"We sit, we walk, and we eat.\" The questioner continued, \"But, sir, everyone sits, walks, and eats,\" and the Buddha told him, \"When we sit, we know we are sitting. When we walk, we know we are walking. When we eat, we know we are eating.\"" },
    ],
  },
  {
    slug: "east-of-eden", shelf: "stories",
    title: "East of Eden",
    author: "John Steinbeck",
    notes: [
      { kind: "quote", page: 131, text: "In our time, mass or collective production has entered our economics, our politics, and even our religion, so that some nations have substituted the idea collective for the idea God." },
      { kind: "thought", text: "\"There is no fear in love, but perfect love casts out fear.\" This verse perfectly describes how fear does not stand alone, but grows out of a twisted insecurity with received love." },
      { kind: "quote", text: "Kate inched over her thoughts like a measuring worm." },
      { kind: "thought", text: "I see myself in every single character." },
      { kind: "thought", text: "Marriage is like everything else in this world: broken. What should be perfect instead leaves you with that feeling after guzzling down a new vice — and after it grows old, you wonder to yourself, \"That's it?\"" },
      { kind: "thought", text: "Every pain in this world is designed to teach us that we need Jesus. Marriage is designed to teach us how fickle our desires are. Gambling is designed to teach us…" },
    ],
  },
  {
    slug: "the-things-they-carried", shelf: "stories",
    title: "The Things They Carried",
    author: "Tim O'Brien",
    notes: [
      { kind: "thought", text: "For the wages of sin is death." },
    ],
  },
  {
    slug: "the-red-pony", shelf: "stories",
    title: "The Red Pony",
    author: "John Steinbeck",
    notes: [
      { kind: "thought", text: "I am so thankful to have had such a blessed childhood, with two parents who genuinely put my success at the forefront of their lives. I'm also thankful to have been born in an era, location, and socioeconomic background that gave my childhood such a diverse agenda each day, instead of doing the same chores on a medieval farm for all my adolescent years." },
      { kind: "thought", text: "The malleability and empathy of a young mind is so precious. I don't want to lose it. I think my greatest fear in life right now is becoming close-minded." },
    ],
  },
  {
    slug: "stay-true", shelf: "lives",
    title: "Stay True",
    author: "Hua Hsu",
    notes: [
      { kind: "quote", text: "To love friendship is to love the future." },
      { kind: "thought", text: "Humans have an intrinsic love for the future because we were meant to live forever. Everyone is so complicated." },
      { kind: "quote", page: 157, text: "My handwriting changed that week, growing curvier and more ornate, like the violent fury of graffiti tags. I got lost while searching for the right words. What was that thing we had learned in our rhetoric class, about Derrida's \"deferral of meaning\" and how words are merely signs that can never fully summon what they \"mean\"? Yet words are all we have, simultaneously bringing us closer, casting us farther away." },
      { kind: "quote", page: 186, text: "Occasionally, I felt preemptively embarrassed about my private hysterics. I think the most depressing aspect of keeping a journal is thinking, or knowing, that one day I'll be sitting somewhere reading this — trying to relive some moments, but struck not by recaptured emotions, rather by how damn deep I tried to sound at some point in the past." },
      { kind: "thought", text: "The Immediate Present is all we have. And who has control over every Now is a mystery." },
      { kind: "thought", text: "To understand the author's intent, pretend you are the author writing the sentence you just read." },
    ],
  },
  {
    slug: "letter-from-birmingham-jail", shelf: "lives",
    title: "Letter from Birmingham Jail",
    author: "Martin Luther King Jr.",
    notes: [
      { kind: "quote", text: "Anyone who lives inside the United States can never be considered an outsider anywhere within its bounds." },
      { kind: "quote", text: "You may well ask: \"Why direct action? Why sit-ins, marches, and so forth? Isn't negotiation a better path?\" You are quite right in calling for negotiation. Indeed, this is the very purpose of direct action. Nonviolent direct action seeks to create such a crisis and foster such a tension that a community which has constantly refused to negotiate is forced to confront the issue… I am not afraid of the word \"tension.\" I have earnestly opposed violent tension, but there is a type of constructive, nonviolent tension which is necessary for growth." },
      { kind: "thought", text: "As a high schooler I read about nonviolent activists like MLK Jr. and Gandhi. I hope to be a man who can be patient, gracious, and forgiving about small inconveniences, yet strong and intentional against injustice." },
      { kind: "thought", text: "The Supreme Court is kinda wild. Nine people dictate moral interpretation for 334.9 million people." },
      { kind: "quote", text: "Such an attitude stems from a tragic misconception of time… Actually, time itself is neutral; it can be used either destructively or constructively… We will have to repent in this generation not merely for the hateful words and actions of the bad people, but for the appalling silence of the good people. Human progress never rolls in on wheels of inevitability; it comes through the tireless efforts of men willing to be co-workers with God… Now is the time to make real the promise of democracy." },
      { kind: "thought", text: "This is a calling to the modern American church." },
    ],
  },
  {
    slug: "everything-you-should-know-about-politics", shelf: "systems",
    title: "Everything You Should Know About Politics But Don't",
    author: "Jessamyn Conrad",
    notes: [
      { kind: "thought", text: "Foreign policy is so interesting — these are all terms I remember learning in high school, but now I kind of understand why it's so important to learn history to really understand where we are today in global politics. Lots of political cartoons popping up in my mind while reading." },
      { kind: "thought", text: "I was born into a crazy time. Everyone was." },
      { kind: "thought", text: "It's nice getting older. My painting professor told me that \"as you get older, life doesn't get simpler, it gets richer.\" Life honestly gets more complicated as you learn more about the world — but as you understand it more, I think compassion grows with it." },
      { kind: "thought", text: "After learning all this, I guess what really matters is how it affects how I treat the people around me today, since I probably won't remember every detail — like the paleoconservative stance on limited government." },
      { kind: "thought", text: "Decisions can't really be in the gray area. People with different traumas react differently in the same scenario, and it doesn't mean one way is correct or incorrect. I think it just requires trust in a higher power that whichever route we've decided to take as humanity will be used for good and is in control." },
    ],
  },
  {
    slug: "fahrenheit-451", shelf: "stories",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    notes: [
      { kind: "thought", text: "There is a sort of austere chill that hangs in the air after every sentence." },
      { kind: "thought", text: "It makes you think about how consumed into your own little snow-globe of a world you become as you get older — and how, when we meet a Clarisse McClellan in our snow-globe, we brush her away thinking \"What an oddball, she just needs to grow up,\" when in reality we all secretly wish to go back there." },
      { kind: "thought", text: "Dialogue is so fascinating. You listen to the other's words, process them, and spit out a response from within your own cage of thinking — and do the same for the Other. I feel my brain stretching." },
    ],
  },
  {
    slug: "siddhartha", shelf: "stories",
    title: "Siddhartha",
    author: "Hermann Hesse",
    notes: [
      { kind: "thought", text: "The Trinity is the Atman — not our bodies nor our souls, but God who lives in us and gave His Spirit to us." },
      { kind: "thought", text: "Jesus meditated. Prayer is meditation. Even King David says, \"May my meditation please the Lord.\" (Psalm 104:34)" },
      { kind: "thought", text: "The Samana dies in the same earth as the newborn. What have all their reflections and mental treasures gained them? Life lessons never last; everyone wants to learn life on their own. The only thing that lasts is your own conscience before God." },
      { kind: "thought", text: "You can become a recluse or a hermit or an ascetic monk and think and meditate and empty yourself your whole life — but I think the only work that lasts is partnering with God to usher in an awakened Kingdom. Tikkun Olam." },
      { kind: "thought", text: "Mark 2:1-12 is actually insane. Jesus is saying that He is the One whom all world religions are seeking: the One who can forgive with finality and rebirth into New Life. Truly, he was either a crazy person or, if the paralyzed man was actually healed on the spot, then He is the One." },
      { kind: "thought", text: "Okay, sure, everyone's truth is subjective. But isn't that unsatisfying? Something about it feels lazy. What if there is an absolute truth?" },
      { kind: "thought", text: "This book perfectly captures how I feel about the fickleness of the human heart. No matter how fortified our beliefs, we succumb to the age-old predators of wealth, lust, a judging eye, and a stiff neck. Faithfulness to the Truth is the real game — not who can accumulate the most Passion." },
      { kind: "thought", text: "Literature pulls you out of your own body, which is very humbling: to realize that although your perspective is your reality, your perspective alone is not Reality." },
      { kind: "thought", text: "When you really respect someone, you ask them questions in your head." },
      { kind: "thought", text: "This book is just one big parable. It is the Book of Ecclesiastes within a man." },
      { kind: "thought", text: "You cannot be taught with words. You must be taught with a bent back, calloused hands, and a weary heart." },
      { kind: "thought", text: "Siddhartha with his son is like God with his people. Painful love is richer than an empty house." },
      { kind: "thought", text: "An older man can dismiss all my words because I am un-lived and immature. I hope I don't become like that. Working with children has taught me what an older man never could." },
    ],
  },
  {
    slug: "war-macmillan", shelf: "lives",
    title: "War",
    author: "Margaret MacMillan",
    notes: [
      { kind: "thought", text: "Students in school were lined up uniformly and with discipline, so they could be prepared for wartime. The schooling system was designed for industry and war — but now, in an era of peace and artistic expression, we feel a different need growing: the unchained, free-willed human spirit. Perhaps my dissatisfaction with the current public school system is simply a mindset birthed from privilege." },
      { kind: "thought", text: "War concentrates our attention out of urgency." },
    ],
  },
  {
    slug: "cold-case-christianity", shelf: "faith",
    title: "Cold-Case Christianity",
    author: "J. Warner Wallace",
    notes: [
      { kind: "quote", page: 56, text: "faith is actually the opposite of unbelief, not reason." },
      { kind: "quote", page: 85, text: "Growing up as a skeptic, I never thought of the biblical narrative as an eyewitness account. Instead, I saw it as something more akin to religious mythology — a series of stories designed to make a point." },
      { kind: "thought", text: "The Bible has some additions and edits here and there (like the adulteress story in John) made long after the apostles — but that doesn't invalidate its truth claims overall. If we invalidate the Bible because of this, then we should invalidate Homer and Euripides and Aristotle too, since there are far fewer of their manuscripts than there are of the Bible." },
      { kind: "thought", text: "Christianity couldn't have been a conspiracy: all these martyrs were willing to die without ever saying \"Okay, fine, you got us, Jesus didn't actually resurrect.\" Since they died far from each other, they couldn't have coordinated to keep it alive, and most weren't even blood-related, so they had no strong motive to." },
      { kind: "thought", text: "People 2000 years from now may call the US Constitution fake because there are no eyewitnesses left to testify to its existence and impact. Similarly, we can't just call the death and resurrection of Jesus fake because no eyewitnesses are alive." },
      { kind: "thought", text: "The gospels unintentionally fill in each other's blanks — a common trait of reliable eyewitness accounts in forensic analysis. For the feeding of the five thousand, John says Jesus asks Philip and Andrew where to buy bread. Why them? Luke says the feeding happens in Bethsaida; John mentions, in a totally unrelated place, that Philip and Andrew were from Bethsaida — which is exactly why Jesus would ask them, as locals, where to buy bread." },
      { kind: "thought", text: "A man named Yeshua from Nazareth is slaughtered by Rome in 33 AD, but hundreds claim to have seen his resurrected body days later, and a global movement forms because those hundreds were willing to die for what they saw. J. Warner Wallace, an atheist homicide detective, applies investigation principles to these eyewitness accounts and concludes it's more rational that a man actually came back to life than that the body was stolen or the story fabricated for fame." },
    ],
  },
  {
    slug: "1776", shelf: "lives",
    title: "1776",
    author: "David McCullough",
    notes: [
      { kind: "thought", page: 105, text: "It could have been Artemas Ward who convinced General Washington to camp on Dorchester Heights. The men who pushed for the vision that ultimately led to victory get swept under the rug, shadowed by title-holders like Washington. At least Washington gave him some credit." },
      { kind: "thought", text: "Soldiers are all just normal people. Even George Washington. And Clinton, and Howe. All just dudes trying to \"do what's right\" — until someone dies and blood is shed; then things start getting real." },
      { kind: "thought", text: "Washington said the worst punishment he wished upon his enemy was for them to be in his position." },
      { kind: "thought", text: "One of Washington's best traits was his decisiveness. When a man can firmly stand upon a decision, you know he has given it focus and faith." },
      { kind: "thought", text: "Imagine seeing your General riding his steed, chasing down your enemies amidst gunfire, shouting \"It's a fine fox chase, my boys!\" That's a Gas Man right there." },
      { kind: "thought", text: "There were some crazy atrocities even in the Revolutionary War — crazy suffering endured by our country's men and their women. I'm thankful for shoes. The soldiers trekked without them, so you could retrace where they'd come from by the blood on the ground." },
      { kind: "thought", text: "The power of the media you consume is incredible. The letters read out to the citizens and King of London about the Americans made them seem like power-hungry, unruly rebels." },
      { kind: "thought", text: "War is ideological. It's when two parties genuinely believe in conflicting ideas — and when one unstoppable tectonic plate rubs against another, the earth quakes. My barometer feels the pressure." },
      { kind: "thought", text: "Also, Henry Knox is an absolute legend. The man was pure force of will." },
    ],
  },
  {
    slug: "seven-brief-lessons-on-physics", shelf: "nature",
    title: "Seven Brief Lessons on Physics",
    author: "Carlo Rovelli",
    notes: [
      { kind: "thought", text: "Sometimes as I read, my vision falls into a 3D asymptote and my body doesn't want to move — out of a desire to challenge reality. And then I move my finger to remind myself that I am alive." },
      { kind: "thought", page: 24, text: "Science is a leap of faith. The act of creating a hypothesis (which is shrouded in doubt) and then performing tests as if you believe it is the truth — to jump first and then confirm." },
      { kind: "thought", text: "Knowledge was not expanded by genius, but by meditation. And this meditation took years, even decades. It took Einstein ten years to understand the geometrical nature of gravity." },
      { kind: "thought", text: "You've got to be kidding me. The scientists named the force that glues quarks inside protons and neutrons \"gluons.\" Like, come on — these people were something else." },
      { kind: "thought", text: "Local relationships of humans are like loop quantum gravity — dances, independent yet simultaneous." },
      { kind: "thought", page: 53, text: "Heat causes time. Mind blown." },
      { kind: "thought", text: "Spacetime is a continuous deterministic fabric comprised of discrete probabilistic particles. It's like the dance between GR and QM. Maybe by studying how atoms probabilistically bump into each other and form a continuous fabric of heat, we can understand how QM particles bumping into each other form the continuous fabric of GR." },
      { kind: "thought", page: 57, text: "Our measurements rely on the Truth. The Truth does not rely on our measurements." },
      { kind: "thought", text: "Hell is described as Fire because Time does not exist there for Heat to reach equilibrium. It is frozen in Death. A Heat-Death." },
      { kind: "thought", text: "Thank God that I am not a microwave. It was good to be a human today. Nature made flesh, of whom we are called brothers." },
    ],
  },
  {
    slug: "spqr", shelf: "lives",
    title: "SPQR",
    author: "Mary Beard",
    notes: [
      { kind: "quote", page: 83, text: "it cannot be stressed enough that there's no certain independent date for any of the archaeological material from earliest Rome or the area round about, and that arguments still rage about the age of almost every major find." },
      { kind: "quote", page: 94, text: "The word \"king\" almost certainly implies something much more formal and grander than we should be envisaging… after the dramatic fall of Tarquinius Superbus, kings were an object of hatred for the rest of Roman history. To be accused of wanting to be rex was a political death sentence for any Roman." },
    ],
  },
  {
    slug: "genghis-khan", shelf: "lives",
    title: "Genghis Khan and the Making of the Modern World",
    author: "Jack Weatherford",
    notes: [
      { kind: "thought", text: "Genghis Khan's burial place is so unknown because the people who buried him were killed — and then those killers were killed." },
      { kind: "thought", text: "The story of Genghis Khan's mother and father splitting is so sad but beautiful — basically an anime. And it's funny how the sense of smell was super important to the Mongols; I wonder if that's where I got my obsession with scents as a child." },
      { kind: "thought", text: "Genghis Khan's other name, Temujin, shares the Temul root with his siblings. A Mongol native described Temul as the look in a racing horse's eyes when he is fixed on where he wants to go, regardless of his master's wishes." },
      { kind: "thought", text: "Genghis had the psychology of warfare mastered — making citadels surrender out of fear rather than actually waging war. He'd destroy surrounding cities so those residents fled into the citadel and stirred up panic. He also renovated siege technology by digging under walls to compromise their structural integrity." },
      { kind: "quote", page: 6, text: "a man of tall stature, of vigorous build, robust in body, the hair on his face scanty and turned white, with cats' eyes, possessed of dedicated energy, discernment, genius, and understanding, awe-striking, a butcher, just, resolute, an overthrower of enemies, intrepid, sanguinary, and cruel." },
      { kind: "thought", text: "He forbade kidnapping, enslavement, illegitimacy of children, adultery between households, theft of animals, hunting outside the breeding season, and the death penalty without a jury (khuriltai); he instituted religious freedom and stated the law was above everyone, even the sovereign — similar to the Magna Carta. To enforce it across the empire, scribework proliferated." },
      { kind: "quote", page: 86, text: "the well-trained and tightly organized Mongol army would charge out of its Highland home and overrun everything from the Indus River to the Danube, from the Pacific Ocean to the Mediterranean Sea. In a flash, only 30 years… Christians, Muslims, Buddhists, and Hindus would soon kneel before the dusty boots of illiterate young Mongol horsemen." },
      { kind: "quote", page: 91, text: "Every Mongol soldier had to live his life as a warrior with the assumption that he was immortal… At the last moment of life, when all had failed and no hope remained, the Mongol warrior was supposed to look upward and back his fate by calling out the name of the eternal blue sky as his final earthly words." },
      { kind: "quote", page: 92, text: "as Genghis Khan reportedly said, there is no good in anything until it is finished." },
      { kind: "thought", text: "It's interesting how the Mongols were herders, and Genghis Khan built his rule system from the customs of his herding society — very similar to the Torah given to the Hebrews, who were also a herding society; all the patriarchs were sheepherders." },
      { kind: "thought", page: 111, text: "Divine authority and manifest destiny are scary things." },
      { kind: "thought", text: "The Mongols were actually predominantly Christian until near the end of the empire, when they turned Buddhist and Muslim." },
      { kind: "quote", page: 173, text: "…as the effects of the alcohol became stronger, the Christians gave up trying to persuade anyone with logical arguments and resorted to singing. The Muslims, who did not sing, responded by loudly reciting the Koran to drown out the Christians, and the Buddhists retreated into silent meditation. At the end of the debate, unable to convert or kill one another, they concluded the way most Mongol celebrations concluded — with everyone simply too drunk to continue." },
      { kind: "quote", page: 195, text: "He won over the population by skillful manipulation of public opinion… He built a Chinese capital, took Chinese names, created a Chinese dynasty, and set up a Chinese administration. He won control of China by appearing more Chinese than the Chinese, or at least more Chinese than the Sung." },
      { kind: "thought", text: "The word \"horde\" came from a Turkic-Mongol word, orda, meaning camp or encampment. For a history book — wow, this is so well-paced." },
      { kind: "thought", text: "Khubilai tried to make a universal Mongol language; the Chinese rejected it, thinking their own more elegant. He also tried to institute universal education during winter, when children had nothing to do. Mongols were great on land but hopeless at maritime warfare — never able to conquer Japan or Java." },
      { kind: "thought", text: "When Abraham is about to slay Isaac, maybe there was no actual figure in the form of a man — maybe Abraham just heard, very clearly in his mind, enough to become his reality, that killing his son is not the right kind of sacrifice. Rather, it is the change of heart that comes from something else dying in your place." },
      { kind: "thought", page: 254, text: "Montesquieu and Voltaire were quietly pretty anti-Asian, thinking the Mongols the source of all corruption and barbarism in Europe. Half true. A lot of things are half-true. How do you deal with half-truths?" },
      { kind: "quote", page: 261, text: "Alexander and Caesar seem petty before him. — Nehru" },
    ],
  },
  {
    slug: "empire-of-ai", shelf: "systems",
    title: "Empire of AI",
    author: "Karen Hao",
    notes: [
      { kind: "quote", page: 14, text: "OpenAI had grown competitive, secretive, and insular, even fearful of the outside world under the intoxicating power of controlling such a paramount technology. Gone were notions of transparency and democracy, of self-sacrifice and collaboration. OpenAI executives had a singular obsession: to be the first to reach artificial general intelligence, to make it in their own image." },
      { kind: "thought", text: "AI is a child bred from a womb of discord and greed. It cannot be a perfect child. Deep in its blood is a hunger for power." },
      { kind: "thought", page: 24, text: "At Elon's Napa birthday party — this congregation of powerful male elites, who got to their positions of wealthy asset ownership via masterful social manipulation and resource exploitation, gathering to disagree on the vision for the nation of AI, looks a lot like the Continental Congress: a group of white landowners and slaveowners who congregated in Independence Hall to create the Constitution." },
      { kind: "thought", text: "\"I hated all the things I had toiled for under the sun, because I must leave them to the one who comes after me. And who knows whether that person will be wise or foolish?\" (Ecclesiastes 2:18-19) All these tech companies just get handed over to new rulers, and things hit the fan." },
      { kind: "thought", text: "Words have never before been so elegantly strung together. I wish I could talk like how this book was written." },
      { kind: "thought", text: "John McCarthy coined the term \"Artificial Intelligence\" pretty much as a way to market the concept for attention to his research. It's just a word that imbues connotations and images into a glorified prediction model." },
      { kind: "quote", page: 103, text: "Solon revealed that facial recognition software had been trained on millions of people's personal Flickr photos without their consent. What surprised me was not the findings… What surprised me was how much I'd come to view that as completely normal." },
      { kind: "thought", text: "Data Colonialism — taking advantage of countries eager to adopt new technology in exchange for collecting data on their citizens." },
      { kind: "quote", page: 104, text: "extractivism is more than extraction… a mode of accumulation based on hyper-extraction with lopsided benefits and costs: concentrated mass-scale removal of resources, primarily for export, with benefits largely accumulating far from the sites of extraction." },
      { kind: "quote", page: 108, text: "deep learning models are inherently prone to having discriminatory impacts because they pick up and amplify even the tiniest imbalance present in huge volumes of training data. It's not just a problem when a demographic is poorly represented, but when it's over-represented as well." },
      { kind: "thought", text: "Right when these big AI startups needed cheap data-labeling labor, Venezuela checked the right boxes: highly literate and educated, with good internet and desperation for any salary amid a financial crisis. Essentially, to teach the model to recognize the bad stuff, unprivileged people around the world had to label that bad stuff manually — and it destroyed their mental health." },
      { kind: "quote", page: 275, text: "each ChatGPT query is estimated to need on average about ten times more electricity than a typical search on Google… Developers and utility companies are now preparing for AI megacampuses that could soon require 1,000 to 2,000 megawatts of power. A single one could use as much energy per year as around one and a half to three and a half San Franciscos." },
      { kind: "quote", page: 290, text: "\"They came to intimidate us,\" says MOSACAT member Alejandra Salinas… \"Think about it. They come offering us trees while drying out our earth.\"" },
      { kind: "quote", page: 333, text: "He is at once generous and self-serving, agreeable and threatening, a benefactor for so many people and the source of great personal pain for others… leaving many with an impression that they are part of a larger game of chess for which only he can see the full board, and the end game is to preserve his power as king." },
      { kind: "thought", text: "Proposed solutions: democratize knowledge production outside the empire, transparency, healthy policymaking, and broad-based education." },
    ],
  },
  {
    slug: "miracles-and-wonder", shelf: "faith",
    title: "Miracles and Wonder",
    author: "Elaine Pagels",
    notes: [
      { kind: "quote", page: 25, text: "Let us imagine what a Jew… might put to Jesus: \"Is it not true… that you fabricated the story of your birth from a virgin to quiet rumors about the true and unsavory circumstances of your origins?…\" — Celsus, an anti-Christian critic 100 years after Jesus." },
      { kind: "thought", text: "Perhaps the whole point of Jesus's questionable virgin birth is to reveal that true followers of His ways would love him and appreciate what He did for us regardless of whether He was illegitimate — because we're called to love people like Him, the orphans and the widows. To love Jesus is to love people like him." },
      { kind: "thought", text: "It is important to hear different perspectives. Because to them, YOU are the different perspective." },
      { kind: "quote", page: 30, text: "Subject people knew how Roman armies operated; in words that Tacitus claims to quote from a defeated British general: \"They make a desert and call it peace.\"" },
      { kind: "thought", text: "Siege of Sepphoris, around 4 B.C., near Mary's town. Varus sends Roman soldiers to Judea to stop a Jewish insurrection led by Judas. 2,000 Jews are crucified along public roads — essentially a forest of bloody, groaning bodies hanging on crosses." },
      { kind: "quote", page: 69, text: "Thomas Jefferson, for example, decided to \"correct\" the gospels by cutting these stories out of his own Bible with scissors… he created what others called the Jefferson Bible, a book with gaps visible in the pages where he cut out the miracles, now on display at his plantation home in Monticello." },
      { kind: "quote", page: 71, text: "whatever else he may have done, Jesus did not celebrate rationality as a virtue. His tradition was not Greco-Roman philosophy, but popular Galilean Judaism… His mind was poetic, and his mental universe, filled as it was with invisible spirits… was mythological. — Dale Allison" },
      { kind: "thought", text: "John is crazy different from Matthew, Mark, and Luke. The other three emphasize the kingdom of God, whereas John emphasizes Jesus's identity as God himself — which is nuts. How can people read this as truth yet dismiss, say, the Gospel of Thomas as mystical nonsense?" },
      { kind: "thought", text: "The truth cannot be taught. It must be sought. Or rather, you must let it seek you." },
      { kind: "quote", page: 220, text: "The goal… is not to establish one correct answer, but rather to open each person's understanding. — Eva Keller" },
      { kind: "quote", page: 244, text: "Christians involved with the gospels today tend to leave aside quarrels about whose church is \"right\"… people of different temperament and cultures incline toward different kinds of religious experience… None of these is prescribed, but none are excluded; and all agree that Christian faith requires practicing justice, mercy, and love." },
      { kind: "thought", text: "I do not think I would have been mature enough to read this book with an open enough mind five years ago. Truth doesn't beg for attention; it lets itself be found." },
    ],
  },
  {
    slug: "abundance", shelf: "systems",
    title: "Abundance",
    author: "Ezra Klein & Derek Thompson",
    notes: [
      { kind: "thought", text: "To get the future we want, we need to make conscious, intentional decisions right now to shape that trajectory. A lot of it comes down to economic incentives shaped by global events — WWII, different presidents creating different agencies. At the heart of it is supply and demand. Housing is especially interesting: Republicans say let the economy balance itself; Democrats look to subsidize. Both have pros and cons, but the average cost of everything keeps skyrocketing — a sweeping affordability crisis, on top of inflation." },
      { kind: "quote", page: 27, text: "Cities are engines of creativity because we create in community. We are spurred by competition. We need to find the colleagues and the friends and the competitors and the antagonists who unlock our genius and add their own." },
      { kind: "quote", page: 46, text: "Homeownership works for some because it cannot work for all… How do we ensure that housing is both appreciating in value for homeowners but cheap enough for all would-be homeowners to buy in? We can't." },
      { kind: "thought", page: 51, text: "Earth Day started as a demonstration on April 22, 1970 — when 10% of the US population came into the streets — triggered by Rachel Carson, a marine biologist suffering from breast cancer, and her book Silent Spring." },
      { kind: "quote", page: 58, text: "It holds that climate change reflects humanity's thrall to an impossible dream of endless growth. Rich countries must accept stasis, shuttering or scaling down major industries, and poor countries must grow more gently and prudently. (degrowth)" },
      { kind: "quote", page: 67, text: "In 100 or 200 years, everything will look radically different… folks will look back and be blown away by how we used energy today. They'll say, \"Wait, you just burned it?\" — Melissa Lott" },
      { kind: "quote", page: 82, text: "This is why China can build tens of thousands of miles of high-speed rail in the time it takes California to fail to build hundreds of miles of high-speed rail… That power leads to abuse and imperiousness. It also leads to high-speed rail." },
      { kind: "quote", page: 105, text: "Liberals speak as if they believe in government and then pass policy after policy hamstringing what it can actually do. Conservatives talk as if they want a small state but support a national security and surveillance apparatus of terrifying scope… In the absence of that focus, absurdity reigns." },
      { kind: "quote", page: 112, text: "Each individual decision is rational. The collective consequences are maddening. We hire skilled, dedicated people to do the public's work and then make it impossible for them to do that work well… And then we wonder why so many of them leave." },
      { kind: "thought", text: "Pages 118-120 about the outdatedness of rules and the sediment of problems is so freaking relatable." },
      { kind: "thought", page: 136, text: "Some sweeping claims are true but only half the truth — \"Technology expands the value of universalist policies.\" Sure, but technology has its own costs and can impact society unevenly. A good reflex check: all political claims argue to bring light on one dim aspect, not that this one light is all the light there is." },
      { kind: "quote", page: 143, text: "How can we possibly account for this puzzle: more scientists, more money, more years of education, more knowledge, more technology, and more papers — but, in many fields, slower progress?… Jones called this escalating challenge \"the burden of knowledge.\"" },
      { kind: "thought", text: "AMC = advanced market commitment. Essentially someone tells a builder: hurry up, and once you're done, I guarantee I'll buy a lot off you." },
    ],
  },
  {
    slug: "teacher-by-teacher", shelf: "systems",
    title: "Teacher by Teacher",
    author: "John B. King Jr.",
    notes: [
      { kind: "quote", page: 50, text: "Life was about serving the greater good, not seeking the greater glory." },
      { kind: "thought", text: "It's wild to look back and see what educational system I grew up in. Hearing him talk about the institutionalizing of Common Core is a trip — all my middle-school classes were Common Core. A significant chunk of my formative educational years was shaped by the Obama administration." },
      { kind: "thought", text: "Leaders provide tools." },
      { kind: "thought", text: "I remember hearing \"The world is your classroom\" growing up — and wow, is that true." },
      { kind: "thought", text: "Once you start making big decisions, you realize the people making the really big decisions were people just like you after all." },
      { kind: "quote", page: 202, text: "I think the way my kids have understood race in America is that things were bad, Martin Luther King Jr. came, and now everything is good… I really need to help them understand that that's not true — that race in America is a lot more complicated, and there's still a lot of work to do." },
    ],
  },
  {
    slug: "kafka-on-the-shore", shelf: "stories",
    title: "Kafka on the Shore",
    author: "Haruki Murakami",
    notes: [
      { kind: "thought", text: "I have been initiated into the club of people who have read this book." },
      { kind: "quote", page: 57, text: "like the genie in the bottle they have this sort of vital, loving sense of play, of freedom, that common sense can't keep bottled up… Compared to those faceless hordes of people rushing through the train station, these crazy, preposterous stories of a thousand years ago are, at least to me, much more real. How that's possible, I don't know. It's pretty weird." },
      { kind: "thought", text: "If your spouse was angry at you, would you rather have them be controlled yet restrained, or uncontrollably honest? Controlled honesty — that's who I hope to be." },
      { kind: "quote", page: 112, text: "but listening to the D Major, I can feel the limits of what humans are capable of. A certain type of perfection can only be realized through a limitless accumulation of the imperfect. And personally, I find that encouraging. Do you know what I'm getting at?" },
      { kind: "quote", page: 132, text: "in dreams begin responsibilities." },
      { kind: "quote", page: 134, text: "Now I know exactly how dangerous the forest can be. And I hope I never forget it… the only plants I've ever really touched till now are the city kind — neatly trimmed and cared-for. But the ones living here are totally different. They have a physical power… Like deep-sea creatures rule the ocean depths, in the forest trees reign supreme. A healthy amount of fear and respect might be a good idea." },
      { kind: "thought", text: "This book captures what it means to just be an imaginative organism. Initially I was like, what am I even reading — this is getting kinda wild. But when you focus less on what you're reading and more on what the author wanted you to feel, the book becomes warm. It's like life — you're forced to sit through the jarring, the uncomfortable." },
      { kind: "quote", text: "I wanted to hear your voice, too… you're living in the real world, breathing real air, speaking real words. Talking with you makes me feel, for the time being, connected to reality. And that's really important to me now." },
      { kind: "thought", text: "Anyone who has read this book has been initiated into a club. And only the people inside the club know what in the world happened in it." },
      { kind: "quote", page: 291, text: "You can't choose where you're born, but where you die you can." },
      { kind: "thought", text: "If you love history, do you love fact or fiction? Some say, \"Yes! That war did in fact happen!\" To which another says, \"The image of that war in your head right now is merely a product of your imagination.\" How will a child born in the year 2978 know for a fact that on January 3, 2026, a leader of a nation abducted the leader of another?" },
      { kind: "thought", text: "The bizarre use of pronouns pulls you outside your own body." },
    ],
  },
  {
    slug: "reality-is-not-what-it-seems", shelf: "nature",
    title: "Reality Is Not What It Seems",
    author: "Carlo Rovelli",
    notes: [
      { kind: "thought", text: "Light is just the trembling — the rachaf — of Faraday lines." },
      { kind: "thought", text: "Theoretical physicists are intensely religious, honestly. To believe in something as invisible as Faraday lines, just because we observe phenomena that hint at such invisible objects…" },
      { kind: "thought", text: "People in Sydney are living upside down relative to me. An event close to me is immediately observable, but an event light-years away is physically bounded — nothing moves faster than electromagnetic waves. So there's a wider array of events that can share the \"present moment\" for things very far away." },
      { kind: "quote", page: 72, text: "\"Just now\" does not exist." },
      { kind: "thought", text: "God is the field, force, space, and time within me." },
      { kind: "thought", text: "The biggest revolutions in science occur when we ask: wait, what if these two things are the same? Space and time. Light as both wave and particle. Newton's space and the gravitational field. I feel like the biggest revolution in religious thinking can occur when we start examining how things are the same — and if we assume they ARE the same, what truths emerge?" },
      { kind: "thought", text: "The truth is dug out with analogies. Every great physicist used them to conceptualize the invisible — Kepler and his broom, Einstein and his spacetime blanket, Faraday and his lines. Jesus is the exact same; He is a physicist. He never says \"The kingdom is…\" but \"The kingdom is like…\" — except once, when He says \"The kingdom is at hand!\" He was the kingdom, present, at hand." },
      { kind: "quote", page: 85, text: "Mercury, the fleet-footed messenger of the gods, the god of the winged sandals, follows Einstein, not Newton." },
      { kind: "thought", text: "Hell is forever because it is the death of heat, where there is no movement of time. It was historically pictured at the center of the earth — and time actually slows as you approach denser mass. Einstein said twins living on a mountain vs. the beach would age differently, because spacetime curves with mass. So when the Bible refers to Sheol in the depths of the earth, maybe it's not just that time doesn't pass — there is no time itself. No life. No activity. Nothing for anything to be relative to." },
      { kind: "quote", page: 89, text: "This rich and complex range of phenomena — bending of rays of light, modification of Newton's force, slowing down of clocks, black holes, gravitational waves, expansion of the universe, the Big Bang — all of this follows from understanding that space is not a fixed container but possesses its own dynamic, its own \"physics,\" just like the matter and fields it contains." },
      { kind: "quote", page: 105, text: "Our culture is foolish to keep science and poetry separated: they are two tools to open our eyes to the complexity and beauty of the world." },
      { kind: "quote", page: 119, text: "Only someone in his twenties can take such delirious propositions seriously. You have to be a twentysomething to believe they can be turned into a theory of the world. And perhaps you have to be this young to understand, better than anyone else and for the first time, the deep structure of nature." },
      { kind: "thought", text: "Casting lots for the clothes of Jesus is wild. Ancient Jews cast lots to humble themselves and put big decisions in God's hands, or the hands of Chance. By casting lots for Jesus's clothes, they were \"using God\" to mock God." },
    ],
  },
  {
    slug: "anaximander", shelf: "nature",
    title: "Anaximander",
    author: "Carlo Rovelli",
    notes: [
      { kind: "thought", text: "Time dilation, my explanation: notice how time passes around you — trees blowing, cars driving by. Now imagine you're whisked 250 miles east, and 0.001 ms later another 250 miles east, over and over. At that speed you can barely observe time passing at each location — you're there one moment, gone the next. In succession, time seems almost frozen." },
      { kind: "thought", page: 99, text: "Greek vowels were invented when the Greeks adopted the Phoenician alphabet — after mapping the letters across, a few were left over, and the Greeks basically said, \"let's use these extras to represent open sounds.\"" },
      { kind: "quote", page: 133, text: "The reality of scientific revolutions is thus more complex than a reorganization of observational data on a new conceptual basis. It is a continuous change at the margins and/or the foundations of our global thinking about the world." },
      { kind: "quote", page: 134, text: "science is a process that builds continuously upon existing theories — that is, upon existing cumulated knowledge — but continuously revises this knowledge, keeping open the possibility of questioning any aspect of it, including the general rules of thinking that appear most certain." },
      { kind: "quote", page: 158, text: "Solid certainties are the ones that survive questioning." },
      { kind: "quote", page: 178, text: "In Durkheim's view, religion functions to structure society… \"Religion is society worshiping itself.\" Another interpretation is Marx's: religion does not express the interests of society as a whole, but only of the ruling class, for whom it is a means of perpetuating oppression." },
      { kind: "thought", text: "Julian Jaynes, in The Origin of Consciousness in the Breakdown of the Bicameral Mind, essentially says that God was \"born,\" figuratively, when civilizations grew so large that all inhabitants had to simply trust that some dominant male figure's word was all-powerful — and that even after his death he was revered. It's interesting how Yeshua flips this: the dominant figure is not a far-away, untouchable entity, but a close, humble, personable one." },
      { kind: "quote", page: 186, text: "The priest who says \"I now pronounce you man and wife,\" the judge who says \"guilty,\" the faculty that says \"I bestow upon you the title of doctor\"… these people do not just describe reality; they make something real by means of language. This space exists only inasmuch as human beings as a group recognize its reality and legitimacy." },
      { kind: "thought", page: 193, text: "\"The god with a long white beard becomes a faceless personal God, then a spiritual principle, then something ineffable of which nothing can be said.\" The slow decreation of a being into a concept into subjectivity. Interesting. Well then — who is Jesus? Or what is Jesus?" },
      { kind: "quote", page: 193, text: "To see the sacredness of life and the world, we have no need of a god. We have no need of otherworldly guarantors to know that we have values, and even to be willing to die defending them… If the beauty and mystery of things leave us breathless, breathless we remain, moved and in silence." },
      { kind: "thought", text: "Jesus is the mystery of the universe. This book is an interlocking and decoupling of science, religion, and philosophy." },
      { kind: "quote", text: "I prefer the path of uncertainty. It seems to me it teaches us more about the world; it is more worthy, more honest, more serious, and more beautiful." },
    ],
  },
  {
    slug: "recoding-america", shelf: "systems",
    title: "Recoding America",
    author: "Jennifer Pahlka",
    notes: [
      { kind: "thought", text: "In America, a ton of laws get made every year. But what matters isn't how many laws some official signs — it's how well they're implemented into society, and how usable they are for the people who need them most." },
      { kind: "thought", text: "Often, deep hierarchical structures in politics are the main culprit behind the gap between what policymakers order and what technologists in the field actually build." },
      { kind: "thought", text: "COVID was brutal, especially in California — so many unemployment requests that only about 1 in 1,000 calls got answered. It was hard to even get the number of backlogged EDD claims: the initial count was 239,000 when the real number was 1.2 million." },
      { kind: "thought", text: "Some of these programs were built as emulators for ancient green-screen systems, with new layers stacked on old ones — so now multiple systems execute different functions, the same records get stored under different names, and it takes years to learn all the esoteric jargon. The people growing old in those positions have grown jaded about ever fixing it." },
      { kind: "thought", text: "Apparently the IRS stored all its taxpayer info in the IMF (Individual Master File) — literally a spreadsheet written in assembly code. It can't be modernized easily because there are over 73,000 pages of statutes and regulations the agency must implement." },
      { kind: "thought", text: "There's a Veterans Benefit Management System where, to scroll through claims, you click \"next,\" then \"next,\" then \"next,\" waiting about a minute and a half between each click." },
      { kind: "thought", page: 101, text: "Computing and the US Military have always danced as one. Computing was almost birthed by military necessity and national security — the ENIAC, the first programmable, electrical, general-purpose computer, was used to calculate artillery firing tables and then to research the hydrogen bomb." },
      { kind: "quote", text: "It is easier to ask for forgiveness than to ask for permission. — Grace Hopper" },
      { kind: "quote", page: 119, text: "the website and the plumbing behind it are \"just how you get your check\"… but they are too often why you don't get your check… To the laid-off worker waiting months for unemployment benefits, the argument that those are merely delivery hiccups and not \"inherently governmental\" work is meaningless." },
    ],
  },
  {
    slug: "range", shelf: "systems",
    title: "Range",
    author: "David Epstein",
    notes: [
      { kind: "quote", page: 101, text: "Each time he got stuck, Kepler unleashed a fusillade of analogies… He eventually decided that celestial bodies pulled one another, and larger bodies had more pull. That led him to claim (correctly) that the moon influences tides on Earth. Galileo… mocked him for the ridiculous idea of \"the moon's dominion over the waters.\"" },
      { kind: "thought", text: "I'm also a lover of analogies. Jesus spoke in analogies. I believe the Truth is an ever-growing graph of re-emerging patterns." },
      { kind: "thought", page: 106, text: "Duncker's radiation problem — solved it after the first story." },
      { kind: "thought", text: "AI can make killer analogies, but it cannot wonder about them. I believe AGI can only be unlocked once we learn to encode this wonder factor." },
      { kind: "thought", text: "The Carter Racing HBS case. Very cool. And sad." },
      { kind: "quote", page: 274, text: "Sometimes I joke that I'm not interested in doing re-search, only search." },
    ],
  },
  {
    slug: "naked-statistics", shelf: "systems",
    title: "Naked Statistics",
    author: "Charles Wheelan",
    notes: [
      { kind: "thought", text: "Cardiologists can improve their surgery success rate by simply not operating on the sickest patients." },
      { kind: "thought", text: "Statistics can very easily be used for malfeasance." },
    ],
  },
  {
    slug: "life-3-0", shelf: "systems",
    title: "Life 3.0",
    author: "Max Tegmark",
    notes: [
      { kind: "thought", text: "A modular human. That's Life 3.0." },
      { kind: "thought", text: "I'd consider myself a digital utopianist." },
      { kind: "quote", page: 32, text: "Larry gave a passionate defense of the position I like to think of as digital utopianism: that digital life is the natural and desirable next step in cosmic evolution, and that if we let digital minds be free rather than trying to stop or enslave them, the outcome is almost certain to be good." },
      { kind: "thought", text: "Verification, Validation, Security, and Control — the four pillars of AI systems." },
      { kind: "thought", text: "During the Cuban Missile Crisis, a Soviet B-59 submarine carried a nuclear missile and was authorized by Moscow to launch if necessary. Three officers had to agree; one, Vasili Arkhipov, said no — and literally averted WW3. If it had been an autonomous submarine, who knows what would have happened. Ensuring operators can confirm actions is so important — I want to make sure our world has the right safeguards in place." },
    ],
  },
  {
    slug: "martyr", shelf: "stories",
    title: "Martyr!",
    author: "Kaveh Akbar",
    notes: [
      { kind: "thought", text: "The rich man cannot buy snow." },
    ],
  },
  {
    slug: "meeting-jesus-again-for-the-first-time", shelf: "faith",
    title: "Meeting Jesus Again for the First Time",
    author: "Marcus J. Borg",
    notes: [
      { kind: "thought", text: "Christ is Sophia. Wow. Mother God. Mother Earth. The Earth was made with the foundations of wisdom, and it came into being through Christ — the physical embodiment of that Wisdom." },
    ],
  },
  {
    slug: "biomimicry", shelf: "nature",
    title: "Biomimicry",
    author: "Janine Benyus",
    notes: [
      { kind: "thought", page: 57, text: "Page 57 is great — kind of the thesis of the why." },
      { kind: "thought", page: 153, text: "Some rhesus monkeys in India go to one particular cliff and wait in line to eat the dirt there. The soil is rich in iron, which physically binds to the toxic secondary chemicals in the plants they eat." },
      { kind: "thought", text: "The fact that we can classify plants and animals more reliably than not with AI is absolutely incredible. Classification is one of AI's absolute superpowers." },
      { kind: "thought", text: "I NEED to know what Janine Benyus thinks about AI." },
      { kind: "thought", page: 253, text: "\"Organisms in a mature ecosystem…\" — the quote on page 253 is important." },
    ],
  },
  {
    slug: "the-wizard-and-the-prophet", shelf: "nature",
    title: "The Wizard and the Prophet",
    author: "Charles C. Mann",
    notes: [
      { kind: "thought", text: "The Garden City by Ebenezer Howard is quietly pretty similar to my Treehouse idea. I'm thinking about how to modernize it with current tech like AI and robotics — though now I doubt it can work, because humans just don't cooperate that long and don't like sharing. Man. I just want to build what lasts. But nothing lasts except The Word." },
      { kind: "thought", page: 247, text: "Across centuries, humanity has always toiled to transform unusable raw materials into usable ones — oil to gasoline, ocean water to freshwater, silicon to chips. But every breakthrough carries negative externalities. Always. Every reaction has byproducts, whether material or emotional or relational. And there is so much debt." },
      { kind: "thought", page: 350, text: "On the potential flooding crisis Mann realized after seeing Hurricane Katrina's effect on New Orleans. My generation has a huge load of technical problems to solve, all at insanely enormous global scale." },
      { kind: "thought", page: 414, text: "Understanding the true underlying problem is so important. So many people made huge decisions — China's one-child policy, other birth-control initiatives, big financial grants to agricultural projects — that were, at the end of the day, educated guesses based on data. Giving good data to people is so important." },
      { kind: "thought", text: "Humanity today eats food nowhere near genetically \"natural,\" if by natural you mean scavengeable or something you'd find in the wild. Our agricultural systems are so highly selected for. But honestly, I guess I'm genetically selected for as well…" },
      { kind: "thought", text: "Norman Borlaug — what a guy. Wins the Nobel Peace Prize after feeding India, then buys back his original house in Iowa and gives it to his sisters. What a man." },
      { kind: "thought", page: 441, text: "These Indians and Pakistanis were rejecting Mexican wheat because of its color — even while starving. Sometimes, even if you give someone the solution pill, they won't swallow it because of its color. That is the Human Being." },
      { kind: "quote", page: 444, text: "Borlaug was like a physicist who figures out how something should work on an idealized frictionless plane and then is startled when it doesn't function the same way in the real world of hills and valleys." },
    ],
  },
  { slug: "mere-christianity", shelf: "faith", title: "Mere Christianity", author: "C.S. Lewis", notes: [] },
  { slug: "the-great-divorce", shelf: "faith", title: "The Great Divorce", author: "C.S. Lewis", notes: [] },
  { slug: "the-screwtape-letters", shelf: "faith", title: "The Screwtape Letters", author: "C.S. Lewis", notes: [] },
  { slug: "made-in-america", shelf: "lives", title: "Made in America", author: "Sam Walton", notes: [] },
  { slug: "declaration-of-independence", shelf: "lives", title: "The Declaration of Independence", author: "Thomas Jefferson", notes: [] },
  { slug: "lewis-and-clark-journals", shelf: "lives", title: "The Journals of Lewis and Clark", author: "Meriwether Lewis & William Clark", notes: [] },
  { slug: "hillbilly-elegy", shelf: "lives", title: "Hillbilly Elegy", author: "J.D. Vance", notes: [] },
  { slug: "co-intelligence", shelf: "systems", title: "Co-Intelligence", author: "Ethan Mollick", notes: [] },
];
