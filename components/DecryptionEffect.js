"use client";

import { useEffect } from 'react';

export default function DecryptionEffect() {
  useEffect(() => {
    const text = document.querySelector('.logo-text');
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    const scramble = () => {
      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        text.innerText = text.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= text.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 6; // Slower increment for a slower animation
      }, 100); // Adjust the interval timing for a slower effect
    };

    text.dataset.value = text.innerText;
    scramble();
  }, []);

  return null;
}
