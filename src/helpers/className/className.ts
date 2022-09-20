type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods,
    additional: string[]
): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([cls, value]) => Boolean(true))
            .map(([cls, value]) => cls),
    ].join(' ');
}

classNames('remove-btn', { hovered: true, selectable: true, red: false }, [
    'pdg',
]);
