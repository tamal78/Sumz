import { useNavigate } from 'react-router-dom';
import { logo } from '../assets';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <div className='cursor-pointer'>
          <img
            src={logo}
            alt='sumz_logo'
            className='w-28 object-contain'
            onClick={() => {
              navigate('/');
              window.location.reload();
            }}
          />
        </div>

        <button
          type='button'
          onClick={() =>
            window.open('https://github.com/tamal78/Sumz', '_blank')
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
