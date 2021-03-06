import React, { useState } from "react";
import styles from "../styles/components/CommonSearchBox.module.scss";
import SearchIcon from "../assets/search-btn.svg";
const CommonSearchBox = () => {
  //   const history = useHistory();
  const [name, setName] = useState("");
  const [keywordData, setKeywordData] = useState([]);
  //   const enterEvent = async () => {
  //     try {
  //       history.push({
  //         pathname: `/summoner/name=${name}`,
  //       });
  //       window.location.reload(true);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   const handleKeyPress = (e) => {
  //     if (e.keyCode === 13) {
  //       enterEvent();
  //     }
  //   };
  //   useEffect(() => {
  //     deathnoteService.getDeathnoteByKeyword(name).then((data) => {
  //       setKeywordData(data.summonerKeywordDtoList);
  //     });
  //   }, [name]);

  return (
    <div className={styles.search__wrap}>
      <div className={styles.search__nation}>GG</div>
      <div className={styles.search}>
        <input
          className={styles.search__box}
          placeholder="이름을 입력하세요."
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            // handleKeyPress(e);
          }}
        />
        <SearchIcon
          className={styles.search__button}
          onClick={() => {
            // enterEvent();
          }}
          width="20"
          height="20"
        />
      </div>
      {/* <div className="DeathnoteSearchKeywordWrap">
        {!isEmpty(keywordData) &&
          keywordData.map((data, key) => {
            let profileSrc = `https://ddragon.leagueoflegends.com/cdn/11.12.1/img/profileicon/${data.summonerIcon}.png`;
            let tierColor = getTierColor(data.summonerTier);
            return (
              <div
                className="DeathnoteSearchKeyword"
                key={key}
                onClick={() => {
                  history.push({
                    pathname: `/summoner/name=${data.summonerName}`,
                  });
                  window.location.reload(true);
                }}
              >
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          className="DeathnoteSearchKeywordImg"
                          src={profileSrc}
                          alt={data.summonerIcon}
                        />
                      </td>
                      <td className="DeathnoteSearchKeywordContent">
                        <div className="DeathnoteSearchKeywordName">
                          {data.summonerName}
                        </div>
                        <div
                          className="DeathnoteSearchKeywordSummonerInfo"
                          style={{
                            color: tierColor,
                          }}
                        >
                          {data.summonerTier} {data.summonerRank}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
      </div> */}
    </div>
  );
};

export default CommonSearchBox;
