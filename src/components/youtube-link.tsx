import { Youtube } from "lucide-react";

const WEB_URL = "https://www.youtube.com/@svarashakti";

/**
 * Footer link to the Svarashakti YouTube channel.
 * Opens the channel in a new tab so visitors keep the site open.
 */
export function YoutubeLink({ className }: { className?: string }) {
  return (
    <a
      href={WEB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Open Svarashakti on YouTube"
    >
      <Youtube aria-hidden="true" />
      <span>YouTube @svarashakti</span>
    </a>
  );
}
