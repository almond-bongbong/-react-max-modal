import React, { Fragment, useState } from 'react';
import CommonHighlighter from './CommonHighlighter';
import Modal, { useModal } from '@max/modal';
import customClose from './assets/close.svg';
import markPhoto from './assets/mark.jpg';
import tolstoyPhoto from './assets/tolstoy.jpg';

function App() {
  const [basicModal, setBasicModal] = useState(false);
  const [centerModal, setCenterModal] = useState(false);
  const [centerLongModal, setCenterLongModal] = useState(false);
  const [expandModal, setExpandModal] = useState(false);
  const [expandTitleModal, setExpandTitleModal] = useState(false);
  const [customButtonModal, setCustomButtonModal] = useState(false);

  const [examNestedModal, setExamNestedModal] = useState(false);
  const [examNestedChildModal, setExamNestedChildModal] = useState(false);
  const [examProfileModal, setExamProfileModal] = useState(false);

  const [hookVisible, openHookVisible, closeHookVisible] = useModal(false);

  return (
    <Fragment>
      <div className="container">
        <header>
          <div className="header-content">
            <h1>max's modal</h1>
            <div className="links">
              <a
                href="https://github.com/almond-bongbong/-max-modal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="data:image/png;base64,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"
                  alt="github link"
                />
              </a>
            </div>
          </div>
        </header>

        <h2 id="Modal">Basic usage</h2>

        {/** Basic usage **/}
        <div className="example-area">
          <div className="playground">
            <button
              type="button"
              className="example-button"
              onClick={() => setBasicModal(true)}
            >
              open modal
            </button>
            <Modal
              title="Modal"
              visible={basicModal}
              onClose={() => setBasicModal(false)}
            >
              Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquam aliquid doloremque eum illum magnam maiores neque pariatur
              quis quisquam quod quos, rerum sint, unde. Animi expedita fuga
              odio quae temporibus.
            </Modal>
          </div>

          <CommonHighlighter>
            {`import React, { useState } from 'react'
import Modal from '@max/modal'

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setVisible(true)}
      >
        open modal
      </button>

      <Modal
        title="Modal"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        contents
      </Modal>
    </div>
  );
}`}
          </CommonHighlighter>
        </div>

        {/** Options **/}
        <h2>Options</h2>
        <div className="example-area">
          {/** Center mode **/}
          <h3>Center mode</h3>
          <div className="playground">
            <button
              type="button"
              className="example-button"
              onClick={() => setCenterModal(true)}
            >
              basic
            </button>
            <Modal
              title="Warning"
              visible={centerModal}
              onClose={() => setCenterModal(false)}
              isCenteredMode
            >
              Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Modal>

            <button
              type="button"
              className="example-button"
              onClick={() => setCenterLongModal(true)}
            >
              long content
            </button>
            <Modal
              title="The Old Man and the Sea"
              visible={centerLongModal}
              onClose={() => setCenterLongModal(false)}
              isCenteredMode
            >
              They sailed well and the old man soaked his hands in the salt
              water and tried to keep his head clear. There were high cumulus
              clouds and enough cirrus above them so that the old man knew the
              breeze would last all night. The old man looked at the fish
              constantly to make sure it was true. It was an hour before the
              first shark hit him.
              <br />
              <br />
              The shark was not an accident. He had come up from deep down in
              the water as the dark cloud of blood had settled and dispersed in
              the mile deep sea He had come up so fast and absolutely without
              caution that he broke the surface of the blue water and was in the
              sun. Then he fell back into the sea and picked up the scent and
              started swimming on the course the skiff and the fish had taken.
              <br />
              <br />
              Sometimes he lost the scent. But he would pick it up again, or
              have just a trace of it, and he swam fast and hard on the course.
              He was a very big Mako shark, built to swim as fast as the fastest
              fish in the sea and everything about him was beautiful except his
              jaws. His back was as blue as a sword fish's and his belly was
              silver and his hide was smooth and handsome. He was built as a
              swordfish except for his huge jaws Which were tight shut now as he
              swam fast, just under the surface with his high dorsal fin knifing
              through the water without wavering. Inside the closed double lip
              of his jaws all of his eight rows of teeth were slanted inwards.
              They were not the ordinary pyramid-shaped teeth of most sharks.
              They were shaped like a man's fingers when they are crisped like
              claws. They were nearly as long as the fingers of the old man and
              they had razor-sharp cutting edges on both sides. This was a fish
              built to feed on all the fishes in the sea, that were so fast and
              strong and well armed that they had no other enemy. Now he speeded
              up as he smelled the fresher scent and his blue dorsal fin cut the
              water.
              <br />
              <br />
              When the old man saw him coming be knew that this was a shark that
              had no fear at all and would do exactly what he wished. He
              prepared the harpoon and made the rope fast while he watched the
              shark come on. The rope was short as it lacked what he had cut
              away to lash the fish.
              <br />
              <br />
              The old man's head was clear and good now and he was full of
              resolution, but he had little hope. It was too good to last, he
              thought. He took one look at the great fish as he watched the
              shark close in. It might as well have been a dream, he thought. I
              cannot keep him from hitting me but maybe I can get him. Dentuso ,
              he thought. Bad luck to your mother.
              <br />
              <br />
              The shark closed fast astern and when he hit the fish the old man
              saw his mouth open and his strange eyes and the clicking chop of
              the teeth as he drove forward in the meat just above the tail. The
              shark's head was out of the water and his back was coming out and
              the old man could hear the noise of skin and flesh ripping on the
              big fish when he rammed the harpoon down onto the shark's head at
              a spot where the line between his eyes intersected with the line
              that ran straight back from his nose. There were no such lines.
              There was only the heavy sharp blue head and the big eyes and the
              clicking, thrusting all-swallowing jaws. But that was the location
              of the brain and the old man hit it.
            </Modal>
          </div>
          <CommonHighlighter>
            {`<Modal
  title="The Old Man and the Sea"
  visible={visible}
  onClose={() => setVisible(false)}
  isCenteredMode
>
  contents
</Modal>`}
          </CommonHighlighter>
        </div>

        <div className="example-area">
          <h3>Expand mode</h3>
          <div className="playground">
            <button
              type="button"
              className="example-button"
              onClick={() => setExpandModal(true)}
            >
              basic
            </button>
            <Modal
              visible={expandModal}
              onClose={() => setExpandModal(false)}
              isExpandedMode
            >
              <img
                src="https://placeimg.com/600/800/any"
                alt=""
                style={{ display: 'block', width: '100%' }}
              />
            </Modal>

            <button
              type="button"
              className="example-button"
              onClick={() => setExpandTitleModal(true)}
            >
              with title
            </button>
            <Modal
              visible={expandTitleModal}
              title="Keep going"
              onClose={() => setExpandTitleModal(false)}
              isExpandedMode
            >
              <img
                src="https://placeimg.com/600/800/any"
                style={{ display: 'block', width: '100%' }}
                alt=""
              />
            </Modal>
          </div>
          <CommonHighlighter>
            {`<Modal
  title="Title"
  visible={visible}
  onClose={() => setVisible(false)}
  isExpandedMode
>
  <img
    src="https://placeimg.com/600/800/any"
    style={{ display: 'block', width: '100%' }}
    alt=""
  />
</Modal>`}
          </CommonHighlighter>
        </div>

        <div className="example-area">
          <h3>Custom close button</h3>
          <div className="playground">
            <button
              type="button"
              className="example-button"
              onClick={() => setCustomButtonModal(true)}
            >
              open modal
            </button>
            <Modal
              visible={customButtonModal}
              title="Fyodor Dostoevsky, Crime and Punishment"
              onClose={() => setCustomButtonModal(false)}
              closeButton={
                <img src={customClose} width={30} height={30} alt="close" />
              }
            >
              "Pain and suffering are always inevitable for a large intelligence
              and a deep heart. The really great men must, I think, have great
              sadness on earth."
            </Modal>
          </div>
          <CommonHighlighter>
            {`import customClose from './assets/close.svg';

<Modal
  visible={customButtonModal}
  title="Fyodor Dostoevsky, Crime and Punishment"
  onClose={() => setCustomButtonModal(false)}
  closeButton={<img src={customClose} width={30} height={30} alt="close" />}
>
  contents
</Modal>`}
          </CommonHighlighter>
        </div>

        <h2>Example</h2>
        <div className="example-area">
          <h3>Nested modal</h3>
          <div className="playground">
            <button
              type="button"
              className="example-button"
              onClick={() => setExamNestedModal(true)}
            >
              open modal
            </button>
            <Modal
              title="Family Happiness"
              visible={examNestedModal}
              onClose={() => setExamNestedModal(false)}
            >
              "A quiet secluded life in the country, with the possibility of
              being useful to people to whom it is easy to do good, and who are
              not accustomed to have it done to them; then work which one hopes
              may be of some use; then rest, nature, books, music, love for
              one's neighbor — such is my idea of happiness.” -{' '}
              <a href="#tolstoy" onClick={() => setExamNestedChildModal(true)}>
                Leo Tolstoy
              </a>
              <Modal
                visible={examNestedChildModal}
                title="Leo Tolstoy"
                onClose={() => setExamNestedChildModal(false)}
                width={450}
                isCenteredMode
                isExpandedMode
              >
                <img
                  style={{ display: 'block', width: '100%' }}
                  src={tolstoyPhoto}
                  alt="Leo Tolstoy"
                />
              </Modal>
            </Modal>
          </div>
          <CommonHighlighter>
            {`import React, { useState } from 'react'
import Modal from '@max/modal'

export default function App() {
  const [visibleParent, setVisibleParent] = useState(false);
  const [visibleChild, setVisibleChild] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="example-button"
        onClick={() => setVisibleParent(true)}
      >
        open modal
      </button>

      <Modal
        title="Family Happiness"
        visible={visibleParent}
        onClose={() => setVisibleParent(false)}
      >
        "A quiet secluded life in the country, ..."
        - <a href="#tolstoy" onClick={() => setVisibleChild(true)}>Leo Tolstoy</a>

        <Modal
          visible={visibleChild}
          title="Leo Tolstoy"
          onClose={() => setVisibleChild(false)}
          width={600}
          isCenteredMode
          isExpandedMode
        >
          <img
            style={{ display: 'block', width: '100%' }}
            src={tolstoyPhoto}
            alt="Leo Tolstoy"
          />
        </Modal>
      </Modal>
    </div>
  );
}`}
          </CommonHighlighter>
        </div>

        {/** Profile modal **/}
        <div className="example-area">
          <h3>Profile modal</h3>
          <div className="playground">
            <button
              type="button"
              className="example-button"
              onClick={() => setExamProfileModal(true)}
            >
              open modal
            </button>
            <Modal
              visible={examProfileModal}
              title="Mark Elliot Zuckerberg"
              onClose={() => setExamProfileModal(false)}
              width={700}
              isExpandedMode
            >
              <div
                style={{
                  position: 'relative',
                  height: 180,
                  background: '#555',
                }}
              >
                <img
                  src={markPhoto}
                  alt="mark"
                  style={{
                    display: 'block',
                    position: 'absolute',
                    bottom: '-50px',
                    left: '50%',
                    width: 150,
                    marginLeft: '-100px',
                    borderRadius: '50%',
                  }}
                />
              </div>
              <p style={{ marginTop: 30, padding: 50 }}>
                <b>Mark Elliot Zuckerberg</b> (born May 14, 1984) is an American
                media magnate, internet entrepreneur, and philanthropist. He is
                known for co-founding Facebook, Inc. and serves as its chairman,
                chief executive officer, and controlling shareholder. He also is
                a co-founder of the solar sail spacecraft development project
                Breakthrough Starshot and serves as one of its board members.
                <br />
                <br />
                Born in White Plains, New York, Zuckerberg attended Harvard
                University, where he launched the Facebook social networking
                service from his dormitory room on February 4, 2004, with
                college roommates Eduardo Saverin, Andrew McCollum, Dustin
                Moskovitz, and Chris Hughes. Originally launched to select
                college campuses, the site expanded rapidly and eventually
                beyond colleges, reaching one billion users by 2012. Zuckerberg
                took the company public in May 2012 with majority shares. In
                2007, at age 23, he became the world's youngest self-made
                billionaire. As of September 2020, Zuckerberg's net worth is
                $111 billion, making him the 4th-richest person in the world. He
                is the only person under 40-years-old in Forbes' list of the 20
                richest people.
              </p>
            </Modal>
          </div>
          <CommonHighlighter>
            {`<Modal
  visible={visible}
  title="Mark Elliot Zuckerberg"
  onClose={() => setVisible(false)}
  width={700}
  isExpandedMode
>
  <div
    style={{
      position: 'relative',
      height: 180,
      background: '#555',
    }}
  >
    <img
      src={markPhoto}
      alt="mark"
      style={{
        display: 'block',
        position: 'absolute',
        bottom: '-50px',
        left: '50%',
        width: 150,
        marginLeft: '-100px',
        borderRadius: '50%',
      }}
    />
  </div>
  <p style={{ marginTop: 30, padding: 50 }}>
    <b>Mark Elliot Zuckerberg</b> (born May 14, 1984) is an
    American media magnate, internet entrepreneur, and
    philanthropist...
  </p>
</Modal>`}
          </CommonHighlighter>
        </div>

        <h2>Hooks</h2>
        <div className="example-area">
          <h3>useModal</h3>
          <div className="playground">
            <button
              type="button"
              className="example-button"
              onClick={openHookVisible}
            >
              open modal
            </button>
            <Modal
              visible={hookVisible}
              title="Friedrich Nietzsche"
              onClose={closeHookVisible}
            >
              "Do you want to have an easy life? Then always stay with the herd
              and lose yourself in the herd."
            </Modal>
          </div>
          <CommonHighlighter>
            {`import React from 'react'
import Modal, { useModal } from '@max/modal'

export default function App() {
  const [visible, openModal, closeModal] = useModal(false);

  return (
    <>
      <button type="button" onClick={openModal}>
        open modal
      </button>

      <Modal
        title="Title"
        visible={visible}
        onClose={closeModal}
      >
        contents
      </Modal>
    </>
  );
}`}
          </CommonHighlighter>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
