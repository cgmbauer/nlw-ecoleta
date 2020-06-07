# Ecoleta - Next Level Week

This page aims to help people find waste collect points, making a link between them and the organizations responsibles for collecting the residues.    
Web application made during Rocketseat's Next Level Week.

## Built With

- HTML5;

- CSS3;

- Vanilla JS;

- [Nodejs v.12.18.0](https://nodejs.org/en/);

- [Express v.4.17.1](https://expressjs.com/pt-br/);

- [SQLite v.4.2.0](https://www.sqlite.org/index.html);

- [Nunjucks v.3.2.1](https://github.com/mozilla/nunjucks);

- [IBGE API](https://servicodados.ibge.gov.br/api/docs).

## How it works?

This webpage use Nunjucks to make the content dynamic as the user interacts with it, pulling and pushing data to a SQLite database and updating the website accordingly.  

It also use an API from the IBGE, which pulls the names of all citys and its respectives states located in Brazil.  

Some javascript code were made to fetch the API data, treat it, and display it on the webpage, as the user interacts.

**The website have 4 main pages:**  

- Home: Where the user have a first glance at the website and can have acess to the search page and the register page;

- Search Page: Where the user can search for registered collect points using the city as an argument;

- Search Results: Where user can see the collect points registered;

- Create-Point Page: Where you can register a collect point, adding the entity name, address, items to be collected (cardboards, battery, oils, etc.).

**It also have 2 "intermediate" pages:**  

- Point-Created Page: Where the user will be informed, after registered a point, if the register was a success, and after that be redirected to the Main Page;

- Error Page: If something goes wrong while registering a collect point, the user will see this page and will be redirected to the Create-Point Page.

## Acknowledgments

- [Rocketseat](https://rocketseat.com.br/) for the lessons and opportunity;

- [IBGE](https://servicodados.ibge.gov.br/api/docs) for the API.

## Pictures
- Main Page

![Main Page](https://github.com/cgmbauer/nlw-ecoleta/blob/master/public/assets/pages/1.%20main_page_desktop.png)

- Create Point

![Create Point](https://github.com/cgmbauer/nlw-ecoleta/blob/master/public/assets/pages/2.%20create_point_desktop.png)

- Create Point filled

![Create Point filled](https://github.com/cgmbauer/nlw-ecoleta/blob/master/public/assets/pages/3.%20create_point_filled_desktop.png)

- Point Created

![Point Created](https://github.com/cgmbauer/nlw-ecoleta/blob/master/public/assets/pages/4.%20point_created_page_desktop.png)

- Search

![Search](https://github.com/cgmbauer/nlw-ecoleta/blob/master/public/assets/pages/5.%20search_page_desktop.png)

- Search Results

![Search Results](https://github.com/cgmbauer/nlw-ecoleta/blob/master/public/assets/pages/6.%20search_results_desktop.png)

