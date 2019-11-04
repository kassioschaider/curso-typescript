class MensagemView extends View<string>{

    update(model: string): void {

        super.update(model);
    }

    template(model: string): string {

        return `<p class="alert alert-info">${model}</p>`;
    }
}
