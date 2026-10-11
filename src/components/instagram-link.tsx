import { Instagram } from "lucide-react";
import type { MouseEvent } from "react";

const HANDLE = "svarashakti";
const WEB_URL = `https://www.instagram.com/${HANDLE}/`;
const APP_URL = `instagram://user?username=${HANDLE}`;

/**
 * Footer link to the Svarashakti Instagram profile.
 * On phones it first asks the Instagram app to open the profile and only
 * falls back to the browser when the app is not installed.
 */
export function InstagramLink({ className }: { className?: string }) {
  function openInstagram(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const isPhone = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

    if (!isPhone) {
      window.open(WEB_URL, "_blank", "noopener,noreferrer");
      return;
    }

    let leftPage = false;
    const onHide = () => {
      if (document.hidden) leftPage = true;
    };
    document.addEventListener("visibilitychange", onHide);
    window.location.href = APP_URL;

    window.setTimeout(() => {
      document.removeEventListener("visibilitychange", onHide);
      if (!leftPage && !document.hidden) window.location.href = WEB_URL;
    }, 800);
  }

  return (
    <a
      href={WEB_URL}
      onClick={openInstagram}
      className={className}
      aria-label={`Open ${HANDLE} on Instagram`}
    >
      <Instagram aria-hidden="true" />
      <span>@{HANDLE}</span>
    </a>
  );
}
