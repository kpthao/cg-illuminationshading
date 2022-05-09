#version 300 es

precision mediump float;

in vec3 frag_pos;
in vec3 frag_normal;
in vec2 frag_texcoord;

uniform vec3 light_ambient;
uniform vec3 light_position;
uniform vec3 light_color;
uniform vec3 camera_position;
uniform vec3 material_color;      // Ka and Kd
uniform vec3 material_specular;   // Ks
uniform float material_shininess; // n
uniform sampler2D image;          // use in conjunction with Ka and Kd

out vec4 FragColor;

void main() {
    vec4 texture = texture(image, frag_texcoord);

    vec3 ambient = light_ambient * material_color;
    vec3 light_vector = normalize(light_position-frag_pos);
    vec3 diffuse = light_color * material_color * max(dot(frag_normal, light_vector), 0.0);
    
    vec3 view = normalize(camera_position - frag_pos);


    vec3 R = reflect(-light_vector, frag_normal);
    float specularCalc = max(dot(R, view), 0.0);

    vec3 specular = light_color * pow(specularCalc, material_shininess);

    
    FragColor = vec4(ambient + diffuse + specular, 1.0) * texture;
}
