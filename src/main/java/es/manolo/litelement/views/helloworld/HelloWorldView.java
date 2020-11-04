package es.manolo.litelement.views.helloworld;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;

@Route(value = "hello")
@PageTitle("Hello World")
@JsModule("./views/helloworld/hello-world-view.ts")
@Tag("hello-world-view")
@RouteAlias(value = "")
public class HelloWorldView extends LitTemplate {

    @Id
    private TextField name;

    @Id
    private Button sayHello;

    public HelloWorldView() {
        setId("hello-world-view");
        sayHello.addClickListener( e-> {
            Notification.show("Hello " + name.getValue());
        });
    }
}
