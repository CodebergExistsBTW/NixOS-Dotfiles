final: prev:
{
  # Add the hand-tuned MilkDrop remix to Feishin's bundled Butterchurn list.
  # This intentionally patches the version pinned by nixpkgs; refresh the patch
  # context when updating the nixpkgs input if Feishin moves this loader.
  feishin = prev.feishin.overrideAttrs (old: {
    postPatch = (old.postPatch or "") + ''
      cp ${../../assets/presets/royal-mashup-remix.butterchurn.ts} \
        src/renderer/features/visualizer/components/butternchurn/royal-mashup-remix.ts
      patch -p1 < ${./feishin-royal-mashup.patch}
    '';
  });
}
