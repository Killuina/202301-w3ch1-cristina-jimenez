import type Character from "../Character/Character";
import Component from "../Component/Component";

class CardComponent extends Component {
  character;
  constructor(parentElement: Element, character: Character) {
    super(parentElement, "div", "card character__card");
    parentElement.appendChild(this.element);
    this.character = character;
    this.render();
  }

  render() {
    this.element.innerHTML = `<img src="${this.character.characterData.imageSource}" alt="Character's Name and family" class="character__picture card-img-top" />`;
  }
}
export default CardComponent;
