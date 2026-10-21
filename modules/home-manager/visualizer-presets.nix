{ lib, osConfig ? null, ... }:
let
  mediaEnabled =
    if osConfig == null then
      true
    else
      osConfig.custom.desktop.media.enable or false;
in
{
  # Keep the custom MilkDrop preset in the user's data directory rather than
  # modifying the package store. projectM can scan this as a user preset pack.
  xdg.dataFile = lib.mkIf mediaEnabled {
    "projectM/presets/Custom/royal-mashup-remix.milk".source =
      ../../assets/presets/royal-mashup-remix.milk;
  };
}
