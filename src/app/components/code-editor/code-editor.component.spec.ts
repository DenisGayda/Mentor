import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeEditorComponent } from './code-editor.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';

describe('CodeEditorComponent', () => {
    let component: CodeEditorComponent;
    let fixture: ComponentFixture<CodeEditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MonacoEditorModule.forRoot(),
                FormsModule,
            ],
            declarations: [ CodeEditorComponent ],
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CodeEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
