package es.manolo.litelement.views.personform;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.customfield.CustomField;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import es.manolo.litelement.data.entity.Person;
import es.manolo.litelement.data.service.PersonService;

/**
 * A Designer generated component for the person-form-view template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Route(value = "person-form")
@PageTitle("Person Form")
@JsModule("./views/personform/person-form-view.ts")
@Tag("person-form-view")
public class PersonFormView extends LitTemplate {

    @Id("firstName")
    private TextField firstName;
    @Id("lastName")
    private TextField lastName;
    @Id("email")
    private EmailField email;
    @Id("occupation")
    private TextField occupation;
    @Id("birthday")
    private DatePicker dateOfBirth;
    @Id("pnCountryCode")
    private ComboBox<String> countryCode;
    @Id("pnNumber")
    private TextField number;
    @Id("phoneNumber")
    private PhoneNumberField phone;

    @Id("save")
    private Button save;
    @Id("cancel")
    private Button cancel;

    private Binder<Person> binder = new Binder(Person.class);

    public PersonFormView(PersonService personService) {
        countryCode.setItems("+354", "+91", "+62", "+98", "+964", "+353",
                "+44", "+972", "+39", "+225");
        countryCode.addCustomValueSetListener(
                e -> countryCode.setValue(e.getDetail()));

        phone.setForm(this);

        binder.bindInstanceFields(this);
        clearForm();

        cancel.addClickListener(e -> clearForm());
        save.addClickListener(e -> {
            personService.update(binder.getBean());
            Notification.show("Person details stored.");
            clearForm();
        });
    }

    private void clearForm() {
        binder.setBean(new Person());
    }

    private static class PhoneNumberField extends CustomField<String> {
        private PersonFormView form;

        @Override
        protected String generateModelValue() {
            if (getCountryCode().getValue() != null && getNumber().getValue() != null) {
                return getCountryCode().getValue() + " " + getNumber().getValue();
            }
            return "";
        }

        @Override
        protected void setPresentationValue(String phoneNumber) {
            String[] parts = phoneNumber != null ? phoneNumber.split(" ", 2)
                    : new String[0];
            if (parts.length == 1) {
                getCountryCode().clear();
                getNumber().setValue(parts[0]);
            } else if (parts.length == 2) {
                getCountryCode().setValue(parts[0]);
                getNumber().setValue(parts[1]);
            } else {
                getCountryCode().clear();
                getNumber().clear();
            }
        }

        public void setForm(PersonFormView form) {
            this.form = form;
        }

        private TextField getNumber() {
            return form.number;
        }

        private ComboBox<String> getCountryCode() {
            return form.countryCode;
        }
    }

}
