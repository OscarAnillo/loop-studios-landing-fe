import CreationCommonComponent from "./creation-common-component";

export default function MainComponent(){
    return (
        <main className="main">
            <div>
                <h1 className="main-h1">Our creations</h1>
            </div>
            <CreationCommonComponent className="deep-earth" text="Deep earth" />
            <CreationCommonComponent className="night-arcade" text="Night Arcade" />
            <CreationCommonComponent className="soccer-team-vr" text="soccer team vr" />
            <CreationCommonComponent className="the-grid" text="The Grid" />
            <CreationCommonComponent className="from-up-above" text="from up above vr" />
            <CreationCommonComponent className="pocket-borealis" text="pocket borealis" />
            <CreationCommonComponent className="the-curiosity" text="the curiosity" />
            <CreationCommonComponent className="make-fish" text="Make it fisheye" />
            <div>
                <button className="bt-see">See all</button>
            </div>
        </main>
    )
}