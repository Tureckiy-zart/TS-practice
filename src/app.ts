// autobind decorator

function autobind(_: string, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedDescriptor;
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  formElement: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = <HTMLDivElement>document.getElementById("app")!;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.formElement = <HTMLFormElement>importedNode.firstElementChild;
    this.formElement.id = "user-input";
    this.titleInputElement = this.formElement.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.formElement.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.formElement.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  @autobind
  private submitHandler(e: Event): void {
    e.preventDefault();
    console.log(`this,titleInputElement`, this.titleInputElement);
    console.log(`this,titleInputElement.value`, this.titleInputElement.value);
  }

  private configure() {
    this.formElement.addEventListener("submit", this.submitHandler);
    // this.formElement.addEventListener("submit", this.submitHandler.bind(this));
  }
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.formElement);
  }
}

const prjInput = new ProjectInput();
