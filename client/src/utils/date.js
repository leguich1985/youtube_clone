import { formatDistanceToNowStrict } from "date-fns";

export function formatCreatedAt(timestamp) {
  return formatDistanceToNowStrict(new Date(timestamp), {
    addSuffix: true,
  });
}
