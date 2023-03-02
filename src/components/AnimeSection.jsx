import React from "react";
import AnimeInfo from "./AnimeInfo";

const AnimeSection = () => {
    return (
        <div className="">
            <h2 className="year">2023</h2>
            <div className="row">
                <AnimeInfo name="Naruto" dateAired="Oct 2002" genre="action" redirect="https://en.wikipedia.org/wiki/Naruto" link="https://epguides.com/naruto/cast.jpg"></AnimeInfo>
                <AnimeInfo name="Noragami" dateAired="Jan 2014" genre="comedy" redirect="https://en.wikipedia.org/wiki/Noragami" link="https://www.animenewsnetwork.com/thumbnails/crop1200x630g11/cms/feature/96112/noragamifestival.jpg"></AnimeInfo>
                <AnimeInfo name="Astra Lost in Space" dateAired="July 2019" genre="sci-fi" redirect="https://en.wikipedia.org/wiki/Astra_Lost_in_Space" link="https://img.hulu.com/user/v3/artwork/cb3d85ba-ab65-476e-9ab1-df7a676f6c94?base_image_bucket_name=image_manager&base_image=26d363e0-b675-4256-b47e-5ec7131bb763&region=US&format=jpeg&size=952x536"></AnimeInfo>
                <AnimeInfo name="Jujutsu Kaisen" dateAired="Oct 2020" genre="dark fantasy" redirect="https://en.wikipedia.org/wiki/Jujutsu_Kaisen" link="https://www.animationmagazine.net/wordpress/wp-content/uploads/Jujutsu-Kaisen-5.jpg"></AnimeInfo>
            </div>

            <h2 className="year">2022</h2>
            <div className="row">
                <AnimeInfo name="Akame ga Kill!" dateAired="Aug 2014" genre="dark fantasy" redirect="https://en.wikipedia.org/wiki/Akame_ga_Kill!" link="https://m.media-amazon.com/images/I/81YF-SPK2JL._RI_.jpg"></AnimeInfo>
                <AnimeInfo name="A Silent Voice" dateAired="Oct 2016" genre="drama" redirect="https://en.wikipedia.org/wiki/A_Silent_Voice_(film)" link="https://i0.wp.com/i.imgur.com/qnC92PY.jpg"></AnimeInfo>
                <AnimeInfo name="Tomodachi Game" dateAired="Apr 2017" genre="psychological thriller" redirect="https://en.wikipedia.org/wiki/Tomodachi_Game" link="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/tomodachi-game-rooftop.jpg"></AnimeInfo>
                <AnimeInfo name="Attack on Titan" dateAired="Apr 2013" genre="dark fantasy" redirect="https://en.wikipedia.org/wiki/Attack_on_Titan" link="https://www.cheatsheet.com/wp-content/uploads/2021/12/Levi-Ackerman-Attack-on-Titan.jpeg"></AnimeInfo>
            </div>

            <h2 className="year">2021</h2>
            <div className="row">
                <AnimeInfo name="Erased" dateAired="Jan 2016" genre="psychological thriller" redirect="https://en.wikipedia.org/wiki/Erased_(manga)" link="https://occ-0-55-33.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc0T_zrLMQkp9htLfJo3Y0B6P6LwPvugjY96G_Gyevtr8XN8og7RS682loXOuP95COgCUI1a8Fe5D2L9vGfwD2R9KkIJtAX8jyDo.jpg?r=677"></AnimeInfo>
                <AnimeInfo name="Fairy Tail" dateAired="Oct 2009" genre="fantasy" redirect="https://en.wikipedia.org/wiki/Fairy_Tail" link="https://static.kino.de/wp-content/uploads/2018/07/Fairy-Tail-rcm1024x512u.jpg"></AnimeInfo>
                <AnimeInfo name="Death Note" dateAired="Oct 2006" genre="psychological thriller" redirect="https://en.wikipedia.org/wiki/Death_Note" link="https://i.ytimg.com/vi/ttVoVr2F75k/maxresdefault.jpg"></AnimeInfo>
                <AnimeInfo name="Code Geass" dateAired="Oct 2006" genre="mecha" redirect="https://en.wikipedia.org/wiki/Code_Geass" link="https://www.supanova.com.au/wp-content/uploads/2017/12/Code-Geass.jpg"></AnimeInfo>
            </div>



        </div>

    )
}

export default AnimeSection;