"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={<p className="subheading">Care este misiunea noastra?</p>}
        className="h-[40rem] "
      >
        Cu peste 5 ani de experiență în domeniul IT, am creat această platformă
        pentru a oferi sprijin atât celor care își doresc să înceapă o carieră
        în tehnologie, cât și celor care au nevoie de un mentor pentru a le
        ghida pașii. Aici, vei găsi resurse și suport dedicat pentru a te ajuta
        să îți atingi obiectivele profesionale.
      </MaskContainer>
    </div>
  );
}
