import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Style import
import { Container } from "./styles";

// Component import
import DetailsHeader from "../../components/DetailsHeader";
import CharacterInfo from "../../components/CharacterInfo";
import CharacterComics from "../../components/CharacterComics";

// Controller import
import { getCharacter } from "../../controllers/Characters";
import {
  getCharacterComics,
  getLastModifiedDate,
} from "../../controllers/Comics";
import Loader from "../../components/Loader";

function CharacterDetails() {
  const location = useLocation().pathname;

  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState({});
  const [characterComics, setCharacterComics] = useState([]);
  const [lastIssueDate, setLastIssueDate] = useState("");

  const itemId = location.split("/")?.[2];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const getCharacterInfo = async () => {
      setLoading(true);

      try {
        await getCharacter(itemId).then((data) => setCharacter(data));

        await getCharacterComics(itemId).then((data) =>
          setCharacterComics(data)
        );

        await getLastModifiedDate(itemId).then((data) => {
          const extractedDate = data?.split("T")?.[0];

          if (extractedDate) {
            const splitExtractedDate = extractedDate?.split("-");
            const year = splitExtractedDate?.[0];
            const day = splitExtractedDate?.[2];
            const formatter = new Intl.DateTimeFormat("pt", { month: "short" });
            const month = formatter.format(new Date(extractedDate));
            setLastIssueDate(`${day} ${month} ${year}`);
            return;
          }
        });
      } finally {
        setLoading(false);
      }
    };

    getCharacterInfo();
  }, [itemId]);

  return (
    <Container>
      <div className="backgroundName">{character?.name?.toUpperCase()}</div>
      <div className="mainContentContainer">
        <DetailsHeader />
        {loading ? (
          <Loader />
        ) : (
          <>
            <CharacterInfo
              character={character}
              lastIssueDate={lastIssueDate}
            />
            <CharacterComics comics={characterComics} />
          </>
        )}
      </div>
    </Container>
  );
}

export default CharacterDetails;
