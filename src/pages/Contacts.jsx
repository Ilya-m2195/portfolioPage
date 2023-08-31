export const Contacts = props => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Saint Petersburg, Russia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p><a href="tel:+79051234567">+7 (908) 118-89-83</a></p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p><a target='_blank' rel="noreferrer" href="mailto:ilya.m.9595@mail.ru">ilya.m.9595@mail.ru</a></p>
          </li>
        </ul>
      </div>
    </main>
  );
}

