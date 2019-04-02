import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationPageComponent } from './authorization.component';

describe('AuthorizationComponent', () => {
    let component: AuthorizationPageComponent;
    let fixture: ComponentFixture<AuthorizationPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AuthorizationPageComponent ],
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorizationPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
