"use client"
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { Context } from '../lib/context';
import styles from './page.module.css';
import { Card } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { encode } from 'next-auth/jwt';

export default function Home() {
  const router = useRouter();
  const { setObject, object } = useContext(Context);
  const session = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function formSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const urlInfo = (formData.get('url-info') || '').replace('https://', '').replace('http://', '').replace('linkedin.com/in/', '').replace('www.', '');
    const email = formData.get('email-info');
    const phone = formData.get('phone-info');

    console.log('Form Values:', { urlInfo, email, phone }); // Log form values
    
    // Handle your fetch request here
    const uri = encodeURI(`http://3.25.93.170:3000/${urlInfo}/${session.data.MongoId}`);
    fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return await response.json();
      })
      .then((data) => {
        // Handle response data
        setObject((object) => {
          return {...object, name: data.name, byline: data.byline, location: data.location, description: data.description, pfp_link: data.pfp_link, educations: data.educations, experiences: data.experiences,}
        })

        console.log(object);

        setLoading(false);
        router.push('http://localhost:3000/words');
      })
      .catch((error) => {
        // Handle errors
        setError(error);
        console.log(error);
        setLoading(false);
      });

    // Set object for context here
  }

  return (
    <main className={styles.main}>
      <img src='/assets/Blue_Logo.png' style={{ position: 'absolute', width: '120px' }}></img>
      <div className={styles.background} style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-evenly', width: '100vw', height: '100vh', background: 'linear-gradient(180deg, rgba(172,238,252,1) 0%, rgba(23,171,255,1) 100%)' }}>
        <Card style={{ backgroundColor: 'white', position: 'absolute', margin: '216px auto 400px auto', padding: '25px 260px 40px 260px', borderRadius: '80px', display: 'grid', gridTemplate: '1fr 1fr', justifyContent: 'space-evenly' }}>
          <h1 style={{ paddingBottom: '30px', color: 'black', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Hi! <br></br>Please enter your LinkedIn profile URL below!
          </h1>
          <form onSubmit={formSubmit}>
            <div>
              <label htmlFor='url' style={{ color: 'black', fontWeight: 'bold', fontSize: '1.5rem', position: 'absolute', left: '4rem', paddingTop: '25px' }}>
                LinkedIn:
              </label>
              <input
                id='url'
                type='url'
                required
                name='url-info'
                placeholder='www.linkedin.com/in/[profile]'
                style={{
                  border: '1px solid #000',
                  width: '610px',
                  borderRadius: '1rem',
                  height: '60px',
                  padding: '20px',
                  textAlign: 'center',
                  margin: '15px',
                  fontSize: '20px',
                  backgroundColor: 'white',
                  color: 'black',
                }}
              />
            </div>
            <div>
              <label htmlFor='email' style={{ color: 'black', fontWeight: 'bold', fontSize: '1.5rem', position: 'absolute', left: '4rem', paddingTop: '25px' }}>
                Email:
              </label>
              <input
                id='email'
                type='email'
                required
                name='email-info'
                placeholder='email@domain.com'
                style={{
                  border: '1px solid #000',
                  width: '610px',
                  borderRadius: '1rem',
                  height: '60px',
                  padding: '20px',
                  textAlign: 'center',
                  margin: '15px',
                  fontSize: '20px',
                  backgroundColor: 'white',
                  color: 'black',
                }}
              />
            </div>
            <div>
              <label htmlFor='phone' style={{ color: 'black', fontWeight: 'bold', fontSize: '1.5rem', position: 'absolute', left: '4rem', paddingTop: '25px' }}>
                Phone:
              </label>
              <input
                id='phone'
                type='phone'
                required
                name='phone-info'
                placeholder='Phone Number'
                style={{
                  border: '1px solid #000',
                  width: '610px',
                  borderRadius: '1rem',
                  height: '60px',
                  padding: '20px',
                  textAlign: 'center',
                  margin: '15px',
                  fontSize: '20px',
                  backgroundColor: 'white',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ paddingTop: '20px' }}>
              <button style={{ color: 'black', backgroundColor: '#66b7f9', padding: '1.25rem 4rem', borderRadius: '20px' }}>Submit</button>
            </div>
          </form>
        </Card>
      </div>
    </main>
  );
}
