package es.manolo.litelement.views.empty;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@Route(value = "empty")
@PageTitle("Empty")
@JsModule("./views/empty/empty-view.ts")
@Tag("empty-view")
public class EmptyView extends LitTemplate {

    // This is the Java companion file of a design
    // You can find the design file in /frontend/src/views/views/empty/empty-view.js
    // The design can be easily edited by using Vaadin Designer (vaadin.com/designer)

    public EmptyView() {
    }
}
