import React, { useState } from 'react';
import './Form.scss';

import Select from '../Select/Select';
import Button from '../Button/Button';

import { sortDaysArray } from '../../utils/sortDaysArray/sortDaysArray';
import { navigate } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

/**
 * @namespace Form
 * @function Form
 * @author Trevor Cash
 * @since 07/18/22
 * @version 1.0.0
 * @component
 */
export default function Form({ availability }) {
  const [state, setState] = useState({});

  const handleChange = (e, selectKey) => {
    if (selectKey) {
      setState({ ...state, [selectKey]: e.value });
    } else if (e.target.type === 'checkbox') {
      const key = e.target.parentNode.parentNode.getAttribute('data-name');
      const values = state?.[key] !== '' && state?.[key]?.split(', ');
      let value;
      if (!values) {
        value = e.target.value;
      } else {
        if (values.includes(e.target.value)) {
          values.splice(values.indexOf(e.target.value), 1);
        } else {
          values.push(e.target.value);
        }
        if (values.length > 1) {
          value = sortDaysArray(values).join(', ');
        } else {
          value = values[0] ?? '';
        }
      }

      setState({ ...state, [key]: value });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };
  return (
    <form
      name='contact'
      method='post'
      action='/thanks/'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type='hidden' name='form-name' value='contact' />
      <p hidden>
        <label>
          Don’t fill this out:{' '}
          <input name='bot-field' onChange={handleChange} />
        </label>
      </p>
      <label>
        Name:
        <br />
        <input type='text' name='name' onChange={handleChange} />
      </label>
      <label>
        Email:
        <br />
        <input type='email' name='email' onChange={handleChange} />
      </label>
      <label>
        Design:
        <br />
        <input type='text' name='design' onChange={handleChange} />
      </label>
      <label>
        Placement:
        <br />
        <input type='text' name='placement' onChange={handleChange} />
      </label>
      <label>
        Size
        <Select
          name='size'
          options={[
            {
              value: '2-4 Inches',
              label: '2-4 Inches (business card size)',
            },
            {
              value: '4-8 Inches',
              label: '4-8 Inches (palm to hand size)',
            },
            {
              value: '8-12 Inches',
              label: '8-12 Inches (printer paper size)',
            },
            {
              value: 'Over 12 Inches',
              label: 'Over 12 Inches',
            },
          ]}
          onChange={(e) => {
            handleChange(e, 'Size');
          }}
        />
      </label>
      <label>
        Color
        <Select
          options={[
            {
              value: 'No Color or Shading',
              label: 'No Color or Shading',
            },
            {
              value: 'No Color with Shading',
              label: 'No Color with Shading',
            },
            {
              value: 'Single Color with Shading',
              label: 'Single Color with Shading',
            },
            {
              value: 'Multi Colored',
              label: 'Multi Colored',
            },
          ]}
          onChange={(e) => {
            handleChange(e, 'Color');
          }}
        />
      </label>
      <label data-name='availability'>
        Availability
        <input type='hidden' name={'availability'} />
        {days.map((day) => {
          if (!availability[day.toLowerCase()].off) {
            return (
              <label key={day} className='Input-Checkbox'>
                {day} {availability?.[day.toLowerCase()]?.start} -{' '}
                {availability?.[day.toLowerCase()]?.end}
                <input type='checkbox' value={day} onChange={handleChange} />
              </label>
            );
          }
          return <></>;
        })}
      </label>
      <label>
        Additional Comments:
        <br />
        <textarea name='comments' onChange={handleChange} />
      </label>
      <Button submit>Send</Button>
    </form>
  );
}
