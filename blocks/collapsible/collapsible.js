export default function decorate(block) {
  Array.from(block.querySelectorAll('h2')).forEach((h2, i) => {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'callapsible';
    radio.id = `h${i}`;
    h2.after(radio);
    const label = document.createElement('label');
    label.htmlFor = radio.id;
    label.append(h2);
    radio.after(label);
  });
  document.getElementById('h0').checked = true;
}
