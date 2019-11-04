class MensagemView extends View {
    update(model) {
        super.update(model);
    }
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
