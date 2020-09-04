import React from 'react';
import ReactDOM from 'react-dom';
import Forma from './components/Forma';
import Card from './components/Card'

const App = () => {
  let string = 'Click to submit'
  let image = {
    url : 'https://i.imgur.com/Cxjo5bT.png',
    description : 'The happy smiling face is one of the most common emojis and universally applicable: you just want to say hello, express joy or excitement about something or brighten up a short text.'
  }
  return (
    <>
    <Forma txt={string} />
    <Card img={image.url} dsc={image.description} />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

