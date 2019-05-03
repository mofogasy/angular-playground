import { Component } from '@angular/core';
import { provideWorkbenchPopup, WorkbenchPopup, WorkbenchRouter } from '@scion/workbench-application.angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact, ContactService } from '../contact.service';
import { noop } from 'rxjs';
import { UUID } from '@scion/workbench-application.core';

const FIRSTNAME = 'firstname';
const LASTNAME = 'lastname';

@Component({
  selector: 'app-contact-new-popup',
  templateUrl: './contact-new-popup.component.html',
  styleUrls: ['./contact-new-popup.component.scss'],
  providers: [
    provideWorkbenchPopup(ContactNewPopupComponent)
  ]
})
export class ContactNewPopupComponent {

  public readonly FIRSTNAME = FIRSTNAME;
  public readonly LASTNAME = LASTNAME;

  public form: FormGroup;

  constructor(private _popup: WorkbenchPopup,
              private _contactService: ContactService,
              private _router: WorkbenchRouter,
              formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      [FIRSTNAME]: formBuilder.control('', Validators.required),
      [LASTNAME]: formBuilder.control('', Validators.required),
    });
  }

  public onOk(): void {
    const contact: Contact = {
      id: UUID.randomUUID(),
      firstname: this.form.get(FIRSTNAME).value,
      lastname: this.form.get(LASTNAME).value,
    };

    this._contactService.create$(contact).subscribe(noop, noop, () => {
      this._router.navigate({entity: 'contact', id: contact.id});
      this._popup.close();
    });
  }
}
