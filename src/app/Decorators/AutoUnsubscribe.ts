export function AutoUnsubscribe(blackList: string[] = []): Function {
    return (constructor: Function): void  => {
        const original = constructor.prototype.ngOnDestroy;

        constructor.prototype.ngOnDestroy = function(): void {
            // tslint:disable:no-invalid-this
            for (const prop of Object.keys(this)) {
                const property = this[ prop ];

                if (!blackList.includes(prop) && property && (typeof property.unsubscribe === 'function')) {
                    property.unsubscribe();
                }
            }
            if (original && typeof original === 'function') {
                original.apply(this, arguments);
            }
        };
    };

}
