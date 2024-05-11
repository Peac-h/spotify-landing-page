import "./Albums.scss";
import { AlbumType } from "../../../api/spotify";
import { Svg } from "../../elements/icon/Icons";
import { useState } from "react";
import Modal from "../../elements/modal/Modal";
import Tooltip from "../../elements/tooltip/Tooltip";
import { Link } from "react-router-dom";
import { useAlbums } from "../../../api/spotify";
import LoadingScreen from "../../elements/load/LoadingScreen";
import ErrorScreen from "../../elements/error/ErrorScreen";

function Albums({ isDefault }: { isDefault: boolean }) {
  const { albums, isLoading, error } = useAlbums();

  const renderAlbums = (slice: number) => {
    if (albums) {
      return albums
        .slice(slice)
        .map((album, index) => <Album key={index} {...album} />);
    }
  };

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen error={error} />;

  return (
    <section
      className={`album ${isDefault ? "linear-background" : ""}`}
      style={!isDefault ? { paddingTop: "130px" } : {}}
    >
      <div className={`album__header`}>
        <h2 className={`album__heading`}>
          {isDefault ? (
            <Link to="/all" className={`album__link`}>
              Spotify Playlists
            </Link>
          ) : (
            "Spotify Playlists"
          )}
        </h2>
        {isDefault && (
          <Link to={"/all"} className={`album__link album__link--small`}>
            Show all
          </Link>
        )}
      </div>
      <div
        className={`album__list`}
        style={
          isDefault
            ? {
                gridAutoRows: "0",
                paddingBottom: "0",
                rowGap: "0",
              }
            : {}
        }
      >
        {renderAlbums(0)}
      </div>
    </section>
  );
}

function Album({ images, name, artists }: AlbumType) {
  const [showModal, setShowModal] = useState(false);

  const [tooltips, setTooltips] = useState({
    onPlay: false,
  });

  const handleTooltip = (tooltipKey: string, isVisible: boolean) => {
    setTooltips((prevState) => ({
      ...prevState,
      [tooltipKey]: isVisible,
    }));
  };

  return (
    <>
      <div
        className={`album__list-item`}
        onClick={(e) => {
          e.preventDefault();
          setShowModal(true);
        }}
      >
        <div className={`album__item-img-box`}>
          <img
            src={images[0].url}
            alt="album cover"
            className={`album__item-img`}
          />
          <button
            className={`album__item-button`}
            onMouseEnter={() => handleTooltip("onPlay", true)}
            onMouseLeave={() => handleTooltip("onPlay", false)}
          >
            <Svg name="play" height={24} width={24} />
            {tooltips.onPlay && (
              <Tooltip text="Play" active={true} delay={1000} />
            )}
          </button>
        </div>

        <div className={`album__item-details`}>
          <div className={`album__item-name`}>
            {artists.map((artist) => artist.name)}
          </div>
          <div className={`album__item-artist-name`}>{name}</div>
        </div>
      </div>

      {showModal && <Modal setShowModal={setShowModal} img={images[0].url} />}
    </>
  );
}

export default Albums;
