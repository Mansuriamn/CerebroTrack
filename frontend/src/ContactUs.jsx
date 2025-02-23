import React, { useState, useEffect } from 'react';
import "./ContactUs.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { app } from './firebase.jsx';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

export default function ContactUs() {
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error('Please enter your name');
      return;
    }

    if (!email.trim()) {
      toast.error('Please enter your email');
      return;
    }

    if (!email.match(/.+@gmail\.com$/)) {
      toast.error('Please use a valid Gmail address');
      return;
    }

    if (!message.trim()) {
      toast.error('Please enter your message');
      return;
    }

    if (!auth.currentUser) {
      toast.error('User is not logged in');
      return;
    }

    const newData = { name, email, message };

    try {
      Write(auth.currentUser.uid, newData);
      toast.success('Successfully Submitted');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast.error('An error occurred while submitting the form');
      console.error(error);
    }
  };

  const Write = async (uid, data) => {
    const userRef = doc(firestore, "ContactUs", uid);
    try {
      await setDoc(userRef, data);
      console.log("User data written successfully!");
    } catch (error) {
      console.error("Error writing user data:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user.uid);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="owner">
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="owner-text">
          <h2>Contact Us</h2>
          <p>Please enter your name, email, and message to contact us.</p>
        </div>

        <div className="subscribe">
          <form className="form_con" onSubmit={handleSubmit}>
            <div>
              <h3>Name :</h3>
              <input
                id='in'
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <h3>Email :</h3>
              <input
                id='in'
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <h3>Message :</h3>
              <textarea
                id="message"
                cols="30"
                rows="5"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button id="search" type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
