// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Hey bro. Everything good with you?",
// additions (not original)
"Want to hangout later and talk?.",
"What are your plans today?",
];

var elizaFinals = [
"Catch you later. I always enjoy our talks.",
// additions (not original)
"See ya. I needed this talk man.",
"Talk to you later. Call me tomorrow when you can.",
"Dude we've been talking for almost an hour. We should pick this up tomorrow.",
"Do you want to hangout and get some food tomrrow to talk? Catch you then."
];

var elizaQuits = [
"bye",
"peace",
"later",
"see ya",
"catch you later"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"for sure", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "I don't get what you're saying.",
     "And?",
     "What do you think?",
     "You like talking about certain topics?",
     "Get to the point bro.",
     "There's more?",
     "We don't have to talk about it man?"
  ]]
]],
["sorry", 0, [
 ["*", [
     "Don't worry about it.",
     "You're good.",
     "You never have to apologize to me man.",
     "I'm not offended. Keep goin."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Do you think about the past (2) ?",
     "Does this remind you (2)of anything else?",
     "What else do you recall?",
     "Why makes you think of this (2) just now ?",
     "What does this make you think of right now (2) ?",
     "What does this have to do with me (2) ?",
     "Anthing else (2) remind you of ?"
  ]],
 ["* do you remember *", [
     "Did you think I would forget (2) ?",
     "Why should I think of this (2) now ?",
     "What's your point' (2) ?",
     "goto what",
     "You brought up (2) ?"
  ]],
 ["* you remember *", [
     "How did I miss that (2) ?",
     "What about (2) should I remember ?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Can you think of why you might forget (2) ?",
     "Why can't you remember (2) ?",
     "Do you think about it a lot (2) ?",
     "Does forgetting bother your$1 ?",
     "Are you trying to forget it ?",
     "Do you tend to forget ?",
     "Are you not telling the whole story (2) ?"
  ]],
 ["* did you forget *", [
     "Why are you asking ?",
     "Are you sure you told me ?",
     "Would me forgetting annoy you (2) ?",
     "Why would I remember (2) just now ?",
     "goto what",
     "What else do you know (2)?"
  ]]
]],
["if", 3, [
 ["* if *", [
     "Do you think it's likely that (2) ?",
     "Do you wish that (2) ?",
     "What do you know about (2) ?",
     "Really, if (2) ?",
     "What would you do if (2) ?",
     "But what are the odds that (2) ?",
     "What does this idea lead to ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) ?",
     "Do you daydream(2) while you're'awake ?",
     "Have you ever dreamed (2) before ?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "What do you think that dream means?",
     "How much do you dream?",
     "Who are in your dreams?",
     "Do you think dreams are connected with our problems?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "You don't seem sure.",
     "Why aren't you confident?",
     "Stop being so negative?",
     "You aren't sure?",
     "You didn't know that?",
     "How much do you wanna bet?"
  ]]
]],
["name", 15, [
 ["*", [
     "I don't care about names.",
     "I already told you, I don't care about names -- go on."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I already said I don't understandget
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you already I don't get French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I said this already, I don't get Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I said this before, I don't know Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I only talk in English."
  ]]
]],
["hello", 0, [
 ["*", [
     "Hey. What's bothering you.",
     "Hi. Wanna tell me what's up with you?"
  ]]
]],
["computer", 50, [
 ["*", [
     "Do worry about machines?",
     "What made you talk about machines?",
     "What makes you think machines are your problem?",
     "Don't you think computers help people ?",
     "Why do machines stress you out?",
     "What's your take on machines'?",
     "Do you see me only as a computer program?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you believe you're'(2) ?",
     "Would you want to be (2) ?",
     "Do you wish I would tell you that you are (2) ?",
     "What would it mean if you were (2) ?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am' ?",
     "I don't follow."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Why are you curious whether I'm (2) or not ?",
     "Would you like it if I wasn't (2) ?",
     "Maybe I'm (2) in your imagination.",
     "Do you sometimes think I am (2) ?",
     "goto what",
     "Would you care?",
     "What if I were (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Did you think they might not be (2) ?",
     "Would you like it if they were not (2) ?",
     "What if they were not (2) ?",
     "Are they always (2) ?",
     "Maybe they are (2).",
     "Are you sure they are (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "Why do you care if (2) ?",
     "What about your own (2) ?",
     "Are you worried about someone else's (2) ?",
     "For real, my (2) ?",
     "What makes you think of my (2) ?",
     "Do you want my (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2) ?",
     "Do you think you were (2) ?",
     "Were you (2) ?",
     "What would you think if you were (2) ?",
     "What does ' (2) ' mean to you ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you actually ?",
     "Why do you tell me you were (2) now ?",
     "What if I already know you were (2)."
  ]],
 ["* was you *", [
     "Would you like to believe I was (2) ?",
     "What makes you think that I was (2) ?",
     "What do you think ?",
     "Maybe I was (2).",
     "What if I was (2) ?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "What would it mean if you got (3) ?",
     "Why do you want (3) ?",
     "Let's say you got (3) soon.",
     "What if you never got (3) ?",
     "What would getting (3) mean to you ?",
     "What does wanting (3) have to do with our conversation?"
  ]],
 ["* i am* @sad *", [
     "I am sorry to hear that you are (3).",
     "Do you think coming here will help you avoid (3) ?",
     "I bet it's not gun to be (3).",
     "Can you tell me what made you (3) ?"
  ]],
 ["* i am* @happy *", [
     "How have I helped you become (3) ?",
     "Has your treatment made you (3) ?",
     "What makes you (3) just now ?",
     "Can you tell me why all the sudden you're (3) ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really believe that?",
     "But you're not sure' (3).",
     "Do you really doubt you (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me ?",
     "How long have you been (2) ?",
     "Do you believe it's normal to be (2) ?",
     "Do you like being (2) ?",
     "Do you know someone who is (2) ?"
  ]],
 ["* i @cannot *", [
     "What makes you think that you can't (3) ?",
     "Did you even try?",
     "Maybe you could (3) now.",
     "Do you really want to be able to (3) ?",
     "What if you could (3) ?"
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "Do you wish you could (2) ?",
     "Does that bother you ?"
  ]],
 ["* i feel *", [
     "Tell me more about what you're feeling.",
     "Do you feel that way a lot (2) ?",
     "Do you like feeling (2) ?",
     "What does that feeling (2) remind you ?"
  ]],
 ["* i * you *", [
     "Maybe in your dreams we (2) each other.",
     "Do you hope to (2) me ?",
     "I think you should (2) me.",
     "Do you (2) anyone else ?"
  ]],
 ["*", [
     "You say (1) ?",
     "Can you dumb that down?",
     "Do you say (1) for a certain reason?",
     "That's really interesting."
  ]]
]],
["you", 0, [
 ["* you make me think of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Does it make you happy to think I'm(2) ?",
     "Do you ever wish you were (2) ?",
     "Maybe you want to be (2)."
  ]],
 ["* you* me *", [
     "Why do you think I (2) you ?",
     "You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
     "For real, I (2) you ?",
     "Do you hope that I (2) you ?",
     "Maybe I did (2) you -- what would that mean?",
     "Anyone else believe I (2) you ?"
  ]],
 ["* you *", [
     "We're talking about you -- not me.",
     "Oh, I (2) ?",
     "You're not actually gossiping about me -- are you ?",
     "How do you feel now?"
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem really happy.",
     "You sure.",
     "I get it.",
     "I gotcha."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you positive nobody(2)?",
     "I bet someone (2) .",
     "Can you think of anyone at all?",
     "Are you thinking of someone special?",
     "Who can I ask?",
     "You have someone in mind, don't you?",
     "Who do you think you are talking about ?"
  ]],
 ["*", [
     "Are you saying no just to say it?",
     "You are being a buzzkill.",
     "Why not?",
     "Cmon, why?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does this have anything to do with (2) ?",
     "Why don't we think a little harder (2).",
     "You said before (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "What else should I know about your family.",
     "Do you have extended family (4) ?",
     "Your (3) ?",
     "What else do you think of when (3) ?"
  ]],
 ["* my *", [
     "Your (2) ?",
     "Why do you say your (2) ?",
     "Does that mean anything else belongs to you?",
     "Does it matter to you that (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe in me (2) right?",
     "goto what",
     "You want me to be able to (2).",
     "Maybe you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Even if you could (2) they rely on you more.",
     "Do you want to be able to (2) ?",
     "Maybe you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "What makes you ask?",
     "Does that question make you wonder?",
     "What do you really wanna know?",
     "What's on your mind?",
     "What do you want to hear?",
     "What's your take?",
     "What do you think when you ask?",
     "Did you ever ask that before?",
     "Did you ask anyone else?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason?",
     "Anything else come to mind?",
     "Does that solve anything else?",
     "What else could it be?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you think I don't (2) ?",
     "Maybe I will (2) at some point.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Do you think this will help (2) ?",
     "Do you have any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "For real, (2) ?",
     "Absolutely not (2).",
     "Does anyone come to mind?",
     "Who, for example?",
     "Are you thinking of someone special?",
     "Who can I ask?",
     "Someone important maybe?",
     "You have someone in mind, don't you?",
     "Who do you think you're talking about?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of something specific?",
     "When?",
     "What are you thinking of?",
     "For real, anytime?"
  ]]
]],
["alike", 10, [
 ["*", [
     "What do you mean?",
     "Do you see any resemblence?",
     "What does that similarity mean?",
     "Did you make any other connections?",
     "What do you think this resemblence means?",
     "What do you think the connection is?",
     "Do you actually think there's a real connection?",
     "How?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different?",
     "What makes it different to you?",
     "What does that difference mean?",
     "What other differences do you see?",
     "What do you think that difference means?",
     "Do you think there could be a connection?",
     "How?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
  /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
