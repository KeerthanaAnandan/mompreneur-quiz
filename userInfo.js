let firstTypePoints = sessionStorage.getItem("firstTypePoints");
let secondTypePoints = sessionStorage.getItem("secondTypePoints");
let thirdTypePoints = sessionStorage.getItem("thirdTypePoints");
let fourthTypePoints = sessionStorage.getItem("fourthTypePoints");

let pointop = 0;
let mess;
let typo;
//first
if (
  firstTypePoints > secondTypePoints &&
  firstTypePoints > thirdTypePoints &&
  firstTypePoints > fourthTypePoints
) {
  typo = "You are a Creative   ";
  mess = [
    'You’re a person that finds joy in turning your ideas into reality.',
    "At heart, you’re an artist. You love the art of curation, getting your hands dirty, and the joy you experience when others appreciate your masterpiece. Your friends love your zest for life and value your ability to transform everyday experiences into something inspiring. Your cup will always be full, because you have a knack for discovering the beauty that lies within.",

    " What You're Great At:",
    "Creative people have the ability to renew themselves and transform each experience into something beautiful! You have the courage to ask big questions, create memorable moments, and have a distinct way of turning life’s obstacles into a work of art and self-expression. People admire your honesty and self-awareness, these are some of your best qualities.",
    "Potential Trouble Spots:",
    "There are so many ideas circling around in your mind that it can be hard to stay grounded without letting life pull you of course. The overwhelm can often cause you “option paralysis” and make it so that you don’t do anything at all. Because your self-worth is often tied to the creative work that you produce, it can be daunting to put yourself out there for the world to see.",
    "Set Yourself Up for Success:",
    "Use your creative mind to build the most important thing you will ever create, your personal brand. This is a lifelong asset, one that will never go out of style. Treat this as your most valued work of art, something that you are continuing to grow and water for years to come. If sticking with a consistent plan feels hard for you, it could be time to seek help from a branding and business strategist.",
    "If you’re someone who needs accountability, insight, and guidance so you can focus on your message to send to your audience, then you’re ready to work with a Personal Brand and Business Strategist - like Dr. Ali Griffith, click here for a visibility power results consult session.",
    " To learn more about creating your own personal brand strategies sign up for our NEXT free challenge or masterclass ",
  ];
}
//second
if (
  secondTypePoints > firstTypePoints &&
  secondTypePoints > thirdTypePoints &&
  secondTypePoints > fourthTypePoints
) {
  typo = "You are an Entrepreneur";
  mess = [
    'You’re a person who executes, taking on greater than normal risk in order to do so. At heart, you’re a starter.  You love coming up with new ideas, inspiring others to join your cause, and sharing your passion with the world. Your colleagues admire your self-discipline and resourcefulness.  You’ll never run out of motivation because you’re always one step ahead. ',
    'What You\'re Great At',
    "Entrepreneurs have the ability to turn their dreams into reality. You’re the kind of person who executes and delivers, even when it’s unbelievably hard.  People are inspired by what you’re willing to sacrifice, and the way you always seem to accomplish your goals. They say you’re talented, but you know that hard work trumps talent every time",
    "Potential Trouble Spots",
    "We know you're not afraid of a little hard work. You may have your own business, (or maybe you’re thinking about starting one). Before you go any further, ask yourself these questions:",
    " “◾Am I part of the ‘doing’ economy or the ‘being’ economy?"," ◾ Do I want to ‘be’ the business or ‘work’ for the business?” ",
    " With the power of social media, we can monetize our knowledge without sacrificing our personal time and freedom. We can actually get paid because of who we are, instead of just what we do. Set Yourself Up for Success Building your personal brand = ultimate freedom. It means getting to work with dream clients who can’t wait to work with you.",
    " Do you know how to build your personal brand? ",
    "This is your ultimate competitive advantage in 2021. It’s time to start leveraging your own social media profiles to support the growth of your business. You could be missing out on one of the biggest opportunities of our era.",
    "If you’re not sure how to get started, I’m here to help you. It’s literally my mission! If you’re ready to work with a Personal Brand and Business Strategist - like Dr. Ali Griffith, to create your own brand plan click here for a plan to power results consult session.",
           "To learn more personal brand strategies with a plan, sign up for our next free challenge or masterclass. ",
  ];
}
//third
else if (
  thirdTypePoints > firstTypePoints &&
  thirdTypePoints > secondTypePoints &&
  thirdTypePoints > fourthTypePoints
) {
  typo = "Influencer";
  mess = [
    " You’re a person with the capacity to affect change and sway decision makers. At heart, you’re a guide and resource to others. You love to share your thoughts, open people’s eyes, and make an impact on the world. Your friends come to you for advice and appreciate your opinions on any number of subjects. Your followers are moved by the way you see the world. ",
    "You are happiest when your hard work results in positive change in others’ lives. ",
    " What You're Great At ",
    " Influencers are special (shhh don’t tell the others). You love to share your personality, knowledge, and lifestyle with anyone who’s paying attention. And here’s the beauty of this—your audience listens to you—and more importantly, they trust you! ",
    "Potential Trouble Spots ",
    "You could be missing out on one of the biggest opportunities of our era. Don’t let your personal influence fall by the wayside--channel it into a brand that is purpose-driven and meaningful. Ground your social media presence by identifying what your principles and professional expertise are. ",
      "How can you provide value to your audience in the most genuine way possible? It’s time to show up consistently for the people who are listening.",
      "Set Yourself Up for Success",
      "Do you have a personal brand statement? It’s time to write one. Crafting a personal brand statement is like writing a mission statement for a person. ",
      "It ensures that your social media presence remains purposeful and effective. If you’re someone who needs accountability, insight, and guidance as you clarify the message you want to send to your audience, then you’re ready to work with a Personal Brand and Business Strategist - like Dr. Ali Griffith, click here for a clarity consult session.",
      "To learn more personal brand strategies,sign up for our next free challenge or masterclass. ",

  ];
}
//fourth
else if (
  fourthTypePoints > firstTypePoints &&
  fourthTypePoints > secondTypePoints &&
  fourthTypePoints > thirdTypePoints
) {
  typo = "You are a Leader ";
  mess = [
 " You’re a person that finds joy in turning your ideas into reality.",
 "You’re a person with comprehensive knowledge and expertise in a particular area. At heart, you’re a specialist in what you do. You love to re-examine foundational ways of thinking, learn about new trends and developments, and share your expertise with others. Your colleagues know that they can come to you for your deep knowledge of your field. You’ll never get bored at work, because you’re always discovering the next great thing.",
"What You're Great At",
"People think of you as a leader. You’re wise, thoughtful, and engaged with the world around you. Your knowledge and skill set makes you a person that people can trust. You know your subject cold, and you can likely teach it better than anyone else. This kind of confidence sets you apart from your competitors and hyper attracts a community of people who want to be connected to you.",
"Potential Trouble Spots",
"Your expertise will mean nothing if no one can hear you. Are you setting yourself up for success? In a world where anything can happen, and everyone's competing for the same clients and customers, how are you choosing to solidify your place online? Building your supportive team is your competitive advantage.",
"Set Yourself Up for Success",
"Real expertise creates trust, benefits your audience, and builds a profitable business. If you’re ready to share your knowledge with the world, it’s time to work with a Personal Brand Strategist who can help you amplify your message - ",
"If you’re someone who needs accountability, insight, and guidance so you can become more visible with your unique message to connect with your target audience, then you’re ready to work with a Personal Brand and Business Strategist - like Dr. Ali Griffith, click here for your visibility power results consult session.",
":To learn more about creating your own personal brand strategies sign up for our next free challenge HERE",  

]
}

const mao = mess.map((ms) => `<li>` + ms + `</li>`).join("");

document.querySelector(".headmsg").innerHTML = typo;
const msgme = document.querySelector(".msghere");
msgme.className = "center-item";
//document.querySelector(".msghere").innerHTML = mao;

msgme.innerHTML = mao;
//document.querySelector(".usertype").value = typo;

//document.querySelector(".usertype").style.display = "none";

///////////////////social share

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");

const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hey there,Checkout my skin type!");
  // let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",

    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  // linkedinBtn.setAttribute(
  // "href",
  //"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com"
  //`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  //);
  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();
