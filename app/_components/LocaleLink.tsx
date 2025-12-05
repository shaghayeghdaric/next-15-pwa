"use client";

import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";

type LocaleLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const LocaleLink: React.FC<LocaleLinkProps> = ({ href, children, className, style }) => {
  return (
    <Link href={href} className={className} style={style}>
      {children}
    </Link>
  );
};

export default LocaleLink;
