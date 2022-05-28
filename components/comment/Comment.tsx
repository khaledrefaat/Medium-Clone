import Modal from '../modal/Modal';
import Close from '../icons/close.svg';
import CommentItem from './CommentItem';
import CommentField from './CommentField';
import { MouseEvent } from 'react';

interface CommentProps {
  hideComment: () => void;
}

const Comment: React.FC<CommentProps> = ({ hideComment }) => {
  const handelCommentSubmit = (comment: string) => console.log(comment);

  return (
    <Modal
      hideModal={hideComment}
      className=" bg-gray-700/10 z-50 cursor-pointer"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="fixed bg-white h-5/6 overflow-y-scroll w-screen sm:h-screen sm:w-2/4 lg:w-1/3 xl:w-1/4 shadow-xl right-0 sm:top-0 bottom-0 px-5 cursor-auto"
      >
        <div className="flex justify-between w-full items-center mt-5">
          <h2 className="capitalize font-semibold text-2xl">
            responses <span className="text-xl">(2)</span>
          </h2>
          <Close className="cursor-pointer" onClick={hideComment} />
        </div>
        <CommentField
          onSubmit={handelCommentSubmit}
          img="/jake.jpg"
          author="Jake Thompson"
        />

        <CommentItem
          author="Jake Thompson"
          img="/jake.jpg"
          date="2022-04-20T00:19:26Z"
          description="Ooooh feather moving feather!. Oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap trip on catnip purr when being pet small kitty warm kitty little balls of fur stare out the window stretch out on bed. Get video posted to internet for chasing red dot if it smells like fish eat as much as you wish yet haha you hold me hooman i scratch climb a tree, wait for a fireman jump to fireman then scratch his face purr cough furball who's the baby. Ignore the human until she needs to get up, then climb on her lap and sprawl wake up human for food at 4am yet refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am human is in bath tub, emergency! drowning! meooowww!. Really likes hummus fall asleep on the washing machine but cat sit like bread pee in the shoe for i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk scoot butt on the rug poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls. Check cat door for ambush 10 times before coming in. Cat is love, cat is life mew mew hey! you there, with the hands yet i heard this rumor where the humans are our owners, pfft, what do they know?! yet kick up litter bathe private parts with"
          likes={2}
          replies={3}
        />
        <CommentItem
          author="Jake Thompson"
          img="/jake.jpg"
          date="2022-04-20T00:19:26Z"
          description="Ooooh feather moving feather!. Oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap trip on catnip purr when being pet small kitty warm kitty little balls of fur stare out the window stretch out on bed. Get video posted to internet for chasing red dot if it smells like fish eat as much as you wish yet haha you hold me hooman i scratch climb a tree, wait for a fireman jump to fireman then scratch his face purr cough furball who's the baby. Ignore the human until she needs to get up, then climb on her lap and sprawl wake up human for food at 4am yet refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am human is in bath tub, emergency! drowning! meooowww!. Really likes hummus fall asleep on the washing machine but cat sit like bread pee in the shoe for i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk scoot butt on the rug poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls. Check cat door for ambush 10 times before coming in. Cat is love, cat is life mew mew hey! you there, with the hands yet i heard this rumor where the humans are our owners, pfft, what do they know?! yet kick up litter bathe private parts with"
          likes={2}
        />
      </div>
    </Modal>
  );
};

export default Comment;
