package es.manolo.litelement.views.cardlist;

import java.util.Arrays;
import java.util.List;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.router.AfterNavigationEvent;
import com.vaadin.flow.router.AfterNavigationObserver;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@Route(value = "card-list")
@PageTitle("Card List")
@JsModule("./views/cardlist/card-list-view.ts")
@Tag("card-list-view")
public class CardListView extends LitTemplate implements
        AfterNavigationObserver {

    // This is the Java companion file of a design
    // You can find the design file in /frontend/src/views/views/cardlist/card-list-view.js
    // The design can be easily edited by using Vaadin Designer (vaadin.com/designer)

    public CardListView() {
    }

    @Override
    public void afterNavigation(AfterNavigationEvent event) {

        // Set some data when this view is displayed.
        List<Person> persons = Arrays.asList( //
        createPerson("https://randomuser.me/api/portraits/men/42.jpg", "John Smith", "May 8",
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                "1K", "500", "20"),
        createPerson("https://randomuser.me/api/portraits/women/42.jpg", "Abagail Libbie", "May 3",
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                "1K", "500", "20"),
        createPerson("https://randomuser.me/api/portraits/men/24.jpg", "Alberto Raya", "May 3",

                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                "1K", "500", "20"),
        createPerson("https://randomuser.me/api/portraits/women/24.jpg", "Emmy Elsner", "Apr 22",

                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                "1K", "500", "20"),
        createPerson("https://randomuser.me/api/portraits/men/76.jpg", "Alf Huncoot", "Apr 21",

                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                "1K", "500", "20"),
        createPerson("https://randomuser.me/api/portraits/women/76.jpg", "Lidmila Vilensky", "Apr 17",

                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                "1K", "500", "20"),
        createPerson("https://randomuser.me/api/portraits/men/94.jpg", "Jarrett Cawsey", "Apr 17",
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                "1K", "500", "20"),
        createPerson("https://randomuser.me/api/portraits/women/94.jpg", "Tania Perfilyeva", "Mar 8",

                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                "1K", "500", "20"),
        createPerson("https://randomuser.me/api/portraits/men/16.jpg", "Ivan Polo", "Mar 5",

                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                "1K", "500", "20"),
        createPerson("https://randomuser.me/api/portraits/women/16.jpg", "Emelda Scandroot", "Mar 5",

                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                "1K", "500", "20"),
        createPerson("https://randomuser.me/api/portraits/men/67.jpg", "Marcos Sá", "Mar 4",

                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                "1K", "500", "20"),
        createPerson("https://randomuser.me/api/portraits/women/67.jpg", "Jacqueline Asong", "Mar 2",

                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                "1K", "500", "20")

      );

     this.getElement().setPropertyList("items", persons);
    }

    private static Person createPerson(String image, String name, String date, String post, String likes,
            String comments, String shares) {
        Person p = new Person();
        p.setImage(image);
        p.setName(name);
        p.setDate(date);
        p.setPost(post);
        p.setLikes(likes);
        p.setComments(comments);
        p.setShares(shares);

        return p;
    }

}
