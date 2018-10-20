// Author @patriciogv - 2015
// Title: Mosaic

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random (vec2 st) { 
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))*43758.5453123);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy; 
    st *= (fract(sin(u_time * 5.0)) * u_time);
    vec2 ipos = floor(st);
    vec2 fpos = fract(st);

    // Assign a random value based on the integer coord
    vec3 color = vec3(random( ipos )); 

    // Uncomment to see the subdivided grid
    color = vec3(tan(fpos + u_time),0.0);

    gl_FragColor = vec4(color,1.0);
}
