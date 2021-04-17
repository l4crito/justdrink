export function highlight(item: any) {
    item.highlight = true;
    setTimeout(() => {
        item.highlight = false;
    }, 400);
}