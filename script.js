const videos = {
  brass: "brass.mp4",
  woodwind: "woodwind.mp4",
  percussion: "percussion.mp4",
  guard: "guard.mp4"
};

const stories = {
  brass: "Welcome to the Brass section! You'll learn to play powerful melodies that carry across the field. By the end of the season, you'll master holding your instrument with pride, develop your embouchure, and feel the thrill of hitting that high note perfectly at the end of the closer. As your Brass Captain, Charlie Needham, I am already excited to meet you!",
  woodwind: "The Woodwind section welcomes you! Your nimble fingers will dance across the keys, creating beautiful melodies that add depth to our sound. You'll learn incredible techniques, make lifelong friends, and experience the joy of mastering complex musical passages. Ready to start this amazing journey?",
  percussion: "Boom! Welcome to the heartbeat of the band—the Percussion section! Whether you're on drums, cymbals, or mallets, you'll keep everyone in time and add excitement to every performance. Get ready for some serious fun and the satisfaction of mastering complex rhythms!",
  guard: "Welcome to the Color Guard! You'll combine dance and artistry to bring our music to life visually. Learn to spin flags, toss rifles, and create stunning visual effects. Your grace and precision will help tell our story on the field. Ready to shine?"
};

document.querySelectorAll('.instrument-card').forEach(card => {
  card.addEventListener('click', () => {
    const section = card.dataset.section;
    document.querySelector('.section-select').classList.add('hidden');
    const experience = document.getElementById('experience');
    experience.classList.remove('hidden');
    document.getElementById('story').textContent = stories[section];
    document.getElementById('sectionVideo').src = videos[section];
  });
});

document.getElementById('resetBtn').addEventListener('click', () => {
  document.querySelector('.section-select').classList.remove('hidden');
  document.getElementById('experience').classList.add('hidden');
});
