#version 300 es

precision mediump float;

in vec3 frag_pos;
in vec3 frag_normal;

uniform vec3 light_ambient;
uniform vec3 light_position;
uniform vec3 light_color;
uniform vec3 camera_position;
uniform vec3 material_color;      // Ka and Kd
uniform vec3 material_specular;   // Ks
uniform float material_shininess; // n

out vec4 FragColor;

void main() {
    vec3 ambient = light_ambient * material_color;
    vec3 light_vector = normalize(light_position-frag_pos);
    vec3 diffuse = light_color * material_color * dot(frag_normal, light_vector);
    
    vec3 view = normalize(camera_position - frag_pos);
    // vec3 rdotv = dot(normalize(2.0*dot(frag_normal, light_vector)*frag_normal)-light_vector, view);
    // vec3 specular = light_color * material_specular * pow(rdotv, material_shininess);

    vec3 specular = light_color * pow(dot(normalize((2.0*dot(frag_normal, normalize(light_position - frag_pos))*frag_normal)-normalize(light_position - frag_pos)), normalize(camera_position - frag_pos)), material_shininess) ;
    FragColor = vec4(ambient + diffuse + specular, 1.0);
}
