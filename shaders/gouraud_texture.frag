#version 300 es

precision mediump float;

in vec3 ambient;
in vec3 diffuse;
in vec3 specular;
in vec2 frag_texcoord;

uniform vec3 material_color;    // Ka and Kd
uniform vec3 material_specular; // Ks
uniform sampler2D image;        // use in conjunction with Ka and Kd

out vec4 FragColor;

void main() {
    vec4 texture = texture(image, frag_texcoord);
    vec3 ambient_light = ambient * material_color;
    vec3 diffuse_light = diffuse * material_color;
    vec3 specular_light = specular * material_specular;
    vec4 result = vec4((ambient_light + diffuse_light + specular_light), 1.0); //formula in notes

    FragColor = texture * result;
}
