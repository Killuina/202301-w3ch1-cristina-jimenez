import type Character from "../Character/Character";
import Component from "../Component/Component";

class CardBody extends Component {
  character;
  constructor(parentElement: Element, character: Character) {
    super(parentElement, "div", "card-body");
    parentElement.appendChild(this.element);
    this.character = character;
    this.render();
  }

  render() {
    this.element.innerHTML = `
            <h2 class="character__name card-title h4">${this.character.characterData.name} ${this.character.characterData.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age: ${this.character.characterData.age}yrs</li>
                <li>
                  State:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>`;
  }
}
export default CardBody;
