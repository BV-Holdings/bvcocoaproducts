// TODO: replace with Stitch design — "What Are Cocoa Shells" explainer section
export interface WhatAreCocoaShellsProps {
  heading?: string;
  body?: string;
}

export function WhatAreCocoaShells({ heading, body }: WhatAreCocoaShellsProps) {
  return (
    <div className="border border-dashed border-terracotta bg-softSand p-12">
      <p className="font-mono text-xs uppercase tracking-wide text-terracotta">WhatAreCocoaShells placeholder</p>
      {heading && <h2 className="mt-2 font-serif text-xl text-cocoaBrown">{heading}</h2>}
      {body && <p className="mt-2 text-charcoal">{body}</p>}
    </div>
  );
}
