import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnUrl:string;

  constructor(){
    this.jbtHeading = "Hello World";
    this.jbtText = "Glossier humblebrag flannel mumblecore wayfarers. Fanny pack ethical cardigan, beard aesthetic keffiyeh vape selfies craft beer you probably haven't heard of them enamel pin pok pok. Kinfolk shoreditch umami swag, hot chicken crucifix vinyl microdosing man braid trust fund humblebrag. Blog fingerstache DIY, literally jean shorts iceland 3 wolf moon cliche flannel. Letterpress enamel pin blog, vinyl quinoa freegan tacos normcore raclette polaroid chillwave kickstarter celiac kale chips hella. Hoodie copper mug church-key PBR&B. Trust fund poke literally, chambray franzen pug small batch you probably haven't heard of them retro before they sold out stumptown vice whatever sriracha.";
    this.jbtBtnText = "Read More";
    this.jbtBtnUrl = "/about";
  }
}
