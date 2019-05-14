import React, { Fragment } from 'react';
import '../styles/Namespaces.css';

function Namespaces({ namespaces, currentNs, handleNs, handleRoom }) {

  const listNs = namespaces.map(ns =>
    <div className="namespace center-block text-center mt-3" ns={ns.endPoint} onClick={handleNs}><img className="icon" alt={`${ns.nsTitle} Icon`} src={ns.img} id={ns.id} /></div>);

  const listRooms = (
    <ul className="room-list">
      {namespaces[currentNs].rooms.map(room =>
        <li key={room.id} id={room.id} onClick={handleRoom}><i className="fab fa-slack-hash mr-2"></i>{room.roomTitle}</li>
      )}
    </ul>
  );


  return (
    <Fragment>
      <div className="col-1 namespaces">
        {listNs}
      </div>
      <div className="col-2 rooms">
        <h6 className="text-center mt-3 text-muted">Channels</h6>
        {listRooms}
      </div>
    </Fragment>
  );
}

export default Namespaces;