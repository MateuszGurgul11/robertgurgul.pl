import {
  Bird,
  Egg,
  SearchCheck,
  Settings2,
  Sprout,
  Stethoscope,
  Wind,
  Wrench,
} from "lucide-react";

interface ServiceIconProps {
  title: string;
  className?: string;
}

/** Best-effort icon for a service title — keyword match with a neutral fallback. */
export function ServiceIcon({ title, className }: ServiceIconProps) {
  if (/mikroklimat/i.test(title)) {
    return <Wind className={className} strokeWidth={1.6} />;
  }
  if (/nios/i.test(title)) {
    return <Egg className={className} strokeWidth={1.6} />;
  }
  if (/kogut/i.test(title)) {
    return <Bird className={className} strokeWidth={1.6} />;
  }
  if (/jako[sś][cć]/i.test(title)) {
    return <SearchCheck className={className} strokeWidth={1.6} />;
  }
  if (/wyposażeni/i.test(title)) {
    return <Wrench className={className} strokeWidth={1.6} />;
  }
  if (/urządze/i.test(title)) {
    return <Settings2 className={className} strokeWidth={1.6} />;
  }
  if (/zootechni/i.test(title)) {
    return <Stethoscope className={className} strokeWidth={1.6} />;
  }
  return <Sprout className={className} strokeWidth={1.6} />;
}
