const Login = document.querySelector('.login');

Login.addEventListener('click', (event)=>{
  event.preventDefault()
  Login.classList.toggle ('active2');
});

/*
const More1 = document.querySelector('.more1');

More1.addEventListener('click', () => {
  const Containers = document.querySelectorAll(
    '.container1-c, .container1-d, .container2-c, .container2-d'
  );

  Containers.forEach(item => {
    item.style.display = "block";
  });
});
*/

const More1 = document.querySelector('.more1');

More1.addEventListener('click', () => {
  const Containers = document.querySelectorAll(
    '.container1-c, .container1-d, .container2-c, .container2-d'
  );

  const target = document.querySelector('.container2-a');

  let isShowing = false;

  Containers.forEach(item => {
    if (item.style.display === "none" || item.style.display === "") {
      isShowing = true; 
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

 
  More1.textContent = isShowing ? "Show less" : "Show more";

  
  if (!isShowing) {
    setTimeout(() => {
      target.scrollIntoView/*({ behavior: "smooth", block: "start" });*/ ();
    }, 10); 
  }
});


/*
const More2 = document.querySelector('.more2');
const why2 = document.querySelector('.why2');

More2.addEventListener('click', () => {
  why2.scrollTo({
    top: why2.scrollHeight,
    behavior: "smooth"
  });
});
*/



/*
const More2 = document.querySelector('.more2');
const why2Container = document.querySelector('.why2');

const cards = document.querySelectorAll('.why2-a, .why2-b, .why2-c, .why2-d, .why2-e, .why2-f, .why2-g');

let currentIndex = 0;

More2.addEventListener('click', () => {
  currentIndex++;
  
  // If we've gone past the last card, scroll back to top
  if (currentIndex >= cards.length) {
    why2Container.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    currentIndex = 0;
    More2.textContent = "Show more";
  } else {
    // Scroll to the next card
    const nextCard = cards[currentIndex];
    
    // Calculate position relative to the container
    const cardTop = nextCard.offsetTop - why2Container.offsetTop;
    
    // Scroll within the why2 container only
    why2Container.scrollTo({
      top: cardTop,
      behavior: 'smooth'
    });
    
    // Update button text when reaching the last card
    if (currentIndex === cards.length - 1) {
      More2.textContent = "Back to top";
    }
  }
});
*/


const More2 = document.querySelector('.more2');
const why2Container = document.querySelector('.why2');

const cards = document.querySelectorAll('.why2-a, .why2-b, .why2-c, .why2-d, .why2-e, .why2-f, .why2-g');

let currentIndex = 0;

More2.addEventListener('click', () => {
  currentIndex++;
  
  if (currentIndex >= 5) {
    why2Container.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    currentIndex = 0;
    More2.textContent = "Show more";
  } else {
   
    const nextCard = cards[currentIndex];
     const cardTop = nextCard.offsetTop - why2Container.offsetTop;
    
  
    why2Container.scrollTo({
      top: cardTop,
      behavior: 'smooth'
    });
    
   
    if (currentIndex === 4) {
      More2.textContent = "Back to top";
    }
  }
});




const questions = document.querySelectorAll('.question1');

questions.forEach((question) => {
  const icon = question.querySelector('i'); 
  const answer = question.querySelector('div[class^="answer"]');

  icon.addEventListener('click', () => {
    
  icon.classList.toggle('icons-active');

    
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});
