import React from "react";


function ProfileCard({ image, title, description, twitterHandle }) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img
                        src={image}
                        alt="new image"
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{twitterHandle}</p>
                    </div>
                </div>

                <div className="content">
                    {description}
                    <br />
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;