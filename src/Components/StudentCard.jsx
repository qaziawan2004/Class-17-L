const StudentCard = ({ id, name, rollNo, batch, favLanguage }) => {
  return (
    <div>
      <p><b>S.No : </b>{id}</p>
      <h3><b>Name : </b>{name}</h3>
      <p><b>Roll No:</b> {rollNo}</p>
      <p><b>Batch:</b> {batch}</p>
      <p><b>Favorite Language:</b> {favLanguage}</p>
      <hr />
    </div>
  );
};

export default StudentCard;
