import React, {useEffect} from 'react';
import _ from 'lodash';
import {templates} from '../utils/data';

export default function Index() {
  const [titleValues, setTitleValues] = React.useState<{[key: string]: string}>({});
  const onSelectChange = (title: string) => (e) => {
    const tv = {...titleValues};
    tv[title] = e.target.value;
    setTitleValues(tv);
  };
  const sum = Object.values(titleValues).reduce((acc, val) => acc + parseInt(val), 0);

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
  return (
    <div className="font-sans p-4">
      {/* <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            href={window.__REMIX_PUBLIC_PATH__ + "/"}
          >
            root
          </a>
        </li>
      </ul> */}
      <ul className="list-disc mt-4 pl-6 space-y-2">
        {templates[0].sections.map((item, index) => {
          const {text, sections} = item;
          // const vals = sections.filter(i => i.value_int);
          return (
            <li key={index}>
              <h2>{text}</h2>
              {sections.length ? (
                <>
                  <select onChange={onSelectChange(text)}>
                    <option value="">Select</option>
                    {sections.map((val, index) => {
                      return (
                        <option key={index} value={val.value_int?.toString()}>
                          {`(${val.value_int}) ${val.text}`}
                        </option>
                      );
                    })}
                  </select>
                </>
              ) : null}
            </li>
          );
        })}
      </ul>
      <div>TOTAL SCORE: {sum} (MAXIMUM SCORE 30)</div>
      <button onClick={clickCopy}>copy as text</button>
    </div>
  );
}
