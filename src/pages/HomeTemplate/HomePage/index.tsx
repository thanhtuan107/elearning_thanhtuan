// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchListMovies } from '../../../store/slices/list-movies';
// import { AppDispatch, RootState } from '../../../store';
// import { Button, Carousel, TextInput } from 'flowbite-react';
import Course from './courses/Course';
import Banner from './banner_slide';
const HomePage = () => {
  // const dispatch: AppDispatch = useDispatch();
  // const { data, isLoading, error } = useSelector((state: RootState) => state.listMovies);

  // React.useEffect(() => {
  //   // dispatch action
  //   dispatch(fetchListMovies());
  // }, []);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error</div>;
  // if (data?.length === 0) return <div>No data</div>;

  return (
    <div>
        <Banner />
        <Course />
    </div>
  );
};

export default HomePage;
