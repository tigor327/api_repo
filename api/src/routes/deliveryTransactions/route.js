const {
  getAllDeliveryTransactionsController,
  registerDeliveryTransactionController,
  removeDeliveryTransactionController,
  updateDeliveryTransactionController,
  getAllDeliveryByIdTransactionsController,
} = require("../../controllers/deliveryTransaction/index");

const deliveryTransactionRoutes = ({
  deliveryTransactionRouter,
  makeExpressCallback,
}) => {
  deliveryTransactionRouter.get(
    "/",
    makeExpressCallback(getAllDeliveryTransactionsController)
  );
  // deliveryTransactionRouter.get(
  //   "/:id",
  //   makeExpressCallback(getAllDeliveryByIdTransactionsController)
  // );
  // deliveryTransactionRouter.post(
  //   "/",
  //   makeExpressCallback(registerDeliveryTransactionController)
  // );
  // deliveryTransactionRouter.delete(
  //   "/:id",
  //   makeExpressCallback(removeDeliveryTransactionController)
  // );
  // deliveryTransactionRouter.patch(
  //   "/:id",
  //   makeExpressCallback(updateDeliveryTransactionController)
  // );

  return deliveryTransactionRouter;
};

module.exports = deliveryTransactionRoutes;

// THE ADVENTURES OF SHERLOCK HOLMES

// Arthur Conan Doyle

//  Table of contents

// A Scandal in Bohemia
// The Red-Headed League
// A Case of Identity
// The Boscombe Valley Mystery
// The Five Orange Pips
// The Man with the Twisted Lip
// The Adventure of the Blue Carbuncle
// The Adventure of the Speckled Band
// The Adventure of the Engineer's Thumb
// The Adventure of the Noble Bachelor
// The Adventure of the Beryl Coronet
// The Adventure of the Copper Beeches

// A SCANDAL IN BOHEMIA

//  Table of contents
//       Chapter 1
//       Chapter 2
//       Chapter 3

// CHAPTER I

// To Sherlock Holmes she is always the woman. I have seldom heard him
// mention her under any other name. In his eyes she eclipses and
// predominates the whole of her sex. It was not that he felt any
// emotion akin to love for Irene Adler. All emotions, and that one
// particularly, were abhorrent to his cold, precise but admirably
// balanced mind. He was, I take it, the most perfect reasoning and
// observing machine that the world has seen, but as a lover he would
// have placed himself in a false position. He never spoke of the softer
// passions, save with a gibe and a sneer. They were admirable things
// for the observer--excellent for drawing the veil from men's motives
// and actions. But for the trained reasoner to admit such intrusions
// into his own delicate and finely adjusted temperament was to
// introduce a distracting factor which might throw a doubt upon all his
// mental results. Grit in a sensitive instrument, or a crack in one of
// his own high-power lenses, would not be more disturbing than a strong
// emotion in a nature such as his. And yet there was but one woman to
// him, and that woman was the late Irene Adler, of dubious and
// questionable memory.

// I had seen little of Holmes lately. My marriage had drifted us away
// from each other. My own complete happiness, and the home-centred
// interests which rise up around the man who first finds himself master
// of his own establishment, were sufficient to absorb all my attention,
// while Holmes, who loathed every form of society with his whole
// Bohemian soul, remained in our lodgings in Baker Street, buried among
// his old books, and alternating from week to week between cocaine and
// ambition, the drowsiness of the drug, and the fierce energy of his
// own keen nature. He was still, as ever, deeply attracted by the study
// of crime, and occupied his immense faculties and extraordinary powers
// of observation in following out those clues, and clearing up those
// mysteries which had been abandoned as hopeless by the official
// police. From time to time I heard some vague account of his doings:
// of his summons to Odessa in the case of the Trepoff murder, of his
// clearing up of the singular tragedy of the Atkinson brothers at
// Trincomalee, and finally of the mission which he had accomplished so
// delicately and successfully for the reigning family of Holland.
// Beyond these signs of his activity, however, which I merely shared
// with all the readers of the daily press, I knew little of my former
// friend and companion.

// One night--it was on the twentieth of March, 1888--I was returning
// from a journey to a patient (for I had now returned to civil
// practice), when my way led me through Baker Street. As I passed the
// well-remembered door, which must always be associated in my mind with
// my wooing, and with the dark incidents of the Study in Scarlet, I was
// seized with a keen desire to see Holmes again, and to know how he was
// employing his extraordinary powers. His rooms were brilliantly lit,
// and, even as I looked up, I saw his tall, spare figure pass twice in
// a dark silhouette against the blind. He was pacing the room swiftly,
// eagerly, with his head sunk upon his chest and his hands clasped
// behind him. To me, who knew his every mood and habit, his attitude
// and manner told their own story. He was at work again. He had risen
// out of his drug-created dreams and was hot upon the scent of some new
// problem. I rang the bell and was shown up to the chamber which had
// formerly been in part my own.

// His manner was not effusive. It seldom was; but he was glad, I think,
// to see me. With hardly a word spoken, but with a kindly eye, he waved
// me to an armchair, threw across his case of cigars, and indicated a
// spirit case and a gasogene in the corner. Then he stood before the
// fire and looked me over in his singular introspective fashion.

// "Wedlock suits you," he remarked. "I think, Watson, that you have put
// on seven and a half pounds since I saw you."

// "Seven!" I answered.

// "Indeed, I should have thought a little more. Just a trifle more, I
// fancy, Watson. And in practice again, I observe. You did not tell me
// that you intended to go into harness."

// "Then, how do you know?"

// "I see it, I deduce it. How do I know that you have been getting
// yourself very wet lately, and that you have a most clumsy and
// careless servant girl?"

// "My dear Holmes," said I, "this is too much. You would certainly have
// been burned, had you lived a few centuries ago. It is true that I had
// a country walk on Thursday and came home in a dreadful mess, but as I
// have changed my clothes I can't imagine how you deduce it. As to Mary
// Jane, she is incorrigible, and my wife has given her notice, but
// there, again, I fail to see how you work it out."

// He chuckled to himself and rubbed his long, nervous hands together.

// "It is simplicity itself," said he; "my eyes tell me that on the
// inside of your left shoe, just where the firelight strikes it, the
// leather is scored by six almost parallel cuts. Obviously they have
// been caused by someone who has very carelessly scraped round the
// edges of the sole in order to remove crusted mud from it. Hence, you
// see, my double deduction that you had been out in vile weather, and
// that you had a particularly malignant boot-slitting specimen of the
// London slavey. As to your practice, if a gentleman walks into my
// rooms smelling of iodoform, with a black mark of nitrate of silver
// upon his right forefinger, and a bulge on the right side of his
// top-hat to show where he has secreted his stethoscope, I must be
// dull, indeed, if I do not pronounce him to be an active member of the
// medical profession."

// I could not help laughing at the ease with which he explained his
// process of deduction. "When I hear you give your reasons," I
// remarked, "the thing always appears to me to be so ridiculously
// simple that I could easily do it myself, though at each successive
// instance of your reasoning I am baffled until you explain your
// process. And yet I believe that my eyes are as good as yours."

// "Quite so," he answered, lighting a cigarette, and throwing himself
// down into an armchair. "You see, but you do not observe. The
// distinction is clear. For example, you have frequently seen the steps
// which lead up from the hall to this room."

// "Frequently."

// "How often?"

// "Well, some hundreds of times."

// "Then how many are there?"

// "How many? I don't know."

// "Quite so! You have not observed. And yet you have seen. That is just
// my point. Now, I know that there are seventeen steps, because I have
// both seen and observed. By-the-way, since you are interested in these
// little problems, and since you are good enough to chronicle one or
// two of my trifling experiences, you may be interested in this." He
// threw over a sheet of thick, pink-tinted note-paper which had been
// lying open upon the table. "It came by the last post," said he. "Read
// it aloud."

// The note was undated, and without either signature or address.

// "There will call upon you to-night, at a quarter to eight o'clock,"
// it said, "a gentleman who desires to consult you upon a matter of the
// very deepest moment. Your recent services to one of the royal houses
// of Europe have shown that you are one who may safely be trusted with
// matters which are of an importance which can hardly be exaggerated.
// This account of you we have from all quarters received. Be in your
// chamber then at that hour, and do not take it amiss if your visitor
// wear a mask."

// "This is indeed a mystery," I remarked. "What do you imagine that it
// means?"

// "I have no data yet. It is a capital mistake to theorize before one
// has data. Insensibly one begins to twist facts to suit theories,
// instead of theories to suit facts. But the note itself. What do you
// deduce from it?"

// I carefully examined the writing, and the paper upon which it was
// written.

// "The man who wrote it was presumably well to do," I remarked,
// endeavouring to imitate my companion's processes. "Such paper could
// not be bought under half a crown a packet. It is peculiarly strong
// and stiff."

// "Peculiar--that is the very word," said Holmes. "It is not an English
// paper at all. Hold it up to the light."

// I did so, and saw a large "E" with a small "g," a "P," and a large
// "G" with a small "t" woven into the texture of the paper.

// "What do you make of that?" asked Holmes.

// "The name of the maker, no doubt; or his monogram, rather."

// "Not at all. The 'G' with the small 't' stands for 'Gesellschaft,'
// which is the German for 'Company.' It is a customary contraction like
// our 'Co.' 'P,' of course, stands for 'Papier.' Now for the 'Eg.' Let
// us glance at our Continental Gazetteer." He took down a heavy brown
// volume from his shelves. "Eglow, Eglonitz--here we are, Egria. It is
// in a German-speaking country--in Bohemia, not far from Carlsbad.
// 'Remarkable as being the scene of the death of Wallenstein, and for
// its numerous glass-factories and paper-mills.' Ha, ha, my boy, what
// do you make of that?" His eyes sparkled, and he sent up a great blue
// triumphant cloud from his cigarette.

// "The paper was made in Bohemia," I said.

// "Precisely. And the man who wrote the note is a German. Do you note
// the peculiar construction of the sentence--'This account of you we
// have from all quarters received.' A Frenchman or Russian could not
// have written that. It is the German who is so uncourteous to his
// verbs. It only remains, therefore, to discover what is wanted by this
// German who writes upon Bohemian paper and prefers wearing a mask to
// showing his face. And here he comes, if I am not mistaken, to resolve
// all our doubts."

// As he spoke there was the sharp sound of horses' hoofs and grating
// wheels against the curb, followed by a sharp pull at the bell. Holmes
// whistled.

// "A pair, by the sound," said he. "Yes," he continued, glancing out of
// the window. "A nice little brougham and a pair of beauties. A hundred
// and fifty guineas apiece. There's money in this case, Watson, if
// there is nothing else."

// "I think that I had better go, Holmes."

// "Not a bit, Doctor. Stay where you are. I am lost without my Boswell.
// And this promises to be interesting. It would be a pity to miss it."

// "But your client--"

// "Never mind him. I may want your help, and so may he. Here he comes.
// Sit down in that armchair, Doctor, and give us your best attention."

// A slow and heavy step, which had been heard upon the stairs and in
// the passage, paused immediately outside the door. Then there was a
// loud and authoritative tap.

// "Come in!" said Holmes.

// A man entered who could hardly have been less than six feet six
// inches in height, with the chest and limbs of a Hercules. His dress
// was rich with a richness which would, in England, be looked upon as
// akin to bad taste. Heavy bands of astrakhan were slashed across the
// sleeves and fronts of his double-breasted coat, while the deep blue
// cloak which was thrown over his shoulders was lined with
// flame-coloured silk and secured at the neck with a brooch which
// consisted of a single flaming beryl. Boots which extended halfway up
// his calves, and which were trimmed at the tops with rich brown fur,
// completed the impression of barbaric opulence which was suggested by
// his whole appearance. He carried a broad-brimmed hat in his hand,
// while he wore across the upper part of his face, extending down past
// the cheekbones, a black vizard mask, which he had apparently adjusted
// that very moment, for his hand was still raised to it as he entered.
// From the lower part of the face he appeared to be a man of strong
// character, with a thick, hanging lip, and a long, straight chin
// suggestive of resolution pushed to the length of obstinacy.

// "You had my note?" he asked with a deep harsh voice and a strongly
// marked German accent. "I told you that I would call." He looked from
// one to the other of us, as if uncertain which to address.

// "Pray take a seat," said Holmes. "This is my friend and colleague,
// Dr. Watson, who is occasionally good enough to help me in my cases.
// Whom have I the honour to address?"

// "You may address me as the Count Von Kramm, a Bohemian nobleman. I
// understand that this gentleman, your friend, is a man of honour and
// discretion, whom I may trust with a matter of the most extreme
// importance. If not, I should much prefer to communicate with you
// alone."

// I rose to go, but Holmes caught me by the wrist and pushed me back
// into my chair. "It is both, or none," said he. "You may say before
// this gentleman anything which you may say to me."

// The Count shrugged his broad shoulders. "Then I must begin," said he,
// "by binding you both to absolute secrecy for two years; at the end of
// that time the matter will be of no importance. At present it is not
// too much to say that it is of such weight it may have an influence
// upon European history."

// "I promise," said Holmes.

// "And I."

// "You will excuse this mask," continued our strange visitor. "The
// august person who employs me wishes his agent to be unknown to you,
// and I may confess at once that the title by which I have just called
// myself is not exactly my own."

// "I was aware of it," said Holmes dryly.

// "The circumstances are of great delicacy, and every precaution has to
// be taken to quench what might grow to be an immense scandal and
// seriously compromise one of the reigning families of Europe. To speak
// plainly, the matter implicates the great House of Ormstein,
// hereditary kings of Bohemia."

// "I was also aware of that," murmured Holmes, settling himself down in
// his armchair and closing his eyes.

// Our visitor glanced with some apparent surprise at the languid,
// lounging figure of the man who had been no doubt depicted to him as
// the most incisive reasoner and most energetic agent in Europe. Holmes
// slowly reopened his eyes and looked impatiently at his gigantic
// client.

// "If your Majesty would condescend to state your case," he remarked,
// "I should be better able to advise you."

// The man sprang from his chair and paced up and down the room in
// uncontrollable agitation. Then, with a gesture of desperation, he
// tore the mask from his face and hurled it upon the ground. "You are
// right," he cried; "I am the King. Why should I attempt to conceal
// it?"

// "Why, indeed?" murmured Holmes. "Your Majesty had not spoken before I
// was aware that I was addressing Wilhelm Gottsreich Sigismond von
// Ormstein, Grand Duke of Cassel-Felstein, and hereditary King of
// Bohemia."

// "But you can understand," said our strange visitor, sitting down once
// more and passing his hand over his high white forehead, "you can
// understand that I am not accustomed to doing such business in my own
// person. Yet the matter was so delicate that I could not confide it to
// an agent without putting myself in his power. I have come incognito
// from Prague for the purpose of consulting you."

// "Then, pray consult," said Holmes, shutting his eyes once more.

// "The facts are briefly these: Some five years ago, during a lengthy
// visit to Warsaw, I made the acquaintance of the well-known
// adventuress, Irene Adler. The name is no doubt familiar to you."

// "Kindly look her up in my index, Doctor," murmured Holmes without
// opening his eyes. For many years he had adopted a system of docketing
// all paragraphs concerning men and things, so that it was difficult to
// name a subject or a person on which he could not at once furnish
// information. In this case I found her biography sandwiched in between
// that of a Hebrew rabbi and that of a staff-commander who had written
// a monograph upon the deep-sea fishes.

// "Let me see!" said Holmes. "Hum! Born in New Jersey in the year 1858.
// Contralto--hum! La Scala, hum! Prima donna Imperial Opera of
// Warsaw--yes! Retired from operatic stage--ha! Living in London--quite
// so! Your Majesty, as I understand, became entangled with this young
// person, wrote her some compromising letters, and is now desirous of
// getting those letters back."

// "Precisely so. But how--"

// "Was there a secret marriage?"

// "None."

// "No legal papers or certificates?"

// "None."

// "Then I fail to follow your Majesty. If this young person should
// produce her letters for blackmailing or other purposes, how is she to
// prove their authenticity?"

// "There is the writing."

// "Pooh, pooh! Forgery."

// "My private note-paper."

// "Stolen."

// "My own seal."

// "Imitated."

// "My photograph."

// "Bought."

// "We were both in the photograph."

// "Oh, dear! That is very bad! Your Majesty has indeed committed an
// indiscretion."

// "I was mad--insane."

// "You have compromised yourself seriously."

// "I was only Crown Prince then. I was young. I am but thirty now."

// "It must be recovered."

// "We have tried and failed."

// "Your Majesty must pay. It must be bought."

// "She will not sell."

// "Stolen, then."

// "Five attempts have been made. Twice burglars in my pay ransacked her
// house. Once we diverted her luggage when she travelled. Twice she has
// been waylaid. There has been no result."

// "No sign of it?"

// "Absolutely none."

// Holmes laughed. "It is quite a pretty little problem," said he.

// "But a very serious one to me," returned the King reproachfully.

// "Very, indeed. And what does she propose to do with the photograph?"

// "To ruin me."

// "But how?"

// "I am about to be married."

// "So I have heard."

// "To Clotilde Lothman von Saxe-Meningen, second daughter of the King
// of Scandinavia. You may know the strict principles of her family. She
// is herself the very soul of delicacy. A shadow of a doubt as to my
// conduct would bring the matter to an end."

// "And Irene Adler?"

// "Threatens to send them the photograph. And she will do it. I know
// that she will do it. You do not know her, but she has a soul of
// steel. She has the face of the most beautiful of women, and the mind
// of the most resolute of men. Rather than I should marry another
// woman, there are no lengths to which she would not go--none."

// "You are sure that she has not sent it yet?"

// "I am sure."

// "And why?"

// "Because she has said that she would send it on the day when the
// betrothal was publicly proclaimed. That will be next Monday."

// "Oh, then we have three days yet," said Holmes with a yawn. "That is
// very fortunate, as I have one or two matters of importance to look
// into just at present. Your Majesty will, of course, stay in London
// for the present?"

// "Certainly. You will find me at the Langham under the name of the
// Count Von Kramm."

// "Then I shall drop you a line to let you know how we progress."

// "Pray do so. I shall be all anxiety."

// "Then, as to money?"

// "You have carte blanche."

// "Absolutely?"

// "I tell you that I would give one of the provinces of my kingdom to
// have that photograph."

// "And for present expenses?"

// The King took a heavy chamois leather bag from under his cloak and
// laid it on the table.

// "There are three hundred pounds in gold and seven hundred in notes,"
// he said.

// Holmes scribbled a receipt upon a sheet of his note-book and handed
// it to him.

// "And Mademoiselle's address?" he asked.

// "Is Briony Lodge, Serpentine Avenue, St. John's Wood."

// Holmes took a note of it. "One other question," said he. "Was the
// photograph a cabinet?"

// "It was."

// "Then, good-night, your Majesty, and I trust that we shall soon have
// some good news for you. And good-night, Watson," he added, as the
// wheels of the royal brougham rolled down the street. "If you will be
// good enough to call to-morrow afternoon at three o'clock I should
// like to chat this little matter over with you."

// CHAPTER II

// At three o'clock precisely I was at Baker Street, but Holmes had not
// yet returned. The landlady informed me that he had left the house
// shortly after eight o'clock in the morning. I sat down beside the
// fire, however, with the intention of awaiting him, however long he
// might be. I was already deeply interested in his inquiry, for, though
// it was surrounded by none of the grim and strange features which were
// associated with the two crimes which I have already recorded, still,
// the nature of the case and the exalted station of his client gave it
// a character of its own. Indeed, apart from the nature of the
// investigation which my friend had on hand, there was something in his
// masterly grasp of a situation, and his keen, incisive reasoning,
// which made it a pleasure to me to study his system of work, and to
// follow the quick, subtle methods by which he disentangled the most
// inextricable mysteries. So accustomed was I to his invariable success
// that the very possibility of his failing had ceased to enter into my
// head.

// It was close upon four before the door opened, and a drunken-looking
// groom, ill-kempt and side-whiskered, with an inflamed face and
// disreputable clothes, walked into the room. Accustomed as I was to my
// friend's amazing powers in the use of disguises, I had to look three
// times before I was certain that it was indeed he. With a nod he
// vanished into the bedroom, whence he emerged in five minutes
// tweed-suited and respectable, as of old. Putting his hands into his
// pockets, he stretched out his legs in front of the fire and laughed
// heartily for some minutes.

// "Well, really!" he cried, and then he choked and laughed again until
// he was obliged to lie back, limp and helpless, in the chair.

// "What is it?"

// "It's quite too funny. I am sure you could never guess how I employed
// my morning, or what I ended by doing."

// "I can't imagine. I suppose that you have been watching the habits,
// and perhaps the house, of Miss Irene Adler."

// "Quite so; but the sequel was rather unusual. I will tell you,
// however. I left the house a little after eight o'clock this morning
// in the character of a groom out of work. There is a wonderful
// sympathy and freemasonry among horsey men. Be one of them, and you
// will know all that there is to know. I soon found Briony Lodge. It is
// a bijou villa, with a garden at the back, but built out in front
// right up to the road, two stories. Chubb lock to the door. Large
// sitting-room on the right side, well furnished, with long windows
// almost to the floor, and those preposterous English window fasteners
// which a child could open. Behind there was nothing remarkable, save
// that the passage window could be reached from the top of the
// coach-house. I walked round it and examined it closely from every
// point of view, but without noting anything else of interest.

// "I then lounged down the street and found, as I expected, that there
// was a mews in a lane which runs down by one wall of the garden. I
// lent the ostlers a hand in rubbing down their horses, and received in
// exchange twopence, a glass of half and half, two fills of shag
// tobacco, and as much information as I could desire about Miss Adler,
// to say nothing of half a dozen other people in the neighbourhood in
// whom I was not in the least interested, but whose biographies I was
// compelled to listen to."

// "And what of Irene Adler?" I asked.

// "Oh, she has turned all the men's heads down in that part. She is the
// daintiest thing under a bonnet on this planet. So say the
// Serpentine-mews, to a man. She lives quietly, sings at concerts,
// drives out at five every day, and returns at seven sharp for dinner.
// Seldom goes out at other times, except when she sings. Has only one
// male visitor, but a good deal of him. He is dark, handsome, and
// dashing, never calls less than once a day, and often twice. He is a
// Mr. Godfrey Norton, of the Inner Temple. See the advantages of a
// cabman as a confidant. They had driven him home a dozen times from
// Serpentine-mews, and knew all about him. When I had listened to all
// they had to tell, I began to walk up and down near Briony Lodge once
// more, and to think over my plan of campaign.

// "This Godfrey Norton was evidently an important factor in the matter.
// He was a lawyer. That sounded ominous. What was the relation between
// them, and what the object of his repeated visits? Was she his client,
// his friend, or his mistress? If the former, she had probably
// transferred the photograph to his keeping. If the latter, it was less
// likely. On the issue of this question depended whether I should
// continue my work at Briony Lodge, or turn my attention to the
// gentleman's chambers in the Temple. It was a delicate point, and it
// widened the field of my inquiry. I fear that I bore you with these
// details, but I have to let you see my little difficulties, if you are
// to understand the situation."

// "I am following you closely," I answered.

// "I was still balancing the matter in my mind when a hansom cab drove
// up to Briony Lodge, and a gentleman sprang out. He was a remarkably
// handsome man, dark, aquiline, and moustached--evidently the man of
// whom I had heard. He appeared to be in a great hurry, shouted to the
// cabman to wait, and brushed past the maid who opened the door with
// the air of a man who was thoroughly at home.

// "He was in the house about half an hour, and I could catch glimpses
// of him in the windows of the sitting-room, pacing up and down,
// talking excitedly, and waving his arms. Of her I could see nothing.
// Presently he emerged, looking even more flurried than before. As he
// stepped up to the cab, he pulled a gold watch from his pocket and
// looked at it earnestly, 'Drive like the devil,' he shouted, 'first to
// Gross & Hankey's in Regent Street, and then to the Church of St.
// Monica in the Edgeware Road. Half a guinea if you do it in twenty
// minutes!'

// "Away they went, and I was just wondering whether I should not do
// well to follow them when up the lane came a neat little landau, the
// coachman with his coat only half-buttoned, and his tie under his ear,
// while all the tags of his harness were sticking out of the buckles.
// It hadn't pulled up before she shot out of the hall door and into it.
// I only caught a glimpse of her at the moment, but she was a lovely
// woman, with a face that a man might die for.

// "'The Church of St. Monica, John,' she cried, 'and half a sovereign
// if you reach it in twenty minutes.'

// "This was quite too good to lose, Watson. I was just balancing
// whether I should run for it, or whether I should perch behind her
// landau when a cab came through the street. The driver looked twice at
// such a shabby fare, but I jumped in before he could object. 'The
// Church of St. Monica,' said I, 'and half a sovereign if you reach it
// in twenty minutes.' It was twenty-five minutes to twelve, and of
// course it was clear enough what was in the wind.

// "My cabby drove fast. I don't think I ever drove faster, but the
// others were there before us. The cab and the landau with their
// steaming horses were in front of the door when I arrived. I paid the
// man and hurried into the church. There was not a soul there save the
// two whom I had followed and a surpliced clergyman, who seemed to be
// expostulating with them. They were all three standing in a knot in
// front of the altar. I lounged up the side aisle like any other idler
// who has dropped into a church. Suddenly, to my surprise, the three at
// the altar faced round to me, and Godfrey Norton came running as hard
// as he could towards me.

// "'Thank God,' he cried. 'You'll do. Come! Come!'

// "'What then?' I asked.

// "'Come, man, come, only three minutes, or it won't be legal.'

// "I was half-dragged up to the altar, and before I knew where I was I
// found myself mumbling responses which were whispered in my ear, and
// vouching for things of which I knew nothing, and generally assisting
// in the secure tying up of Irene Adler, spinster, to Godfrey Norton,
// bachelor. It was all done in an instant, and there was the gentleman
// thanking me on the one side and the lady on the other, while the
// clergyman beamed on me in front. It was the most preposterous
// position in which I ever found myself in my life, and it was the
// thought of it that started me laughing just now. It seems that there
// had been some informality about their license, that the clergyman
// absolutely refused to marry them without a witness of some sort, and
// that my lucky appearance saved the bridegroom from having to sally
// out into the streets in search of a best man. The bride gave me a
// sovereign, and I mean to wear it on my watch-chain in memory of the
// occasion."

// "This is a very unexpected turn of affairs," said I; "and what then?"

// "Well, I found my plans very seriously menaced. It looked as if the
// pair might take an immediate departure, and so necessitate very
// prompt and energetic measures on my part. At the church door,
// however, they separated, he driving back to the Temple, and she to
// her own house. 'I shall drive out in the park at five as usual,' she
// said as she left him. I heard no more. They drove away in different
// directions, and I went off to make my own arrangements."

// "Which are?"

// "Some cold beef and a glass of beer," he answered, ringing the bell.
// "I have been too busy to think of food, and I am likely to be busier
// still this evening. By the way, Doctor, I shall want your
// co-operation."

// "I shall be delighted."

// "You don't mind breaking the law?"

// "Not in the least."

// "Nor running a chance of arrest?"

// "Not in a good cause."

// "Oh, the cause is excellent!"

// "Then I am your man."

// "I was sure that I might rely on you."

// "But what is it you wish?"

// "When Mrs. Turner has brought in the tray I will make it clear to
// you. Now," he said as he turned hungrily on the simple fare that our
// landlady had provided, "I must discuss it while I eat, for I have not
// much time. It is nearly five now. In two hours we must be on the
// scene of action. Miss Irene, or Madame, rather, returns from her
// drive at seven. We must be at Briony Lodge to meet her."

// "And what then?"

// "You must leave that to me. I have already arranged what is to occur.
// There is only one point on which I must insist. You must not
// interfere, come what may. You understand?"

// "I am to be neutral?"

// "To do nothing whatever. There will probably be some small
// unpleasantness. Do not join in it. It will end in my being conveyed
// into the house. Four or five minutes afterwards the sitting-room
// window will open. You are to station yourself close to that open
// window."

// "Yes."

// "You are to watch me, for I will be visible to you."

// "Yes."

// "And when I raise my hand--so--you will throw into the room what I
// give you to throw, and will, at the same time, raise the cry of fire.
// You quite follow me?"

// "Entirely."

// "It is nothing very formidable," he said, taking a long cigar-shaped
// roll from his pocket. "It is an ordinary plumber's smoke-rocket,
// fitted with a cap at either end to make it self-lighting. Your task
// is confined to that. When you raise your cry of fire, it will be
// taken up by quite a number of people. You may then walk to the end of
// the street, and I will rejoin you in ten minutes. I hope that I have
// made myself clear?"

// "I am to remain neutral, to get near the window, to watch you, and at
// the signal to throw in this object, then to raise the cry of fire,
// and to wait you at the corner of the street."

// "Precisely."

// "Then you may entirely rely on me."

// "That is excellent. I think, perhaps, it is almost time that I
// prepare for the new role I have to play."

// He disappeared into his bedroom and returned in a few minutes in the
// character of an amiable and simple-minded Nonconformist clergyman.
// His broad black hat, his baggy trousers, his white tie, his
// sympathetic smile, and general look of peering and benevolent
// curiosity were such as Mr. John Hare alone could have equalled. It
// was not merely that Holmes changed his costume. His expression, his
// manner, his very soul seemed to vary with every fresh part that he
// assumed. The stage lost a fine actor, even as science lost an acute
// reasoner, when he became a specialist in crime.

// It was a quarter past six when we left Baker Street, and it still
// wanted ten minutes to the hour when we found ourselves in Serpentine
// Avenue. It was already dusk, and the lamps were just being lighted as
// we paced up and down in front of Briony Lodge, waiting for the coming
// of its occupant. The house was just such as I had pictured it from
// Sherlock Holmes' succinct description, but the locality appeared to
// be less private than I expected. On the contrary, for a small street
// in a quiet neighbourhood, it was remarkably animated. There was a
// group of shabbily dressed men smoking and laughing in a corner, a
// scissors-grinder with his wheel, two guardsmen who were flirting with
// a nurse-girl, and several well-dressed young men who were lounging up
// and down with cigars in their mouths.

// "You see," remarked Holmes, as we paced to and fro in front of the
// house, "this marriage rather simplifies matters. The photograph
// becomes a double-edged weapon now. The chances are that she would be
// as averse to its being seen by Mr. Godfrey Norton, as our client is
// to its coming to the eyes of his princess. Now the question is--Where
// are we to find the photograph?"

// "Where, indeed?"

// "It is most unlikely that she carries it about with her. It is
// cabinet size. Too large for easy concealment about a woman's dress.
// She knows that the King is capable of having her waylaid and
// searched. Two attempts of the sort have already been made. We may
// take it, then, that she does not carry it about with her."

// "Where, then?"

// "Her banker or her lawyer. There is that double possibility. But I am
// inclined to think neither. Women are naturally secretive, and they
// like to do their own secreting. Why should she hand it over to anyone
// else? She could trust her own guardianship, but she could not tell
// what indirect or political influence might be brought to bear upon a
// business man. Besides, remember that she had resolved to use it
// within a few days. It must be where she can lay her hands upon it. It
// must be in her own house."

// "But it has twice been burgled."

// "Pshaw! They did not know how to look."

// "But how will you look?"

// "I will not look."

// "What then?"

// "I will get her to show me."

// "But she will refuse."

// "She will not be able to. But I hear the rumble of wheels. It is her
// carriage. Now carry out my orders to the letter."

// As he spoke the gleam of the side-lights of a carriage came round the
// curve of the avenue. It was a smart little landau which rattled up to
// the door of Briony Lodge. As it pulled up, one of the loafing men at
// the corner dashed forward to open the door in the hope of earning a
// copper, but was elbowed away by another loafer, who had rushed up
// with the same intention. A fierce quarrel broke out, which was
// increased by the two guardsmen, who took sides with one of the
// loungers, and by the scissors-grinder, who was equally hot upon the
// other side. A blow was struck, and in an instant the lady, who had
// stepped from her carriage, was the centre of a little knot of flushed
// and struggling men, who struck savagely at each other with their
// fists and sticks. Holmes dashed into the crowd to protect the lady;
// but just as he reached her he gave a cry and dropped to the ground,
// with the blood running freely down his face. At his fall the
// guardsmen took to their heels in one direction and the loungers in
// the other, while a number of better-dressed people, who had watched
// the scuffle without taking part in it, crowded in to help the lady
// and to attend to the injured man. Irene Adler, as I will still call
// her, had hurried up the steps; but she stood at the top with her
// superb figure outlined against the lights of the hall, looking back
// into the street.

// "Is the poor gentleman much hurt?" she asked.

// "He is dead," cried several voices.

// "No, no, there's life in him!" shouted another. "But he'll be gone
// before you can get him to hospital."

// "He's a brave fellow," said a woman. "They would have had the lady's
// purse and watch if it hadn't been for him. They were a gang, and a
// rough one, too. Ah, he's breathing now."

// "He can't lie in the street. May we bring him in, marm?"

// "Surely. Bring him into the sitting-room. There is a comfortable
// sofa. This way, please!"

// Slowly and solemnly he was borne into Briony Lodge and laid out in
// the principal room, while I still observed the proceedings from my
// post by the window. The lamps had been lit, but the blinds had not
// been drawn, so that I could see Holmes as he lay upon the couch. I do
// not know whether he was seized with compunction at that moment for
// the part he was playing, but I know that I never felt more heartily
// ashamed of myself in my life than when I saw the beautiful creature
// against whom I was conspiring, or the grace and kindliness with which
// she waited upon the injured man. And yet it would be the blackest
// treachery to Holmes to draw back now from the part which he had
// intrusted to me. I hardened my heart, and took the smoke-rocket from
// under my ulster. After all, I thought, we are not injuring her. We
// are but preventing her from injuring another.

// Holmes had sat up upon the couch, and I saw him motion like a man who
// is in need of air. A maid rushed across and threw open the window. At
// the same instant I saw him raise his hand and at the signal I tossed
// my rocket into the room with a cry of "Fire!" The word was no sooner
// out of my mouth than the whole crowd of spectators, well dressed and
// ill--gentlemen, ostlers, and servant-maids--joined in a general
// shriek of "Fire!" Thick clouds of smoke curled through the room and
// out at the open window. I caught a glimpse of rushing figures, and a
// moment later the voice of Holmes from within assuring them that it
// was a false alarm. Slipping through the shouting crowd I made my way
// to the corner of the street, and in ten minutes was rejoiced to find
// my friend's arm in mine, and to get away from the scene of uproar. He
// walked swiftly and in silence for some few minutes until we had
// turned down one of the quiet streets which lead towards the Edgeware
// Road.

// "You did it very nicely, Doctor," he remarked. "Nothing could have
// been better. It is all right."

// "You have the photograph?"

// "I know where it is."

// "And how did you find out?"

// "She showed me, as I told you she would."

// "I am still in the dark."

// "I do not wish to make a mystery," said he, laughing. "The matter was
// perfectly simple. You, of course, saw that everyone in the street was
// an accomplice. They were all engaged for the evening."

// "I guessed as much."

// "Then, when the row broke out, I had a little moist red paint in the
// palm of my hand. I rushed forward, fell down, clapped my hand to my
// face, and became a piteous spectacle. It is an old trick."

// "That also I could fathom."

// "Then they carried me in. She was bound to have me in. What else
// could she do? And into her sitting-room, which was the very room
// which I suspected. It lay between that and her bedroom, and I was
// determined to see which. They laid me on a couch, I motioned for air,
// they were compelled to open the window, and you had your chance."

// "How did that help you?"

// "It was all-important. When a woman thinks that her house is on fire,
// her instinct is at once to rush to the thing which she values most.
// It is a perfectly overpowering impulse, and I have more than once
// taken advantage of it. In the case of the Darlington substitution
// scandal it was of use to me, and also in the Arnsworth Castle
// business. A married woman grabs at her baby; an unmarried one reaches
// for her jewel-box. Now it was clear to me that our lady of to-day had
// nothing in the house more precious to her than what we are in quest
// of. She would rush to secure it. The alarm of fire was admirably
// done. The smoke and shouting were enough to shake nerves of steel.
// She responded beautifully. The photograph is in a recess behind a
// sliding panel just above the right bell-pull. She was there in an
// instant, and I caught a glimpse of it as she half-drew it out. When I
// cried out that it was a false alarm, she replaced it, glanced at the
// rocket, rushed from the room, and I have not seen her since. I rose,
// and, making my excuses, escaped from the house. I hesitated whether
// to attempt to secure the photograph at once; but the coachman had
// come in, and as he was watching me narrowly it seemed safer to wait.
// A little over-precipitance may ruin all."

// "And now?" I asked.

// "Our quest is practically finished. I shall call with the King
// to-morrow, and with you, if you care to come with us. We will be
// shown into the sitting-room to wait for the lady, but it is probable
// that when she comes she may find neither us nor the photograph. It
// might be a satisfaction to his Majesty to regain it with his own
// hands."

// "And when will you call?"

// "At eight in the morning. She will not be up, so that we shall have a
// clear field. Besides, we must be prompt, for this marriage may mean a
// complete change in her life and habits. I must wire to the King
// without delay."

// We had reached Baker Street and had stopped at the door. He was
// searching his pockets for the key when someone passing said:

// "Good-night, Mister Sherlock Holmes."

// There were several people on the pavement at the time, but the
// greeting appeared to come from a slim youth in an ulster who had
// hurried by.

// "I've heard that voice before," said Holmes, staring down the dimly
// lit street. "Now, I wonder who the deuce that could have been."

// CHAPTER III

// I slept at Baker Street that night, and we were engaged upon our
// toast and coffee in the morning when the King of Bohemia rushed into
// the room.

// "You have really got it!" he cried, grasping Sherlock Holmes by
// either shoulder and looking eagerly into his face.

// "Not yet."

// "But you have hopes?"

// "I have hopes."

// "Then, come. I am all impatience to be gone."

// "We must have a cab."

// "No, my brougham is waiting."

// "Then that will simplify matters." We descended and started off once
// more for Briony Lodge.

// "Irene Adler is married," remarked Holmes.

// "Married! When?"

// "Yesterday."

// "But to whom?"

// "To an English lawyer named Norton."

// "But she could not love him."

// "I am in hopes that she does."

// "And why in hopes?"

// "Because it would spare your Majesty all fear of future annoyance. If
// the lady loves her husband, she does not love your Majesty. If she
// does not love your Majesty, there is no reason why she should
// interfere with your Majesty's plan."

// "It is true. And yet--Well! I wish she had been of my own station!
// What a queen she would have made!" He relapsed into a moody silence,
// which was not broken until we drew up in Serpentine Avenue.

// The door of Briony Lodge was open, and an elderly woman stood upon
// the steps. She watched us with a sardonic eye as we stepped from the
// brougham.

// "Mr. Sherlock Holmes, I believe?" said she.

// "I am Mr. Holmes," answered my companion, looking at her with a
// questioning and rather startled gaze.

// "Indeed! My mistress told me that you were likely to call. She left
// this morning with her husband by the 5.15 train from Charing Cross
// for the Continent."

// "What!" Sherlock Holmes staggered back, white with chagrin and
// surprise. "Do you mean that she has left England?"

// "Never to return."

// "And the papers?" asked the King hoarsely. "All is lost."

// "We shall see." He pushed past the servant and rushed into the
// drawing-room, followed by the King and myself. The furniture was
// scattered about in every direction, with dismantled shelves and open
// drawers, as if the lady had hurriedly ransacked them before her
// flight. Holmes rushed at the bell-pull, tore back a small sliding
// shutter, and, plunging in his hand, pulled out a photograph and a
// letter. The photograph was of Irene Adler herself in evening dress,
// the letter was superscribed to "Sherlock Holmes, Esq. To be left till
// called for." My friend tore it open and we all three read it
// together. It was dated at midnight of the preceding night and ran in
// this way:

// "My dear Mr. Sherlock Holmes:
// "You really did it very well. You took me in completely. Until after
// the alarm of fire, I had not a suspicion. But then, when I found how
// I had betrayed myself, I began to think. I had been warned against
// you months ago. I had been told that if the King employed an agent it
// would certainly be you. And your address had been given me. Yet, with
// all this, you made me reveal what you wanted to know. Even after I
// became suspicious, I found it hard to think evil of such a dear, kind
// old clergyman. But, you know, I have been trained as an actress
// myself. Male costume is nothing new to me. I often take advantage of
// the freedom which it gives. I sent John, the coachman, to watch you,
// ran up stairs, got into my walking-clothes, as I call them, and came
// down just as you departed.
// "Well, I followed you to your door, and so made sure that I was
// really an object of interest to the celebrated Mr. Sherlock Holmes.
// Then I, rather imprudently, wished you good-night, and started for
// the Temple to see my husband.
// "We both thought the best resource was flight, when pursued by so
// formidable an antagonist; so you will find the nest empty when you
// call to-morrow. As to the photograph, your client may rest in peace.
// I love and am loved by a better man than he. The King may do what he
// will without hindrance from one whom he has cruelly wronged. I keep
// it only to safeguard myself, and to preserve a weapon which will
// always secure me from any steps which he might take in the future. I
// leave a photograph which he might care to possess; and I remain, dear
// Mr. Sherlock Holmes,
// "Very truly yours,
// "Irene Norton, nÃ©e Adler."

// "What a woman--oh, what a woman!" cried the King of Bohemia, when we
// had all three read this epistle. "Did I not tell you how quick and
// resolute she was? Would she not have made an admirable queen? Is it
// not a pity that she was not on my level?"

// "From what I have seen of the lady she seems indeed to be on a very
// different level to your Majesty," said Holmes coldly. "I am sorry
// that I have not been able to bring your Majesty's business to a more
// successful conclusion."

// "On the contrary, my dear sir," cried the King; "nothing could be
// more successful. I know that her word is inviolate. The photograph is
// now as safe as if it were in the fire."

// "I am glad to hear your Majesty say so."

// "I am immensely indebted to you. Pray tell me in what way I can
// reward you. This ring--" He slipped an emerald snake ring from his
// finger and held it out upon the palm of his hand.

// "Your Majesty has something which I should value even more highly,"
// said Holmes.

// "You have but to name it."

// "This photograph!"

// The King stared at him in amazement.

// "Irene's photograph!" he cried. "Certainly, if you wish it."

// "I thank your Majesty. Then there is no more to be done in the
// matter. I have the honour to wish you a very good-morning." He bowed,
// and, turning away without observing the hand which the King had
// stretched out to him, he set off in my company for his chambers.

// And that was how a great scandal threatened to affect the kingdom of
// Bohemia, and how the best plans of Mr. Sherlock Holmes were beaten by
// a woman's wit. He used to make merry over the cleverness of women,
// but I have not heard him do it of late. And when he speaks of Irene
// Adler, or when he refers to her photograph, it is always under the
// honourable title of the woman.

// THE RED-HEADED LEAGUE

// I had called upon my friend, Mr. Sherlock Holmes, one day in the
// autumn of last year and found him in deep conversation with a very
// stout, florid-faced, elderly gentleman with fiery red hair. With an
// apology for my intrusion, I was about to withdraw when Holmes pulled
// me abruptly into the room and closed the door behind me.

// "You could not possibly have come at a better time, my dear Watson,"
// he said cordially.

// "I was afraid that you were engaged."

// "So I am. Very much so."

// "Then I can wait in the next room."

// "Not at all. This gentleman, Mr. Wilson, has been my partner and
// helper in many of my most successful cases, and I have no doubt that
// he will be of the utmost use to me in yours also."

// The stout gentleman half rose from his chair and gave a bob of
// greeting, with a quick little questioning glance from his small
// fat-encircled eyes.

// "Try the settee," said Holmes, relapsing into his armchair and
// putting his fingertips together, as was his custom when in judicial
// moods. "I know, my dear Watson, that you share my love of all that is
// bizarre and outside the conventions and humdrum routine of everyday
// life. You have shown your relish for it by the enthusiasm which has
// prompted you to chronicle, and, if you will excuse my saying so,
// somewhat to embellish so many of my own little adventures."

// "Your cases have indeed been of the greatest interest to me," I
// observed.

// "You will remember that I remarked the other day, just before we went
// into the very simple problem presented by Miss Mary Sutherland, that
// for strange effects and extraordinary combinations we must go to life
// itself, which is always far more daring than any effort of the
// imagination."

// "A proposition which I took the liberty of doubting."

// "You did, Doctor, but none the less you must come round to my view,
// for otherwise I shall keep on piling fact upon fact on you until your
// reason breaks down under them and acknowledges me to be right. Now,
// Mr. Jabez Wilson here has been good enough to call upon me this
// morning, and to begin a narrative which promises to be one of the
// most singular which I have listened to for some time. You have heard
// me remark that the strangest and most unique things are very often
// connected not with the larger but with the smaller crimes, and
// occasionally, indeed, where there is room for doubt whether any
// positive crime has been committed. As far as I have heard it is
// impossible for me to say whether the present case is an instance of
// crime or not, but the course of events is certainly among the most
// singular that I have ever listened to. Perhaps, Mr. Wilson, you would
// have the great kindness to recommence your narrative. I ask you not
// merely because my friend Dr. Watson has not heard the opening part
// but also because the peculiar nature of the story makes me anxious to
// have every possible detail from your lips. As a rule, when I have
// heard some slight indication of the course of events, I am able to
// guide myself by the thousands of other similar cases which occur to
// my memory. In the present instance I am forced to admit that the
// facts are, to the best of my belief, unique."

// The portly client puffed out his chest with an appearance of some
// little pride and pulled a dirty and wrinkled newspaper from the
// inside pocket of his greatcoat. As he glanced down the advertisement
// column, with his head thrust forward and the paper flattened out upon
// his knee, I took a good look at the man and endeavoured, after the
// fashion of my companion, to read the indications which might be
// presented by his dress or appearance.

// I did not gain very much, however, by my inspection. Our visitor bore
// every mark of being an average commonplace British tradesman, obese,
// pompous, and slow. He wore rather baggy grey shepherd's check
// trousers, a not over-clean black frock-coat, unbuttoned in the front,
// and a drab waistcoat with a heavy brassy Albert chain, and a square
// pierced bit of metal dangling down as an ornament. A frayed top-hat
// and a faded brown overcoat with a wrinkled velvet collar lay upon a
// chair beside him. Altogether, look as I would, there was nothing
// remarkable about the man save his blazing red head, and the
// expression of extreme chagrin and discontent upon his features.

// Sherlock Holmes' quick eye took in my occupation, and he shook his
// head with a smile as he noticed my questioning glances. "Beyond the
// obvious facts that he has at some time done manual labour, that he
// takes snuff, that he is a Freemason, that he has been in China, and
// that he has done a considerable amount of writing lately, I can
// deduce nothing else."

// Mr. Jabez Wilson started up in his chair, with his forefinger upon
// the paper, but his eyes upon my companion.

// "How, in the name of good-fortune, did you know all that, Mr.
// Holmes?" he asked. "How did you know, for example, that I did manual
// labour. It's as true as gospel, for I began as a ship's carpenter."

// "Your hands, my dear sir. Your right hand is quite a size larger than
// your left. You have worked with it, and the muscles are more
// developed."

// "Well, the snuff, then, and the Freemasonry?"

// "I won't insult your intelligence by telling you how I read that,
// especially as, rather against the strict rules of your order, you use
// an arc-and-compass breastpin."

// "Ah, of course, I forgot that. But the writing?"

// "What else can be indicated by that right cuff so very shiny for five
// inches, and the left one with the smooth patch near the elbow where
// you rest it upon the desk?"

// "Well, but China?"

// "The fish that you have tattooed immediately above your right wrist
// could only have been done in China. I have made a small study of
// tattoo marks and have even contributed to the literature of the
// subject. That trick of staining the fishes' scales of a delicate pink
// is quite peculiar to China. When, in addition, I see a Chinese coin
// hanging from your watch-chain, the matter becomes even more simple."

// Mr. Jabez Wilson laughed heavily. "Well, I never!" said he. "I
// thought at first that you had done something clever, but I see that
// there was nothing in it, after all."

// "I begin to think, Watson," said Holmes, "that I make a mistake in
// explaining. 'Omne ignotum pro magnifico,' you know, and my poor
// little reputation, such as it is, will suffer shipwreck if I am so
// candid. Can you not find the advertisement, Mr. Wilson?"

// "Yes, I have got it now," he answered with his thick red finger
// planted halfway down the column. "Here it is. This is what began it
// all. You just read it for yourself, sir."

// I took the paper from him and read as follows:

// "To the Red-headed League: On account of the bequest of the late
// Ezekiah Hopkins, of Lebanon, Pennsylvania, U. S. A., there is now
// another vacancy open which entitles a member of the League to a
// salary of Â£4 a week for purely nominal services. All red-headed men
// who are sound in body and mind and above the age of twenty-one years,
// are eligible. Apply in person on Monday, at eleven o'clock, to Duncan
// Ross, at the offices of the League, 7 Pope's Court, Fleet Street."

// "What on earth does this mean?" I ejaculated after I had twice read
// over the extraordinary announcement.

// Holmes chuckled and wriggled in his chair, as was his habit when in
// high spirits. "It is a little off the beaten track, isn't it?" said
// he. "And now, Mr. Wilson, off you go at scratch and tell us all about
// yourself, your household, and the effect which this advertisement had
// upon your fortunes. You will first make a note, Doctor, of the paper
// and the date."

// "It is The Morning Chronicle of April 27, 1890. Just two months ago."

// "Very good. Now, Mr. Wilson?"

// "Well, it is just as I have been telling you, Mr. Sherlock Holmes,"
// said Jabez Wilson, mopping his forehead; "I have a small pawnbroker's
// business at Coburg Square, near the City. It's not a very large
// affair, and of late years it has not done more than just give me a
// living. I used to be able to keep two assistants, but now I only keep
// one; and I would have a job to pay him but that he is willing to come
// for half wages so as to learn the business."

// "What is the name of this obliging youth?" asked Sherlock Holmes.

// "His name is Vincent Spaulding, and he's not such a youth, either.
// It's hard to say his age. I should not wish a smarter assistant, Mr.
// Holmes; and I know very well that he could better himself and earn
// twice what I am able to give him. But, after all, if he is satisfied,
// why should I put ideas in his head?"

// "Why, indeed? You seem most fortunate in having an employee who comes
// under the full market price. It is not a common experience among
// employers in this age. I don't know that your assistant is not as
// remarkable as your advertisement."

// "Oh, he has his faults, too," said Mr. Wilson. "Never was such a
// fellow for photography. Snapping away with a camera when he ought to
// be improving his mind, and then diving down into the cellar like a
// rabbit into its hole to develop his pictures. That is his main fault,
// but on the whole he's a good worker. There's no vice in him."

// "He is still with you, I presume?"

// "Yes, sir. He and a girl of fourteen, who does a bit of simple
// cooking and keeps the place clean--that's all I have in the house,
// for I am a widower and never had any family. We live very quietly,
// sir, the three of us; and we keep a roof over our heads and pay our
// debts, if we do nothing more.

// "The first thing that put us out was that advertisement. Spaulding,
// he came down into the office just this day eight weeks, with this
// very paper in his hand, and he says:

// "'I wish to the Lord, Mr. Wilson, that I was a red-headed man.'

// "'Why that?' I asks.

// "'Why,' says he, 'here's another vacancy on the League of the
// Red-headed Men. It's worth quite a little fortune to any man who gets
// it, and I understand that there are more vacancies than there are
// men, so that the trustees are at their wits' end what to do with the
// money. If my hair would only change colour, here's a nice little crib
// all ready for me to step into.'

// "'Why, what is it, then?' I asked. You see, Mr. Holmes, I am a very
// stay-at-home man, and as my business came to me instead of my having
// to go to it, I was often weeks on end without putting my foot over
// the door-mat. In that way I didn't know much of what was going on
// outside, and I was always glad of a bit of news.

// "'Have you never heard of the League of the Red-headed Men?' he asked
// with his eyes open.

// "'Never.'

// "'Why, I wonder at that, for you are eligible yourself for one of the
// vacancies.'

// "'And what are they worth?' I asked.

// "'Oh, merely a couple of hundred a year, but the work is slight, and
// it need not interfere very much with one's other occupations.'

// "Well, you can easily think that that made me prick up my ears, for
// the business has not been over-good for some years, and an extra
// couple of hundred would have been very handy.

// "'Tell me all about it,' said I.

// "'Well,' said he, showing me the advertisement, 'you can see for
// yourself that the League has a vacancy, and there is the address
// where you should apply for particulars. As far as I can make out, the
// League was founded by an American millionaire, Ezekiah Hopkins, who
// was very peculiar in his ways. He was himself red-headed, and he had
// a great sympathy for all red-headed men; so when he died it was found
// that he had left his enormous fortune in the hands of trustees, with
// instructions to apply the interest to the providing of easy berths to
// men whose hair is of that colour. From all I hear it is splendid pay
// and very little to do.'

// "'But,' said I, 'there would be millions of red-headed men who would
// apply.'

// "'Not so many as you might think,' he answered. 'You see it is really
// confined to Londoners, and to grown men. This American had started
// from London when he was young, and he wanted to do the old town a
// good turn. Then, again, I have heard it is no use your applying if
// your hair is light red, or dark red, or anything but real bright,
// blazing, fiery red. Now, if you cared to apply, Mr. Wilson, you would
// just walk in; but perhaps it would hardly be worth your while to put
// yourself out of the way for the sake of a few hundred pounds.'

// "Now, it is a fact, gentlemen, as you may see for yourselves, that my
// hair is of a very full and rich tint, so that it seemed to me that if
// there was to be any competition in the matter I stood as good a
// chance as any man that I had ever met. Vincent Spaulding seemed to
// know so much about it that I thought he might prove useful, so I just
// ordered him to put up the shutters for the day and to come right away
// with me. He was very willing to have a holiday, so we shut the
// business up and started off for the address that was given us in the
// advertisement.

// "I never hope to see such a sight as that again, Mr. Holmes. From
// north, south, east, and west every man who had a shade of red in his
// hair had tramped into the city to answer the advertisement. Fleet
// Street was choked with red-headed folk, and Pope's Court looked like
// a coster's orange barrow. I should not have thought there were so
// many in the whole country as were brought together by that single
// advertisement. Every shade of colour they were--straw, lemon, orange,
// brick, Irish-setter, liver, clay; but, as Spaulding said, there were
// not many who had the real vivid flame-coloured tint. When I saw how
// many were waiting, I would have given it up in despair; but Spaulding
// would not hear of it. How he did it I could not imagine, but he
// pushed and pulled and butted until he got me through the crowd, and
// right up to the steps which led to the office. There was a double
// stream upon the stair, some going up in hope, and some coming back
// dejected; but we wedged in as well as we could and soon found
// ourselves in the office."

// "Your experience has been a most entertaining one," remarked Holmes
// as his client paused and refreshed his memory with a huge pinch of
// snuff. "Pray continue your very interesting statement."

// "There was nothing in the office but a couple of wooden chairs and a
// deal table, behind which sat a small man with a head that was even
// redder than mine. He said a few words to each candidate as he came
// up, and then he always managed to find some fault in them which would
// disqualify them. Getting a vacancy did not seem to be such a very
// easy matter, after all. However, when our turn came the little man
// was much more favourable to me than to any of the others, and he
// closed the door as we entered, so that he might have a private word
// with us.

// "'This is Mr. Jabez Wilson,' said my assistant, 'and he is willing to
// fill a vacancy in the League.'

// "'And he is admirably suited for it,' the other answered. 'He has
// every requirement. I cannot recall when I have seen anything so
// fine.' He took a step backward, cocked his head on one side, and
// gazed at my hair until I felt quite bashful. Then suddenly he plunged
// forward, wrung my hand, and congratulated me warmly on my success.

// "'It would be injustice to hesitate,' said he. 'You will, however, I
// am sure, excuse me for taking an obvious precaution.' With that he
// seized my hair in both his hands, and tugged until I yelled with the
// pain. 'There is water in your eyes,' said he as he released me. 'I
// perceive that all is as it should be. But we have to be careful, for
// we have twice been deceived by wigs and once by paint. I could tell
// you tales of cobbler's wax which would disgust you with human
// nature.' He stepped over to the window and shouted through it at the
// top of his voice that the vacancy was filled. A groan of
// disappointment came up from below, and the folk all trooped away in
// different directions until there was not a red-head to be seen except
// my own and that of the manager.

// "'My name,' said he, 'is Mr. Duncan Ross, and I am myself one of the
// pensioners upon the fund left by our noble benefactor. Are you a
// married man, Mr. Wilson? Have you a family?'

// "I answered that I had not.

// "His face fell immediately.

// "'Dear me!' he said gravely, 'that is very serious indeed! I am sorry
// to hear you say that. The fund was, of course, for the propagation
// and spread of the red-heads as well as for their maintenance. It is
// exceedingly unfortunate that you should be a bachelor.'

// "My face lengthened at this, Mr. Holmes, for I thought that I was not
// to have the vacancy after all; but after thinking it over for a few
// minutes he said that it would be all right.

// "'In the case of another,' said he, 'the objection might be fatal,
// but we must stretch a point in favour of a man with such a head of
// hair as yours. When shall you be able to enter upon your new duties?'

// "'Well, it is a little awkward, for I have a business already,' said
// I.

// "'Oh, never mind about that, Mr. Wilson!' said Vincent Spaulding. 'I
// should be able to look after that for you.'

// "'What would be the hours?' I asked.

// "'Ten to two.'

// "Now a pawnbroker's business is mostly done of an evening, Mr.
// Holmes, especially Thursday and Friday evening, which is just before
// pay-day; so it would suit me very well to earn a little in the
// mornings. Besides, I knew that my assistant was a good man, and that
// he would see to anything that turned up.

// "'That would suit me very well,' said I. 'And the pay?'

// "'Is Â£4 a week.'

// "'And the work?'

// "'Is purely nominal.'

// "'What do you call purely nominal?'

// "'Well, you have to be in the office, or at least in the building,
// the whole time. If you leave, you forfeit your whole position
// forever. The will is very clear upon that point. You don't comply
// with the conditions if you budge from the office during that time.'

// "'It's only four hours a day, and I should not think of leaving,'
// said I.

// "'No excuse will avail,' said Mr. Duncan Ross; 'neither sickness nor
// business nor anything else. There you must stay, or you lose your
// billet.'

// "'And the work?'

// "'Is to copy out the "Encyclopaedia Britannica." There is the first
// volume of it in that press. You must find your own ink, pens, and
// blotting-paper, but we provide this table and chair. Will you be
// ready to-morrow?'

// "'Certainly,' I answered.

// "'Then, good-bye, Mr. Jabez Wilson, and let me congratulate you once
// more on the important position which you have been fortunate enough
// to gain.' He bowed me out of the room and I went home with my
// assistant, hardly knowing what to say or do, I was so pleased at my
// own good fortune.

// "Well, I thought over the matter all day, and by evening I was in low
// spirits again; for I had quite persuaded myself that the whole affair
// must be some great hoax or fraud, though what its object might be I
// could not imagine. It seemed altogether past belief that anyone could
// make such a will, or that they would pay such a sum for doing
// anything so simple as copying out the 'Encyclopaedia Britannica.'
// Vincent Spaulding did what he could to cheer me up, but by bedtime I
// had reasoned myself out of the whole thing. However, in the morning I
// determined to have a look at it anyhow, so I bought a penny bottle of
// ink, and with a quill-pen, and seven sheets of foolscap paper, I
// started off for Pope's Court.

// "Well, to my surprise and delight, everything was as right as
// possible. The table was set out ready for me, and Mr. Duncan Ross was
// there to see that I got fairly to work. He started me off upon the
// letter A, and then he left me; but he would drop in from time to time
// to see that all was right with me. At two o'clock he bade me
// good-day, complimented me upon the amount that I had written, and
// locked the door of the office after me.

// "This went on day after day, Mr. Holmes, and on Saturday the manager
// came in and planked down four golden sovereigns for my week's work.
// It was the same next week, and the same the week after. Every morning
// I was there at ten, and every afternoon I left at two. By degrees Mr.
// Duncan Ross took to coming in only once of a morning, and then, after
// a time, he did not come in at all. Still, of course, I never dared to
// leave the room for an instant, for I was not sure when he might come,
// and the billet was such a good one, and suited me so well, that I
// would not risk the loss of it.

// "Eight weeks passed away like this, and I had written about Abbots
// and Archery and Armour and Architecture and Attica, and hoped with
// diligence that I might get on to the B's before very long. It cost me
// something in foolscap, and I had pretty nearly filled a shelf with my
// writings. And then suddenly the whole business came to an end."

// "To an end?"

// "Yes, sir. And no later than this morning. I went to my work as usual
// at ten o'clock, but the door was shut and locked, with a little
// square of cardboard hammered on to the middle of the panel with a
// tack. Here it is, and you can read for yourself."

// He held up a piece of white cardboard about the size of a sheet of
// note-paper. It read in this fashion:

// The Red-headed League
//         is
//      Dissolved
//  October 9, 1890.

// Sherlock Holmes and I surveyed this curt announcement and the rueful
// face behind it, until the comical side of the affair so completely
// overtopped every other consideration that we both burst out into a
// roar of laughter.

// "I cannot see that there is anything very funny," cried our client,
// flushing up to the roots of his flaming head. "If you can do nothing
// better than laugh at me, I can go elsewhere."

// "No, no," cried Holmes, shoving him back into the chair from which he
// had half risen. "I really wouldn't miss your case for the world. It
// is most refreshingly unusual. But there is, if you will excuse my
// saying so, something just a little funny about it. Pray what steps
// did you take when you found the card upon the door?"

// "I was staggered, sir. I did not know what to do. Then I called at
// the offices round, but none of them seemed to know anything about it.
// Finally, I went to the landlord, who is an accountant living on the
// ground-floor, and I asked him if he could tell me what had become of
// the Red-headed League. He said that he had never heard of any such
// body. Then I asked him who Mr. Duncan Ross was. He answered that the
// name was new to him.

// "'Well,' said I, 'the gentleman at No. 4.'

// "'What, the red-headed man?'

// "'Yes.'

// "'Oh,' said he, 'his name was William Morris. He was a solicitor and
// was using my room as a temporary convenience until his new premises
// were ready. He moved out yesterday.'

// "'Where could I find him?'

// "'Oh, at his new offices. He did tell me the address. Yes, 17 King
// Edward Street, near St. Paul's.'

// "I started off, Mr. Holmes, but when I got to that address it was a
// manufactory of artificial knee-caps, and no one in it had ever heard
// of either Mr. William Morris or Mr. Duncan Ross."

// "And what did you do then?" asked Holmes.

// "I went home to Saxe-Coburg Square, and I took the advice of my
// assistant. But he could not help me in any way. He could only say
// that if I waited I should hear by post. But that was not quite good
// enough, Mr. Holmes. I did not wish to lose such a place without a
// struggle, so, as I had heard that you were good enough to give advice
// to poor folk who were in need of it, I came right away to you."

// "And you did very wisely," said Holmes. "Your case is an exceedingly
// remarkable one, and I shall be happy to look into it. From what you
// have told me I think that it is possible that graver issues hang from
// it than might at first sight appear."

// "Grave enough!" said Mr. Jabez Wilson. "Why, I have lost four pound a
// week."

// "As far as you are personally concerned," remarked Holmes, "I do not
// see that you have any grievance against this extraordinary league. On
// the contrary, you are, as I understand, richer by some Â£30, to say
// nothing of the minute knowledge which you have gained on every
// subject which comes under the letter A. You have lost nothing by
// them."

// "No, sir. But I want to find out about them, and who they are, and
// what their object was in playing this prank--if it was a prank--upon
// me. It was a pretty expensive joke for them, for it cost them two and
// thirty pounds."

// "We shall endeavour to clear up these points for you. And, first, one
// or two questions, Mr. Wilson. This assistant of yours who first
// called your attention to the advertisement--how long had he been with
// you?"

// "About a month then."

// "How did he come?"

// "In answer to an advertisement."

// "Was he the only applicant?"

// "No, I had a dozen."

// "Why did you pick him?"

// "Because he was handy and would come cheap."

// "At half-wages, in fact."

// "Yes."

// "What is he like, this Vincent Spaulding?"

// "Small, stout-built, very quick in his ways, no hair on his face,
// though he's not short of thirty. Has a white splash of acid upon his
// forehead."

// Holmes sat up in his chair in considerable excitement. "I thought as
// much," said he. "Have you ever observed that his ears are pierced for
// earrings?"

// "Yes, sir. He told me that a gipsy had done it for him when he was a
// lad."

// "Hum!" said Holmes, sinking back in deep thought. "He is still with
// you?"

// "Oh, yes, sir; I have only just left him."

// "And has your business been attended to in your absence?"

// "Nothing to complain of, sir. There's never very much to do of a
// morning."

// "That will do, Mr. Wilson. I shall be happy to give you an opinion
// upon the subject in the course of a day or two. To-day is Saturday,
// and I hope that by Monday we may come to a conclusion."

// "Well, Watson," said Holmes when our visitor had left us, "what do
// you make of it all?"

// "I make nothing of it," I answered frankly. "It is a most mysterious
// business."

// "As a rule," said Holmes, "the more bizarre a thing is the less
// mysterious it proves to be. It is your commonplace, featureless
// crimes which are really puzzling, just as a commonplace face is the
// most difficult to identify. But I must be prompt over this matter."

// "What are you going to do, then?" I asked.

// "To smoke," he answered. "It is quite a three pipe problem, and I beg
// that you won't speak to me for fifty minutes." He curled himself up
// in his chair, with his thin knees drawn up to his hawk-like nose, and
// there he sat with his eyes closed and his black clay pipe thrusting
// out like the bill of some strange bird. I had come to the conclusion
// that he had dropped asleep, and indeed was nodding myself, when he
// suddenly sprang out of his chair with the gesture of a man who has
// made up his mind and put his pipe down upon the mantelpiece.

// "Sarasate plays at the St. James's Hall this afternoon," he remarked.
// "What do you think, Watson? Could your patients spare you for a few
// hours?"

// "I have nothing to do to-day. My practice is never very absorbing."

// "Then put on your hat and come. I am going through the City first,
// and we can have some lunch on the way. I observe that there is a good
// deal of German music on the programme, which is rather more to my
// taste than Italian or French. It is introspective, and I want to
// introspect. Come along!"

// We travelled by the Underground as far as Aldersgate; and a short
// walk took us to Saxe-Coburg Square, the scene of the singular story
// which we had listened to in the morning. It was a poky, little,
// shabby-genteel place, where four lines of dingy two-storied brick
// houses looked out into a small railed-in enclosure, where a lawn of
// weedy grass and a few clumps of faded laurel-bushes made a hard fight
// against a smoke-laden and uncongenial atmosphere. Three gilt balls
// and a brown board with "Jabez Wilson" in white letters, upon a corner
// house, announced the place where our red-headed client carried on his
// business. Sherlock Holmes stopped in front of it with his head on one
// side and looked it all over, with his eyes shining brightly between
// puckered lids. Then he walked slowly up the street, and then down
// again to the corner, still looking keenly at the houses. Finally he
// returned to the pawnbroker's, and, having thumped vigorously upon the
// pavement with his stick two or three times, he went up to the door
// and knocked. It was instantly opened by a bright-looking,
// clean-shaven young fellow, who asked him to step in.

// "Thank you," said Holmes, "I only wished to ask you how you would go
// from here to the Strand."

// "Third right, fourth left," answered the assistant promptly, closing
// the door.

// "Smart fellow, that," observed Holmes as we walked away. "He is, in
// my judgment, the fourth smartest man in London, and for daring I am
// not sure that he has not a claim to be third. I have known something
// of him before."

// "Evidently," said I, "Mr. Wilson's assistant counts for a good deal
// in this mystery of the Red-headed League. I am sure that you inquired
// your way merely in order that you might see him."

// "Not him."

// "What then?"

// "The knees of his trousers."

// "And what did you see?"

// "What I expected to see."

// "Why did you beat the pavement?"

// "My dear doctor, this is a time for observation, not for talk. We are
// spies in an enemy's country. We know something of Saxe-Coburg Square.
// Let us now explore the parts which lie behind it."

// The road in which we found ourselves as we turned round the corner
// from the retired Saxe-Coburg Square presented as great a contrast to
// it as the front of a picture does to the back. It was one of the main
// arteries which conveyed the traffic of the City to the north and
// west. The roadway was blocked with the immense stream of commerce
// flowing in a double tide inward and outward, while the footpaths were
// black with the hurrying swarm of pedestrians. It was difficult to
// realise as we looked at the line of fine shops and stately business
// premises that they really abutted on the other side upon the faded
// and stagnant square which we had just quitted.

// "Let me see," said Holmes, standing at the corner and glancing along
// the line, "I should like just to remember the order of the houses
// here. It is a hobby of mine to have an exact knowledge of London.
// There is Mortimer's, the tobacconist, the little newspaper shop, the
// Coburg branch of the City and Suburban Bank, the Vegetarian
// Restaurant, and McFarlane's carriage-building depot. That carries us
// right on to the other block. And now, Doctor, we've done our work, so
// it's time we had some play. A sandwich and a cup of coffee, and then
// off to violin-land, where all is sweetness and delicacy and harmony,
// and there are no red-headed clients to vex us with their conundrums."

// My friend was an enthusiastic musician, being himself not only a very
// capable performer but a composer of no ordinary merit. All the
// afternoon he sat in the stalls wrapped in the most perfect happiness,
// gently waving his long, thin fingers in time to the music, while his
// gently smiling face and his languid, dreamy eyes were as unlike those
// of Holmes the sleuth-hound, Holmes the relentless, keen-witted,
// ready-handed criminal agent, as it was possible to conceive. In his
// singular character the dual nature alternately asserted itself, and
// his extreme exactness and astuteness represented, as I have often
// thought, the reaction against the poetic and contemplative mood which
// occasionally predominated in him. The swing of his nature took him
// from extreme languor to devouring energy; and, as I knew well, he was
// never so truly formidable as when, for days on end, he had been
// lounging in his armchair amid his improvisations and his black-letter
// editions. Then it was that the lust of the chase would suddenly come
// upon him, and that his brilliant reasoning power would rise to the
// level of intuition, until those who were unacquainted with his
// methods would look askance at him as on a man whose knowledge was not
// that of other mortals. When I saw him that afternoon so enwrapped in
// the music at St. James's Hall I felt that an evil time might be
// coming upon those whom he had set himself to hunt down.

// "You want to go home, no doubt, Doctor," he remarked as we emerged.

// "Yes, it would be as well."

// "And I have some business to do which will take some hours. This
// business at Coburg Square is serious."

// "Why serious?"

// "A considerable crime is in contemplation. I have every reason to
// believe that we shall be in time to stop it. But to-day being
// Saturday rather complicates matters. I shall want your help
// to-night."

// "At what time?"

// "Ten will be early enough."

// "I shall be at Baker Street at ten."

// "Very well. And, I say, Doctor, there may be some little danger, so
// kindly put your army revolver in your pocket." He waved his hand,
// turned on his heel, and disappeared in an instant among the crowd.

// I trust that I am not more dense than my neighbours, but I was always
// oppressed with a sense of my own stupidity in my dealings with
// Sherlock Holmes. Here I had heard what he had heard, I had seen what
// he had seen, and yet from his words it was evident that he saw
// clearly not only what had happened but what was about to happen,
// while to me the whole business was still confused and grotesque. As I
// drove home to my house in Kensington I thought over it all, from the
// extraordinary story of the red-headed copier of the "Encyclopaedia"
// down to the visit to Saxe-Coburg Square, and the ominous words with
// which he had parted from me. What was this nocturnal expedition, and
// why should I go armed?  Where were we going, and what were we to do?
// I had the hint from Holmes that this smooth-faced pawnbroker's
// assistant was a formidable man--a man who might play a deep game. I
// tried to puzzle it out, but gave it up in despair and set the matter
// aside until night should bring an explanation.

// It was a quarter-past nine when I started from home and made my way
// across the Park, and so through Oxford Street to Baker Street. Two
// hansoms were standing at the door, and as I entered the passage I
// heard the sound of voices from above. On entering his room I found
// Holmes in animated conversation with two men, one of whom I
// recognised as Peter Jones, the official police agent, while the other
// was a long, thin, sad-faced man, with a very shiny hat and
// oppressively respectable frock-coat.

// "Ha! Our party is complete," said Holmes, buttoning up his pea-jacket
// and taking his heavy hunting crop from the rack. "Watson, I think you
// know Mr. Jones, of Scotland Yard? Let me introduce you to Mr.
// Merryweather, who is to be our companion in to-night's adventure."

// "We're hunting in couples again, Doctor, you see," said Jones in his
// consequential way. "Our friend here is a wonderful man for starting a
// chase. All he wants is an old dog to help him to do the running
// down."

// "I hope a wild goose may not prove to be the end of our chase,"
// observed Mr. Merryweather gloomily.

// "You may place considerable confidence in Mr. Holmes, sir," said the
// police agent loftily. "He has his own little methods, which are, if
// he won't mind my saying so, just a little too theoretical and
// fantastic, but he has the makings of a detective in him. It is not
// too much to say that once or twice, as in that business of the Sholto
// murder and the Agra treasure, he has been more nearly correct than
// the official force."

// "Oh, if you say so, Mr. Jones, it is all right," said the stranger
// with deference. "Still, I confess that I miss my rubber. It is the
// first Saturday night for seven-and-twenty years that I have not had
// my rubber."

// "I think you will find," said Sherlock Holmes, "that you will play
// for a higher stake to-night than you have ever done yet, and that the
// play will be more exciting. For you, Mr. Merryweather, the stake will
// be some Â£30,000; and for you, Jones, it will be the man upon whom you
// wish to lay your hands."

// "John Clay, the murderer, thief, smasher, and forger. He's a young
// man, Mr. Merryweather, but he is at the head of his profession, and I
// would rather have my bracelets on him than on any criminal in London.
// He's a remarkable man, is young John Clay. His grandfather was a
// royal duke, and he himself has been to Eton and Oxford. His brain is
// as cunning as his fingers, and though we meet signs of him at every
// turn, we never know where to find the man himself. He'll crack a crib
// in Scotland one week, and be raising money to build an orphanage in
// Cornwall the next. I've been on his track for years and have never
// set eyes on him yet."

// "I hope that I may have the pleasure of introducing you to-night.
// I've had one or two little turns also with Mr. John Clay, and I agree
// with you that he is at the head of his profession. It is past ten,
// however, and quite time that we started. If you two will take the
// first hansom, Watson and I will follow in the second."

// Sherlock Holmes was not very communicative during the long drive and
// lay back in the cab humming the tunes which he had heard in the
// afternoon. We rattled through an endless labyrinth of gas-lit streets
// until we emerged into Farrington Street.

// "We are close there now," my friend remarked. "This fellow
// Merryweather is a bank director, and personally interested in the
// matter. I thought it as well to have Jones with us also. He is not a
// bad fellow, though an absolute imbecile in his profession. He has one
// positive virtue. He is as brave as a bulldog and as tenacious as a
// lobster if he gets his claws upon anyone. Here we are, and they are
// waiting for us."

// We had reached the same crowded thoroughfare in which we had found
// ourselves in the morning. Our cabs were dismissed, and, following the
// guidance of Mr. Merryweather, we passed down a narrow passage and
// through a side door, which he opened for us. Within there was a small
// corridor, which ended in a very massive iron gate. This also was
// opened, and led down a flight of winding stone steps, which
// terminated at another formidable gate. Mr. Merryweather stopped to
// light a lantern, and then conducted us down a dark, earth-smelling
// passage, and so, after opening a third door, into a huge vault or
// cellar, which was piled all round with crates and massive boxes.

// "You are not very vulnerable from above," Holmes remarked as he held
// up the lantern and gazed about him.

// "Nor from below," said Mr. Merryweather, striking his stick upon the
// flags which lined the floor. "Why, dear me, it sounds quite hollow!"
// he remarked, looking up in surprise.

// "I must really ask you to be a little more quiet!" said Holmes
// severely. "You have already imperilled the whole success of our
// expedition. Might I beg that you would have the goodness to sit down
// upon one of those boxes, and not to interfere?"

// The solemn Mr. Merryweather perched himself upon a crate, with a very
// injured expression upon his face, while Holmes fell upon his knees
// upon the floor and, with the lantern and a magnifying lens, began to
// examine minutely the cracks between the stones. A few seconds
// sufficed to satisfy him, for he sprang to his feet again and put his
// glass in his pocket.

// "We have at least an hour before us," he remarked, "for they can
// hardly take any steps until the good pawnbroker is safely in bed.
// Then they will not lose a minute, for the sooner they do their work
// the longer time they will have for their escape. We are at present,
// Doctor--as no doubt you have divined--in the cellar of the City
// branch of one of the principal London banks. Mr. Merryweather is the
// chairman of directors, and he will explain to you that there are
// reasons why the more daring criminals of London should take a
// considerable interest in this cellar at present."

// "It is our French gold," whispered the director. "We have had several
// warnings that an attempt might be made upon it."

// "Your French gold?"

// "Yes. We had occasion some months ago to strengthen our resources and
// borrowed for that purpose 30,000 napoleons from the Bank of France.
// It has become known that we have never had occasion to unpack the
// money, and that it is still lying in our cellar. The crate upon which
// I sit contains 2,000 napoleons packed between layers of lead foil.
// Our reserve of bullion is much larger at present than is usually kept
// in a single branch office, and the directors have had misgivings upon
// the subject."

// "Which were very well justified," observed Holmes. "And now it is
// time that we arranged our little plans. I expect that within an hour
// matters will come to a head. In the meantime Mr. Merryweather, we
// must put the screen over that dark lantern."

// "And sit in the dark?"

// "I am afraid so. I had brought a pack of cards in my pocket, and I
// thought that, as we were a partie carrÃ©e, you might have your rubber
// after all. But I see that the enemy's preparations have gone so far
// that we cannot risk the presence of a light. And, first of all, we
// must choose our positions. These are daring men, and though we shall
// take them at a disadvantage, they may do us some harm unless we are
// careful. I shall stand behind this crate, and do you conceal
// yourselves behind those. Then, when I flash a light upon them, close
// in swiftly. If they fire, Watson, have no compunction about shooting
// them down."

// I placed my revolver, cocked, upon the top of the wooden case behind
// which I crouched. Holmes shot the slide across the front of his
// lantern and left us in pitch darkness--such an absolute darkness as I
// have never before experienced. The smell of hot metal remained to
// assure us that the light was still there, ready to flash out at a
// moment's notice. To me, with my nerves worked up to a pitch of
// expectancy, there was something depressing and subduing in the sudden
// gloom, and in the cold dank air of the vault.

// "They have but one retreat," whispered Holmes. "That is back through
// the house into Saxe-Coburg Square. I hope that you have done what I
// asked you, Jones?"

// "I have an inspector and two officers waiting at the front door."

// "Then we have stopped all the holes. And now we must be silent and
// wait."

// What a time it seemed! From comparing notes afterwards it was but an
// hour and a quarter, yet it appeared to me that the night must have
// almost gone and the dawn be breaking above us. My limbs were weary
// and stiff, for I feared to change my position; yet my nerves were
// worked up to the highest pitch of tension, and my hearing was so
// acute that I could not only hear the gentle breathing of my
// companions, but I could distinguish the deeper, heavier in-breath of
// the bulky Jones from the thin, sighing note of the bank director.
// From my position I could look over the case in the direction of the
// floor. Suddenly my eyes caught the glint of a light.

// At first it was but a lurid spark upon the stone pavement. Then it
// lengthened out until it became a yellow line, and then, without any
// warning or sound, a gash seemed to open and a hand appeared, a white,
// almost womanly hand, which felt about in the centre of the little
// area of light. For a minute or more the hand, with its writhing
// fingers, protruded out of the floor. Then it was withdrawn as
// suddenly as it appeared, and all was dark again save the single lurid
// spark which marked a chink between the stones.

// Its disappearance, however, was but momentary. With a rending,
// tearing sound, one of the broad, white stones turned over upon its
// side and left a square, gaping hole, through which streamed the light
// of a lantern. Over the edge there peeped a clean-cut, boyish face,
// which looked keenly about it, and then, with a hand on either side of
// the aperture, drew itself shoulder-high and waist-high, until one
// knee rested upon the edge. In another instant he stood at the side of
// the hole and was hauling after him a companion, lithe and small like
// himself, with a pale face and a shock of very red hair.

// "It's all clear," he whispered. "Have you the chisel and the bags?
// Great Scott! Jump, Archie, jump, and I'll swing for it!"

// Sherlock Holmes had sprung out and seized the intruder by the collar.
// The other dived down the hole, and I heard the sound of rending cloth
// as Jones clutched at his skirts. The light flashed upon the barrel of
// a revolver, but Holmes' hunting crop came down on the man's wrist,
// and the pistol clinked upon the stone floor.

// "It's no use, John Clay," said Holmes blandly. "You have no chance at
// all."

// "So I see," the other answered with the utmost coolness. "I fancy
// that my pal is all right, though I see you have got his coat-tails."

// "There are three men waiting for him at the door," said Holmes.

// "Oh, indeed! You seem to have done the thing very completely. I must
// compliment you."

// "And I you," Holmes answered. "Your red-headed idea was very new and
// effective."

// "You'll see your pal again presently," said Jones. "He's quicker at
// climbing down holes than I am. Just hold out while I fix the
// derbies."

// "I beg that you will not touch me with your filthy hands," remarked
// our prisoner as the handcuffs clattered upon his wrists. "You may not
// be aware that I have royal blood in my veins. Have the goodness,
// also, when you address me always to say 'sir' and 'please.'"

// "All right," said Jones with a stare and a snigger. "Well, would you
// please, sir, march upstairs, where we can get a cab to carry your
// Highness to the police-station?"

// "That is better," said John Clay serenely. He made a sweeping bow to
// the three of us and walked quietly off in the custody of the
// detective.

// "Really, Mr. Holmes," said Mr. Merryweather as we followed them from
// the cellar, "I do not know how the bank can thank you or repay you.
// There is no doubt that you have detected and defeated in the most
// complete manner one of the most determined attempts at bank robbery
// that have ever come within my experience."

// "I have had one or two little scores of my own to settle with Mr.
// John Clay," said Holmes. "I have been at some small expense over this
// matter, which I shall expect the bank to refund, but beyond that I am
// amply repaid by having had an experience which is in many ways
// unique, and by hearing the very remarkable narrative of the
// Red-headed League."

// "You see, Watson," he explained in the early hours of the morning as
// we sat over a glass of whisky and soda in Baker Street, "it was
// perfectly obvious from the first that the only possible object of
// this rather fantastic business of the advertisement of the League,
// and the copying of the 'Encyclopaedia,' must be to get this not
// over-bright pawnbroker out of the way for a number of hours every
// day. It was a curious way of managing it, but, really, it would be
// difficult to suggest a better. The method was no doubt suggested to
// Clay's ingenious mind by the colour of his accomplice's hair. The Â£4
// a week was a lure which must draw him, and what was it to them, who
// were playing for thousands? They put in the advertisement, one rogue
// has the temporary office, the other rogue incites the man to apply
// for it, and together they manage to secure his absence every morning
// in the week. From the time that I heard of the assistant having come
// for half wages, it was obvious to me that he had some strong motive
// for securing the situation."

// "But how could you guess what the motive was?"

// "Had there been women in the house, I should have suspected a mere
// vulgar intrigue. That, however, was out of the question. The man's
// business was a small one, and there was nothing in his house which
// could account for such elaborate preparations, and such an
// expenditure as they were at. It must, then, be something out of the
// house. What could it be? I thought of the assistant's fondness for
// photography, and his trick of vanishing into the cellar. The cellar!
// There was the end of this tangled clue. Then I made inquiries as to
// this mysterious assistant and found that I had to deal with one of
// the coolest and most daring criminals in London. He was doing
// something in the cellar--something which took many hours a day for
// months on end. What could it be, once more? I could think of nothing
// save that he was running a tunnel to some other building.

// "So far I had got when we went to visit the scene of action. I
// surprised you by beating upon the pavement with my stick. I was
// ascertaining whether the cellar stretched out in front or behind. It
// was not in front. Then I rang the bell, and, as I hoped, the
// assistant answered it. We have had some skirmishes, but we had never
// set eyes upon each other before. I hardly looked at his face. His
// knees were what I wished to see. You must yourself have remarked how
// worn, wrinkled, and stained they were. They spoke of those hours of
// burrowing. The only remaining point was what they were burrowing for.
// I walked round the corner, saw the City and Suburban Bank abutted on
// our friend's premises, and felt that I had solved my problem. When
// you drove home after the concert I called upon Scotland Yard and upon
// the chairman of the bank directors, with the result that you have
// seen."

// "And how could you tell that they would make their attempt to-night?"
// I asked.

// "Well, when they closed their League offices that was a sign that
// they cared no longer about Mr. Jabez Wilson's presence--in other
// words, that they had completed their tunnel. But it was essential
// that they should use it soon, as it might be discovered, or the
// bullion might be removed. Saturday would suit them better than any
// other day, as it would give them two days for their escape. For all
// these reasons I expected them to come to-night."

// "You reasoned it out beautifully," I exclaimed in unfeigned
// admiration. "It is so long a chain, and yet every link rings true."

// "It saved me from ennui," he answered, yawning. "Alas! I already feel
// it closing in upon me. My life is spent in one long effort to escape
// from the commonplaces of existence. These little problems help me to
// do so."

// "And you are a benefactor of the race," said I.

// He shrugged his shoulders. "Well, perhaps, after all, it is of some
// little use," he remarked. "'L'homme c'est rien--l'oeuvre c'est tout,'
// as Gustave Flaubert wrote to George Sand."

// A CASE OF IDENTITY

// "My dear fellow," said Sherlock Holmes as we sat on either side of
// the fire in his lodgings at Baker Street, "life is infinitely
// stranger than anything which the mind of man could invent. We would
// not dare to conceive the things which are really mere commonplaces of
// existence. If we could fly out of that window hand in hand, hover
// over this great city, gently remove the roofs, and peep in at the
// queer things which are going on, the strange coincidences, the
// plannings, the cross-purposes, the wonderful chains of events,
// working through generations, and leading to the most outrÃ© results,
// it would make all fiction with its conventionalities and foreseen
// conclusions most stale and unprofitable."

// "And yet I am not convinced of it," I answered. "The cases which come
// to light in the papers are, as a rule, bald enough, and vulgar
// enough. We have in our police reports realism pushed to its extreme
// limits, and yet the result is, it must be confessed, neither
// fascinating nor artistic."

// "A certain selection and discretion must be used in producing a
// realistic effect," remarked Holmes. "This is wanting in the police
// report, where more stress is laid, perhaps, upon the platitudes of
// the magistrate than upon the details, which to an observer contain
// the vital essence of the whole matter. Depend upon it, there is
// nothing so unnatural as the commonplace."

// I smiled and shook my head. "I can quite understand your thinking
// so." I said. "Of course, in your position of unofficial adviser and
// helper to everybody who is absolutely puzzled, throughout three
// continents, you are brought in contact with all that is strange and
// bizarre. But here"--I picked up the morning paper from the
// ground--"let us put it to a practical test. Here is the first heading
// upon which I come. 'A husband's cruelty to his wife.' There is half a
// column of print, but I know without reading it that it is all
// perfectly familiar to me. There is, of course, the other woman, the
// drink, the push, the blow, the bruise, the sympathetic sister or
// landlady. The crudest of writers could invent nothing more crude."
