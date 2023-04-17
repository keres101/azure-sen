import { ApiResult } from './types';

function Presentation({ user }: { user: ApiResult }) {
  const wl = 34;
  return (
    <div className="result-container">
      <div className="result">
        <div className="sec">
          <p className="sec_title">NOMBRE</p>
          <p className="sec_content">
            <span>{user.nombres}</span>
          </p>
        </div>
        <div className="sec">
          <p className="sec_title">PATERNO</p>
          <p
            className="sec_content"
            style={{ width: wl * user.apellido_paterno.length }}
          >
            <span>{user.apellido_paterno}</span>
          </p>
        </div>
        <div className="sec">
          <p className="sec_title">MATERNO</p>
          <p
            className="sec_content"
            style={{ width: wl * user.apellido_materno.length }}
          >
            <span>{user.apellido_materno}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Presentation;
