

### File Structure:
This project uses the file-structure laid out in [this post](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1#.bmoijc3qs) and follows these rules:
  - A component can define nested components or services. It cannot use or define a scene.
  - A scene can define nested components, scenes or services.
  - A service can define nested services. It cannot use or define a component or a scene.
  - Nested entities can only use other entities that are defined by a parent entity.

### Credits:
  - the Visualizer component is taken from Joel Auterson's phenomenal project, kajero ( https://github.com/JoelOtter/kajero )
