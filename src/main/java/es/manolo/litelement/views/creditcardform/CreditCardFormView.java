package es.manolo.litelement.views.creditcardform;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the credit-card-form-view template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Route(value = "credit-card-form")
@PageTitle("Credit Card Form")
@JsModule("./views/creditcardform/credit-card-form-view.js")
@Tag("credit-card-form-view")
public class CreditCardFormView extends PolymerTemplate<TemplateModel> {

    @Id("creditCardNumber")
    private TextField creditCardNumber;
    @Id("cardholderName")
    private TextField cardholderName;
    @Id("csc")
    private PasswordField csc;
    @Id("expirationMonth")
    private Select<Integer> expirationMonth;
    @Id("expirationYear")
    private Select<Integer> expirationYear;
    @Id("submit")
    private Button submit;
    @Id("cancel")
    private Button cancel;

    public CreditCardFormView() {
        expirationMonth.setItems(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
        expirationYear.setItems(20, 21, 22, 23, 24, 25);

        cancel.addClickListener(e -> {
            Notification.show("Not implemented");
        });
        submit.addClickListener(e -> {
            Notification.show("Not implemented");
        });
    }

}
