import React, {useEffect, useRef} from 'react';
import {templates} from '../utils/data';
import _ from 'lodash';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ati = {
  id: '1',
  test: templates[0],
  complete: false,
  selectedOptions: {
    [templates[0].sections[0].text]: '1',
  },
};

type TestInstance = typeof ati;
//  {
//   id: string;
//   test: (typeof templates)[0];
//   selectedOptions: {[key: string]: string};
// };

function TestEditor({testInstance}: {testInstance: TestInstance}) {
  const [titleValues, setTitleValues] = React.useState(testInstance.selectedOptions);
  const onSelectChange = (title: string) => (e) => {
    const tv = {...titleValues};
    tv[title] = e.target.value;
    setTitleValues(tv);
    testInstance.selectedOptions = tv;
  };
  const sum = Object.values(titleValues).reduce((acc, val) => acc + parseInt(val), 0);
  // console.log(testInstance, titleValues);
  const clickCopy = (e) => {
    e.preventDefault();
    let txt = ``;
    for (let item of d) {
      const {title, vals} = item;
      if (vals.length === 0) {
        txt += `${title}\n`;

        continue;
      }
      if (!titleValues[title]) {
        const v = vals.map((val) => val.text).join('\n');
        txt += `${title}\n\tMISSING SELECTION\n`;
      } else {
        const value = titleValues[title];
        const v = _.find(vals, {value}).text.replace(/\n/g, '\n\t');
        txt += `${title}\n\t(${value}) ${v}\n`;
      }
    }
    txt += `TOTAL SCORE: ${sum} (MAXIMUM SCORE 30)`;
    console.log(txt);
    navigator.clipboard.writeText(txt);
  };
  const test = testInstance.test;
  return (
    <div className="font-sans p-4">
      <div>
        TOTAL SCORE: {sum} (MAXIMUM SCORE 30)
        <button style={{marginLeft: '6px'}} onClick={clickCopy}>
          copy as text
        </button>
      </div>

      <ul className="list-disc mt-4 pl-6 space-y-2">
        {test.sections.map((item, index) => {
          const {text: title, sections} = item;
          const value = titleValues[title];
          return (
            <li key={index}>
              <h2>
                <b>{`${title}`}</b>
              </h2>
              {sections.length ? (
                <>
                  {/* <select onChange={onSelectChange(text)} value={titleValues[text]}>
                    <option value="">Select</option>
                    {sections.map((val, index) => {
                      return (
                        <option key={index} value={val.value_int?.toString()}>
                          {`(${val.value_int}) ${val.text.substring(0, 50)}`}
                        </option>
                      );
                    })}
                  </select> */}
                  {sections.map((section, idx, col) => {
                    const {value_int, text} = section;
                    const isFirst = idx === 0;
                    const onChange = () => {
                      const tv = {...titleValues};
                      tv[title] = value_int.toString();
                      setTitleValues(tv);
                      testInstance.selectedOptions = tv;
                    };
                    return (
                      <div
                        className="flex"
                        style={isFirst ? {} : {marginTop: '10px'}}
                        key={value_int}>
                        <input
                          id={text}
                          type="radio"
                          value={value_int}
                          name={title}
                          checked={titleValues[title] === value_int.toString()}
                          onChange={onChange}
                        />
                        <label style={{marginLeft: '8px'}} htmlFor={text}>
                          {`(${value_int}) ${text}`}
                        </label>
                      </div>
                    );
                  })}
                </>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Index() {
  const [modalIsOpen, setIsOpen] = React.useState(true);
  const [currentTest, setCurrentTest] = React.useState<TestInstance | undefined>(ati);
  const [testBuilder, setTestBuilder] = React.useState<TestInstance[]>([ati]);
  const [currentSelection, setCurrentSelection] = React.useState('');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setCurrentTest(undefined);
    setIsOpen(false);
  }

  const options = templates;
  const setv = (e) => {
    setCurrentSelection(e.target.value);
  };
  const addTest = () => {
    if (currentSelection) {
      const c = _.cloneDeep(testBuilder);
      const match = _.find(templates, {id: currentSelection});
      if (match) {
        c.push({
          id: Math.random().toString(),
          test: match,
          selectedOptions: {},
          complete: false,
        });
      }
      setTestBuilder(c);
    }
  };
  return (
    <div className="">
      <ul>
        {testBuilder.map((ti, index) => {
          const edit = () => {
            setCurrentTest(ti);
            openModal();
          };
          const sum = Object.values(ti.selectedOptions).reduce(
            (acc, val) => acc + parseInt(val),
            0
          );
          return (
            <li key={index}>
              <div>
                <span>{`${ti.test.name || 'noname'} (${sum})${
                  ti.complete ? '[complete]' : '[incomplete]'
                }`}</span>
                <button style={{marginLeft: '10px'}} onClick={edit}>
                  edit
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <select onChange={setv}>
          <option value="">Select</option>
          {options.map((option, index) => {
            return (
              <option key={index} value={option.id}>
                {option.name}
              </option>
            );
          })}
        </select>
        <button onClick={addTest}>add</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal">
        {currentTest ? <TestEditor testInstance={currentTest} /> : null}
      </Modal>
    </div>
  );
}
