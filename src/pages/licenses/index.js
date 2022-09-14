import * as React from 'react';
import Banner from '../../Components/Banner/Banner';
import Layout from '../../Components/Layout/Layout';
import allData from './licenses.json';
import { extractNameFromGithubUrl } from '../../utils/extractNameFromGithubUrl/extractNameFromGithubUrl';
import './styles.scss';

const Licenses = () => {
  let licenses = Object.keys(allData).map((key) => {
    let { licenses, ...license } = allData[key];
    let name, version;
    if (key[0] === '@') {
      [, name, version] = key.split('@');
    } else {
      [name, version] = key.split('@');
    }

    let username =
      extractNameFromGithubUrl(license.repository) ||
      extractNameFromGithubUrl(license.licenseUrl);

    let userUrl;
    let image;
    if (username) {
      // username = username;
      image = `http://github.com/${username}.png`;
      userUrl = `http://github.com/${username}`;
    }

    return {
      key,
      name,
      image,
      userUrl,
      username,
      licenses: licenses.slice(0, 405),
      version,
      ...license,
    };
  });
  return (
    <Layout className='Licenses'>
      <Banner title='Licenses' />
      <section className='Inner-Frame'>
        {licenses.map(
          (
            {
              image,
              userUrl,
              username,
              name,
              version,
              licenses,
              repository,
              licenseUrl,
            },
            index
          ) => {
            let title = name;
            if (username) {
              if (title.toLowerCase() !== username.toLowerCase()) {
                title += ` by ${
                  username.charAt(0).toUpperCase() + username.substring(1)
                }`;
              }
            }
            return (
              <div className='License' key={index}>
                {image && (
                  <a href={userUrl} className='image-link'>
                    <img src={image} className='image' alt={title} />
                  </a>
                )}
                <a href={repository} className='info'>
                  <div>
                    <div className='name'>{title}</div>
                    <div className='text'>Version: {version}</div>
                  </div>
                </a>
              </div>
            );
          }
        )}
      </section>
    </Layout>
  );
};
export default Licenses;
