import '../styles/index.pcss';
import { html, render } from 'lit-html';

const myTemplate = (name: string) =>
	html`<h1 class="text-red-500">Hello ${name}</h1>`;

render(myTemplate('World'), document.querySelector('#root') as HTMLElement);
