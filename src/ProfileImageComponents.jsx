export const ProfileImageFromSource = ({ imagePath }) => <img src={imagePath} />

export const ProfileImageFromImageTag = ({ html }) => (
    <div dangerouslySetInnerHTML={{__html: html }}></div>
)
