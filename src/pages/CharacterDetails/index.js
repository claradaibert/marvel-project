import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDebounce } from "use-debounce";

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

function CharacterDetails() {
  const location = useLocation().pathname;

  const [search, setSearch] = useState("");
  const [character, setCharacter] = useState({});
  const [characterComics, setCharacterComics] = useState([]);
  const [lastIssueDate, setLastIssueDate] = useState("");

  const [searchValue] = useDebounce(search, 1000);
  const itemId = location.split("/")?.[2];

  useEffect(() => {
    const getCharacterInfo = async () => {
      await getCharacter(itemId).then((data) => setCharacter(data));

      await getCharacterComics(itemId).then((data) => setCharacterComics(data));

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
    };

    getCharacterInfo();
  }, [itemId]);

  return (
    <Container>
      <div className="backgroundName">{character?.name?.toUpperCase()}</div>
      <div className="mainContentContainer">
        <DetailsHeader search={search} setSearch={setSearch} />
        <CharacterInfo character={character} lastIssueDate={lastIssueDate} />
        <CharacterComics comics={characterComics} />
      </div>
    </Container>
  );
}

export default CharacterDetails;
