import { NotificationType } from "../../interfaces";


const NotificationView = ({ type, notifier }: { type: string; notifier: any }) => {
  switch (type) {
    case "empty":
      return <p>No new notification</p>;
    case "consult":
      return <p>{`${notifier?.userName || "A user"} viewed your profile`}</p>;
    case "like":
      return <p>{`${notifier?.userName} liked you`}</p>;
    case "unlike":
      return <p>{`${notifier?.userName} unliked you`}</p>;
    case "match":
      return <p>{`${notifier?.userName} liked you back`}</p>;
    case "message":
      return <p>{`${notifier?.userName} sent you a message`}</p>;
    case "noNew":
      return <p>No new notifications</p>;
    default:
      return <p>Empty notification</p>;
  }
};

const Notification = (props: any): JSX.Element => {
  return (
    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      {/* <NotificationView {...props} /> */}
      <NotificationView type={props.type} notifier={props.notifier} />
    </div>
  );
};

export default Notification;

/*
The user received a “like”.
///• The user’s profile has been checked.
• The user received a message.
• A “liked” user “liked” back.
• A connected user “unliked” you.
*/