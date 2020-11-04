package es.manolo.litelement.views.about;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@Route(value = "about")
@PageTitle("About")
@JsModule("./views/about/about-view.ts")
@Tag("about-view")
public class AboutView extends LitTemplate {

    // This is the Java companion file of a design
    // You can find the design file in /frontend/src/views/views/about/about-view.js
    // The design can be easily edited by using Vaadin Designer (vaadin.com/designer)

    public AboutView() {
    }
}
