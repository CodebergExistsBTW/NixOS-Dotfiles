// Generated from the .milk source with milkdrop-preset-converter.
// Regenerate with generate-royal-butterchurn.cjs; do not hand-edit.
const preset: Record<string, any> = {
  "shapes": [
    {
      "baseVals": {
        "enabled": 0
      }
    },
    {
      "baseVals": {
        "enabled": 1,
        "textured": 1,
        "x": 0.25,
        "y": 0.75,
        "rad": 4.44708,
        "tex_zoom": 0.22746,
        "r": 0,
        "a": 0.1,
        "g2": 0,
        "a2": 0.2,
        "border_r": 0,
        "border_g": 0,
        "border_a": 0
      },
      "init_eqs_str": "a['q1'] = 0; a['tex_capture'] = 0; a['q3'] = 0; a['tex_saw']=0.4;",
      "frame_eqs_str": "a['ang']=(a['q1']*0.2); a['tex_capture']=above(a['q3'], 1); a['tex_zoom']=0.6;"
    },
    {
      "baseVals": {
        "enabled": 0
      }
    },
    {
      "baseVals": {
        "enabled": 0
      }
    }
  ],
  "waves": [
    {
      "baseVals": {
        "enabled": 1,
        "thick": 1,
        "smoothing": 0
      },
      "init_eqs_str": "a['q1'] = 0; a['speed'] = 0; a['v'] = 0; a['xs'] = 0; a['ys'] = 0; ",
      "frame_eqs_str": "",
      "point_eqs_str": "a['q1']=0; a['speed']=(a['bass_att']*0.8); a['v']=((a['sample']*1000000)+((a['value2']*a['bass'])*0.1)); a['xs']=(a['xs']+((Math.sin(a['v'])*a['speed'])*Math.atan((a['v']*1.51)))); a['ys']=(a['ys']+((Math.sin(a['v'])*a['speed'])*Math.atan((a['v']*10)))); a['x']=(0.5+((0.5*Math.sin((a['xs']*0.1)))*Math.cos(((a['time']*0.2)+a['xs'])))); a['y']=(0.5+((0.5*Math.sin((a['ys']*0.12)))*Math.cos(((a['time']*0.1)+a['xs'])))); a['x']=((a['x']*0.8)+0.1); a['y']=((a['y']*0.8)+0.1); a['r']=((0.5+(0.5*Math.sin((a['time']*1.22))))+0.1); a['g']=(0.4+(0.4*Math.sin(((a['time']*1.307)+(2*a['y']))))); a['b']=(0.4+(0.4*Math.sin(((a['time']*1.959)+(a['x']*2))))); a['xs']=((Math.abs(above(a['xs'], 1000))>0.00001)?(0):(a['xs'])); a['ys']=((Math.abs(above(a['ys'], 1000))>0.00001)?(0):(a['ys']));"
    },
    {
      "baseVals": {
        "enabled": 1,
        "thick": 1,
        "smoothing": 0
      },
      "init_eqs_str": "a['q1'] = 0; a['speed'] = 0; a['v'] = 0; a['xs'] = 0; a['ys'] = 0; ",
      "frame_eqs_str": "",
      "point_eqs_str": "a['q1']=0; a['speed']=(a['bass_att']*0.8); a['v']=((a['sample']*1000000)+((a['value2']*a['bass'])*0.1)); a['xs']=(a['xs']+((Math.sin(a['v'])*a['speed'])*Math.atan((a['v']*1.51)))); a['ys']=(a['ys']+((Math.sin(a['v'])*a['speed'])*Math.atan((a['v']*10)))); a['x']=(0.5+((0.5*Math.sin((a['xs']*0.1)))*Math.cos(((a['time']*0.2)+a['xs'])))); a['y']=(0.5+((0.5*Math.sin((a['ys']*0.14)))*Math.cos(((a['time']*0.1)+a['xs'])))); a['x']=((a['x']*0.8)+0.1); a['y']=((a['y']*0.8)+0.1); a['x']=((a['x']*0.6)+0.2); a['y']=((a['y']*0.6)+0.2); a['r']=((0.5+(0.5*Math.sin((a['time']*1.322))))+0.1); a['g']=(0.4+(0.4*Math.sin(((a['time']*1.5407)+(2*a['y']))))); a['b']=(0.4+(0.4*Math.sin(((a['time']*1.759)+(a['x']*2))))); a['xs']=((Math.abs(above(a['xs'], 1000))>0.00001)?(0):(a['xs'])); a['ys']=((Math.abs(above(a['ys'], 1000))>0.00001)?(0):(a['ys']));"
    },
    {
      "baseVals": {
        "enabled": 1,
        "thick": 1,
        "smoothing": 0
      },
      "init_eqs_str": "a['q1'] = 0; a['speed'] = 0; a['v'] = 0; a['xs'] = 0; a['ys'] = 0; ",
      "frame_eqs_str": "",
      "point_eqs_str": "a['q1']=0; a['speed']=(a['bass_att']*0.8); a['v']=((a['sample']*1000000)+((a['value2']*a['bass'])*0.1)); a['xs']=(a['xs']+((Math.sin(a['v'])*a['speed'])*Math.atan((a['v']*1.51)))); a['ys']=(a['ys']+((Math.sin(a['v'])*a['speed'])*Math.atan((a['v']*10)))); a['x']=(0.5+((0.5*Math.sin((a['xs']*0.1)))*Math.cos(((a['time']*0.2)+a['xs'])))); a['y']=(0.5+((0.5*Math.sin((a['ys']*0.14)))*Math.cos(((a['time']*0.1)+a['xs'])))); a['x']=((a['x']*0.8)+0.1); a['y']=((a['y']*0.8)+0.1); a['x']=((a['x']*0.25)+0.375); a['y']=((a['y']*0.25)+0.375); a['r']=((0.5+(0.5*Math.sin((a['time']*1.622))))+0.1); a['g']=(0.4+(0.4*Math.sin(((a['time']*1.2407)+(2*a['y']))))); a['b']=(0.4+(0.4*Math.sin(((a['time']*1.359)+(a['x']*2))))); a['xs']=((Math.abs(above(a['xs'], 1000))>0.00001)?(0):(a['xs'])); a['ys']=((Math.abs(above(a['ys'], 1000))>0.00001)?(0):(a['ys']));"
    },
    {
      "baseVals": {
        "enabled": 1,
        "samples": 384,
        "thick": 1,
        "additive": 1,
        "scaling": 0.7,
        "smoothing": 0.2
      },
      "init_eqs_str": "a['q1'] = 0; a['speed'] = 0; a['phase'] = 0; ",
      "frame_eqs_str": "",
      "point_eqs_str": "a['q1']=0; a['speed']=(0.35+(a['bass_att']*0.45)); a['phase']=((a['sample']*6.28318)+(a['time']*0.35)); a['x']=(0.5+((0.12+(a['bass']*0.04))*Math.cos(a['phase']))); a['y']=(0.5+((0.12+(a['bass']*0.04))*Math.sin(a['phase']))); a['x']=(a['x']+(0.06*Math.sin(((a['phase']*3)+(a['time']*0.7))))); a['y']=(a['y']+(0.06*Math.cos(((a['phase']*2)-(a['time']*0.6))))); a['x']=((a['x']*0.8)+0.1); a['y']=((a['y']*0.8)+0.1); a['r']=(0.55+(0.35*Math.sin(((a['time']*0.7)+a['phase'])))); a['g']=(0.45+(0.35*Math.sin((((a['time']*0.9)+a['phase'])+2.1)))); a['b']=(0.55+(0.35*Math.sin((((a['time']*1.1)+a['phase'])+4.2)))); a['a']=(0.25+(0.25*a['speed']));"
    }
  ],
  "init_eqs_str": "a['basstime'] = 0; a['stickybit'] = 0; a['volavg2'] = 0; a['q1'] = 0; a['decay_r'] = 0; a['sample1'] = 0; a['difftime'] = 0; a['diff'] = 0; a['decay_b'] = 0; a['edge'] = 0; a['q4'] = 0; a['volavg'] = 0; a['bit2'] = 0; a['vol'] = 0; a['q2'] = 0; a['q3'] = 0; a['basssum'] = 0; a['decay_g'] = 0; a['sample2'] = 0;",
  "frame_eqs_str": "a['basstime']=(a['basstime']+(a['bass']*0.03)); a['q1']=(a['basstime']*4); a['basstime']=((Math.abs(below(a['basstime'], 1000))>0.00001)?(1000):(a['basstime'])); a['basstime']=(a['basstime']+(a['bass_att']*0.03)); a['vol']=pow(((a['bass']+a['mid'])+a['treb']), 2); a['basssum']=a['vol']; a['stickybit']=mod(a['time'],2); a['volavg']=(a['volavg']+(a['vol']*equal(a['stickybit'], 1))); a['sample1']=(a['sample1']+equal(a['stickybit'], 1)); a['volavg2']=(a['volavg2']+(a['vol']*equal(a['stickybit'], 0))); a['sample2']=(a['sample2']+equal(a['stickybit'], 0)); a['edge']=bnot(equal(a['bit2'], a['stickybit'])); a['volavg']=(a['volavg']-((a['volavg']*a['edge'])*a['stickybit'])); a['volavg2']=(a['volavg2']-((a['volavg2']*a['edge'])*equal(a['stickybit'], 0))); a['sample1']=(a['sample1']-((a['sample1']*a['edge'])*a['stickybit'])); a['sample2']=(a['sample2']-((a['sample2']*a['edge'])*equal(a['stickybit'], 0))); a['diff']=((Math.abs(equal(a['stickybit'], 1))>0.00001)?(div(a['basssum'],div(a['volavg2'],a['sample2']))):(0)); a['diff']=((Math.abs(equal(a['stickybit'], 0))>0.00001)?(div(a['basssum'],div(a['volavg'],a['sample1']))):(a['diff'])); a['q3']=a['diff']; a['bit2']=mod(a['time'],2); a['difftime']=(a['difftime']+(a['diff']*0.03)); a['difftime']=mod(a['difftime'],125.66370614359172); a['q2']=a['difftime']; a['mv_a']=above(a['diff'], 10); a['q4']=((Math.abs(above(a['diff'], 10))>0.00001)?(Math.min(((a['diff']-10)*0.06), 1)):(0)); a['q4']=(a['q4']*a['q4']);",
  "pixel_eqs_str": "a['zoom']=(1+((0.05*a['q3'])*a['rad'])); a['decay_r']=((((0.2*a['rad'])*Math.sin((a['q2']*0.35)))+0.85)+(0.1*Math.sin(a['q2']))); a['decay_g']=((((0.2*a['rad'])*Math.sin((a['q2']*0.5)))+0.85)+(0.1*Math.sin((0.7*a['q2'])))); a['decay_b']=((((0.2*a['rad'])*Math.sin((a['q2']*0.4)))+0.85)+(0.1*Math.sin((0.8*a['q2'])))); a['rot']=0;",
  "baseVals": {
    "rating": 5,
    "decay": 0.5,
    "echo_zoom": 1,
    "echo_alpha": 0.5,
    "echo_orient": 3,
    "wrap": 0,
    "darken_center": 1,
    "solarize": 1,
    "wave_a": 0.001,
    "zoom": 0.97,
    "rot": -6.27999,
    "warp": 0.00052,
    "wave_r": 0,
    "wave_g": 0,
    "wave_b": 0,
    "ob_r": 1,
    "ob_g": 1,
    "ob_b": 1,
    "mv_r": 0.8,
    "mv_a": 0
  },
  "warp": "shader_body {\n  vec2 d = texsize.zw;\n  vec3 deltax = (texture(sampler_main, uv + vec2(d.x, 0.0)).xyz\n               + texture(sampler_main, uv - vec2(d.x, 0.0)).xyz) * 0.5;\n  vec3 deltay = (texture(sampler_main, uv + vec2(0.0, d.y)).xyz\n               + texture(sampler_main, uv - vec2(0.0, d.y)).xyz) * 0.5;\n  ret = deltax + deltay\n      - texture(sampler_main, (uv - vec2(0.5)) * 0.9 + vec2(0.5)).xyz;\n  ret -= 0.4;\n}",
  "comp": "shader_body {\n  vec2 uv_echo = vec2(1.0) - uv;\n  vec2 ca_offset = (uv - vec2(0.5)) * (0.03 * q4);\n  vec3 col_r = (texture(sampler_main, uv + ca_offset).xyz\n              + texture(sampler_main, uv_echo - ca_offset).xyz) * 0.5;\n  vec3 col_g = (texture(sampler_main, uv).xyz\n              + texture(sampler_main, uv_echo).xyz) * 0.5;\n  vec3 col_b = (texture(sampler_main, uv - ca_offset).xyz\n              + texture(sampler_main, uv_echo + ca_offset).xyz) * 0.5;\n  ret = vec3(col_r.r, col_g.g, col_b.b);\n  ret *= 2.0;\n  ret += texture(sampler_blur3, uv).xyz * 2.0;\n  ret += texture(sampler_blur3, uv_echo).xyz * 2.0;\n}"
};

export default preset;
