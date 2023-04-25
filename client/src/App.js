import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
        </div>
        <div className="texts">
          <h2>ADSADLASDKASLDKASKD</h2>
          <p className="info">
            <span className="author"></span>
            <time>2023-01-06 15:58</time>
          </p>
          <p className="summary">Lsdasdasdklaslñdkasdlñaksdlñaskdlñaskdlñaskdlñskadlñskadlñkasd</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src="https://s1.1zoom.me/prev/341/340888.jpg" alt="" />
        </div>
        <div className="texts">
          <h2>ADSADLASDKASLDKASKD</h2>
          <p>Lsdasdasdklaslñdkasdlñaksdlñaskdlñaskdlñaskdlñskadlñskadlñkasd</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src="https://s1.1zoom.me/prev/341/340888.jpg" alt="" />
        </div>
        <div className="texts">
          <h2>ADSADLASDKASLDKASKD</h2>
          <p>Lsdasdasdklaslñdkasdlñaksdlñaskdlñaskdlñaskdlñskadlñskadlñkasd</p>
        </div>
      </div>
    </main>
  );
}

export default App;
