#version 300 es

precision highp float;

in vec3 vertex_position;
in vec3 vertex_normal;
in vec2 vertex_texcoord;

uniform vec3 light_ambient;
uniform vec3 light_position;
uniform vec3 light_color;
uniform vec3 camera_position;
uniform float material_shininess;
uniform vec2 texture_scale;
uniform mat4 model_matrix;
uniform mat4 view_matrix;
uniform mat4 projection_matrix;

out vec3 ambient;
out vec3 diffuse;
out vec3 specular;
out vec2 frag_texcoord;

void main() {
    gl_Position = projection_matrix * view_matrix * model_matrix * vec4(vertex_position, 1.0);

    vec3 camera = vec3(model_matrix * vec4(vertex_position, 1.0));
    vec3 norm = normalize(mat3(transpose(inverse(model_matrix))) * vertex_normal);

    ambient = light_color * light_ambient;
    
    vec3 L = normalize(light_position - camera);
    float diffuseVec = max(dot(vertex_normal, L), 0.0);
    diffuse = light_color * diffuseVec;
    vec3 R = reflect(-L, vertex_normal);
    vec3 V = normalize(camera_position - camera);
    specular = light_color * pow(max(dot(R, V), 0.0), material_shininess);

    frag_texcoord = vertex_texcoord * texture_scale;
}
