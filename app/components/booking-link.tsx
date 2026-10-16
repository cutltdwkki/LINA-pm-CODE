"use client";

import type { MouseEvent, ReactNode } from "react";
import { bookingEventName, bookingStorageKey, type BookingSelection } from "../site";

type BookingLinkProps = {
  service: string;
  photo?: boolean;
  className?: string;
  children: ReactNode;
};

export function BookingLink({ service, photo = false, className, children }: BookingLinkProps) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const detail: BookingSelection = { service, photo };
    try {
      sessionStorage.setItem(bookingStorageKey, JSON.stringify(detail));
    } catch {
      /* storage can be unavailable in private mode */
    }

    const url = new URL(window.location.href);
    url.searchParams.set("service", service);
    if (photo) url.searchParams.set("photo", "1");
    else url.searchParams.delete("photo");
    url.hash = "contact-form";
    window.history.replaceState(null, "", url);
    window.dispatchEvent(new CustomEvent(bookingEventName, { detail }));

    const target = document.querySelector(event.currentTarget.hash);
    if (target) {
      event.preventDefault();
      target.scrollIntoView();
    }
  };

  return (
    <a className={className} href="#contact-form" onClick={onClick}>
      {children}
    </a>
  );
}
