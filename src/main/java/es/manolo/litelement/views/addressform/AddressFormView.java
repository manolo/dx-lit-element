package es.manolo.litelement.views.addressform;

import es.manolo.litelement.data.entity.Address;
import es.manolo.litelement.data.service.AddressService;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

/**
 * A Designer generated component for the address-form-view template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Route(value = "address-form")
@PageTitle("Address Form")
@JsModule("./views/addressform/address-form-view.ts")
@Tag("address-form-view")
public class AddressFormView extends LitTemplate {

    @Id("streetAddress")
    private TextField street;
    @Id("postalCode")
    private TextField postalCode;
    @Id("city")
    private TextField city;
    @Id("state")
    private ComboBox<String> state;
    @Id("country")
    private ComboBox<String> country;
    @Id("save")
    private Button save;
    @Id("cancel")
    private Button cancel;

    private Binder<Address> binder = new Binder<>(Address.class);

    public AddressFormView(AddressService addressService) {
        country.setItems("Country 1", "Country 2", "Country 3");
        state.setItems("State A", "State B", "State C", "State D");

        binder.bindInstanceFields(this);

        clearForm();

        cancel.addClickListener(e -> clearForm());
        save.addClickListener(e -> {
            addressService.update(binder.getBean());
            Notification.show("Address stored.");
            clearForm();
        });
    }

    private void clearForm() {
        this.binder.setBean(new Address());
    }

}
