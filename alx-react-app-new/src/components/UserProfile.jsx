// src/components/UserProfile.jsx

const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '5px' }}>{props.name}</h2>
      <p style={{ fontSize: '18px', margin: '5px 0' }}>
        Age: <span style={{ fontWeight: 'bold', color: 'darkslategray' }}>{props.age}</span>
      </p>
      <p style={{ fontSize: '16px', color: 'dimgray' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;