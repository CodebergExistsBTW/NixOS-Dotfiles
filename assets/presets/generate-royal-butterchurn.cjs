// Generate Feishin's Butterchurn module from the canonical MilkDrop preset.
// Run with milkdrop-preset-converter available in NODE_PATH.
const fs = require('node:fs');
const path = require('node:path');
const converter = require('milkdrop-preset-converter');

const sourcePath = path.join(
  __dirname,
  './royal-mashup-remix.milk',
);
const outputPath = path.join(
  __dirname,
  './royal-mashup-remix.butterchurn.ts',
);

// The old HLSL-to-GLSL converter does not reliably translate this preset's
// pixel shaders. Keep their Butterchurn GLSL equivalents explicit and testable.
const warp = `shader_body {
  vec2 d = texsize.zw;
  vec3 deltax = (texture(sampler_main, uv + vec2(d.x, 0.0)).xyz
               + texture(sampler_main, uv - vec2(d.x, 0.0)).xyz) * 0.5;
  vec3 deltay = (texture(sampler_main, uv + vec2(0.0, d.y)).xyz
               + texture(sampler_main, uv - vec2(0.0, d.y)).xyz) * 0.5;
  ret = deltax + deltay
      - texture(sampler_main, (uv - vec2(0.5)) * 0.9 + vec2(0.5)).xyz;
  ret -= 0.4;
}`;

const comp = `shader_body {
  vec2 uv_echo = vec2(1.0) - uv;
  vec2 ca_offset = (uv - vec2(0.5)) * (0.03 * q4);
  vec3 col_r = (texture(sampler_main, uv + ca_offset).xyz
              + texture(sampler_main, uv_echo - ca_offset).xyz) * 0.5;
  vec3 col_g = (texture(sampler_main, uv).xyz
              + texture(sampler_main, uv_echo).xyz) * 0.5;
  vec3 col_b = (texture(sampler_main, uv - ca_offset).xyz
              + texture(sampler_main, uv_echo + ca_offset).xyz) * 0.5;
  ret = vec3(col_r.r, col_g.g, col_b.b);
  ret *= 2.0;
  ret += texture(sampler_blur3, uv).xyz * 2.0;
  ret += texture(sampler_blur3, uv_echo).xyz * 2.0;
}`;

(async () => {
  const source = fs.readFileSync(sourcePath, 'utf8');
  const preset = await converter.convertPreset(source);
  preset.warp = warp;
  preset.comp = comp;
  const generated = [
    '// Generated from the .milk source with milkdrop-preset-converter.',
    '// Regenerate with generate-royal-butterchurn.cjs; do not hand-edit.',
    `const preset: Record<string, any> = ${JSON.stringify(preset, null, 2)};`,
    '',
    'export default preset;',
    '',
  ].join('\n');
  fs.writeFileSync(outputPath, generated);
  console.log(`Wrote ${outputPath}`);
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
