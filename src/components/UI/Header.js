import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__controls">
        Building a learning/demo web app
        for tracking bike miles... Made with React and deployed on Netlify. The
        template/foundation of this app was the 'expense tracker' example app
        built in this on-line course:
      </div>
      <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
        <div>
          https://www.udemy.com/course/react-the-complete-guide-incl-redux/
        </div>
      </a>
      <p>Project code here:
      <a href="https://github.com/jimmoffitt/bike-miles-app">
        <div>
        https://github.com/jimmoffitt/bike-miles-app
        </div>
      </a>
      </p>
      
    </div>
  );
};

export default Header;
