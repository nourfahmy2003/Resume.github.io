import ScrollStack, { ScrollStackItem } from './ScrollStack.jsx';

const Experience = () => (
  <section className="experience-section">
    <h2 className="text-2xl font-bold text-center my-8">Professional Experience</h2>
    <ScrollStack className="h-[200vh] md:h-[220vh] lg:h-[260vh]">
      <ScrollStackItem><h3>Lead Developer</h3><p>Storelx, 2023–Present…</p></ScrollStackItem>
      <ScrollStackItem><h3>Data Science Intern</h3><p>Union Group FZCO…</p></ScrollStackItem>
      <ScrollStackItem><h3>Full-Stack Intern</h3><p>Hoopoe Digital…</p></ScrollStackItem>
      <ScrollStackItem><h3>Data Science Intern</h3><p>Union Group…</p></ScrollStackItem>
    </ScrollStack>
  </section>
);

export default Experience;
