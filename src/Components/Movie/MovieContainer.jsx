import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { connect } from "react-redux";
import { reset, setData } from "../../Redux/Action/Index";
import MovieView from "./MovieView";

const MovieContainer = ({ setData }) => {
  const [character, setCharacter] = useState("");
  const FetchPosts = async (character) => {
    let url = "https://swapi.dev/api/films/?format=json";
    if (character !== "") {
      url = `https://swapi.dev/api/films/?search=${character}&format=json`;
    }
    return await axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {          
          const { results } = res.data;
          const filteredData = results.map((item) => {
            return { title: item.title, date: item.release_date };
          });
          setData(filteredData);
          return filteredData;
        }
        return [];
      })
      .catch((error) => {
        return [];
      });
  };
  const { isLoading, data } = useQuery(["movies", character], () =>
    FetchPosts(character)
  );

  return (
    <MovieView data={data} setCharacter={setCharacter} isLoading={isLoading} />
  );
};
const mapStateToProps = (state) => {
  return {
    movieItems: state.movieItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setData: (filteredData) => dispatch(setData(filteredData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
