import React from 'react';

function CustomAvatar({ username, avatar, colors }) {
    const colorParams = colors.join(',');
    {/*000000-7890a8-304878-181848-f0a818 

    const avatarURL = `https://source.boringavatars.com/beam/100/${avatar}?colors=${colorParams}`;*/}
    const avatarURL = `https://source.boringavatars.com/beam/100/${avatar}?000000-7890a8-304878-181848-f0a818'`;
    return (
        <div>
            <img src={avatarURL} alt={`Avatar de${username}`} />
        </div>
    );
}



export default  CustomAvatar;
