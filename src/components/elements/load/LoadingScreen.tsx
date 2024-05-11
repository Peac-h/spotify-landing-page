import "./LoadingScreen.scss";

function LoadingScreen() {
  return (
    <div className="loading-frame">
      <div className="loading-frame__top">
        <div className="loading-frame__top-item"></div>
      </div>
      <div className="loading-frame__content">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="loading-frame__content-item">
            <div className="placeholder-img"></div>
            <div className="placeholder-text"></div>
          </div>
        ))}
      </div>
      <div className="loading-frame__playlist">
        <div className="loading-frame__playlist-header"></div>
        <div className="loading-frame__albums">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="loading-frame__album">
              <div className="loading-frame__album-item">
                <div className="placeholder-img"></div>
                <div className="placeholder-text placeholder-text--upper"></div>
                <div className="placeholder-text placeholder-text--below"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
