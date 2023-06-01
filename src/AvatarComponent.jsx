const AvatarComponent = ({ name, image }) => (
    <div>
        <h1>
            {name}
        </h1>
        <img src={image} alt={name} />
    </div>
);

export default AvatarComponent;
