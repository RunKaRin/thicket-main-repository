import {
    Wrapper,
    InvisibleScroll,
    MainContainer,
    H1,
    DivList1, Poster1, Img1, ImgInfo1,
} from "../../assets/css/setting/MainStyleCSS";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const ShowList = () => {
    const [shows, setShows] = useState([]);
    const navigate = useNavigate();
    const { query } = useParams();

    useEffect(() => {
        if (query) {
            fetch(`/shows/search/${query}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Not Found");
                    }
                    return response.json();
                })
                .then(data => {
                    setShows(data);
                })
                .catch(error => {
                    // Handle 404 error here
                    setShows([]);
                });
        }
    }, [query]);

    const formatDateString = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <DivList1>
            {shows.length > 0 ? (
                shows.map(show => (
                    <Poster1 key={show.id} onClick={() => navigate(`/detail/${show.id}`)}>
                        <Img1 src={show.posterImg} alt="Poster" />
                        <ImgInfo1>
                            <div>{show.name}</div>
                            <div>{show.place}</div>
                            <div>{`${formatDateString(show.stageOpen)} ~ ${formatDateString(show.stageClose)}`}</div>
                        </ImgInfo1>
                    </Poster1>
                ))
            ) : (
                <H1>없습니다.　　　　　　　아니 그냥 없어요.</H1>
            )}
        </DivList1>
    );
};

function MainSearchList() {

    return (
        <Wrapper>
            <InvisibleScroll>
                <MainContainer>
                    <H1>검색 결과</H1>
                    <ShowList />
                </MainContainer>
            </InvisibleScroll>
        </Wrapper>
    );
};

export default MainSearchList;