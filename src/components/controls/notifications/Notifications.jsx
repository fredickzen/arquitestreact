import { notification } from "antd";

export const openNotification = (
  type,
  message,
  description,
  onClick
) => {
  const config = {
    message,
    description,
    onClick,
  };
  switch (type) {
    case "open":
    case "o":
      notification.open(config);
      break;
    case "success":
    case "s":
      notification.success(config);
      break;
    case "error":
    case "e":
      notification.error(config);
      break;
    case "info":
    case "i":
      notification.info(config);
      break;
    case "warning":
    case "w":
      notification.warning(config);
      break;
    case "warn":
      notification.warn(config);
      break;
    default:
      notification.open(config);
      break;
  }
};
