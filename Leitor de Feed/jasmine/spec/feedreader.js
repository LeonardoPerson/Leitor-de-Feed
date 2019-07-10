/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        //Esse teste garante que a variável allFeeds está definida e não está vazia
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        //Esse teste verifica se existe URL válida pelas propriedades da variável allFeeds
        it('URL defined', function(){
            let x;
            for(x = 0; x < allFeeds.length; x++){
                expect(allFeeds[x].url.trim()).not.toBe('');
            }
        });
        //Esse teste verifica se existe nome válido pelas propriedades da variável allFeeds
        it('name defined', function(){
            let y;
            for(y = 0; y < allFeeds.length; y++){
                expect(allFeeds[y].name.trim()).not.toBe('');
            }
         });
    });


    describe('The menu', function(){
        //Esse teste garante que o menu esteja oculto por padrão
        it('Menu oculto', function(){
            let menuOculto = document.body;
            expect(menuOculto).toBeDefined();
            expect(menuOculto).toHaveClass('menu-hidden');
        });
        //Esse teste garante que o menu torne-se visível e oculto quando é acionado
        it('Click no menu', function(){
            let exibeMenu = $('.menu-icon-link').click();
            let ocultaMenu = $('.menu-icon-link').click();
            expect(exibeMenu).toBeDefined();
            expect(ocultaMenu).toBeDefined();
            expect(exibeMenu.length).toBe(1);
            expect(ocultaMenu.length).toBe(1);
        });

    });

    describe('Initial Entries', function(){
        //Teste para garantir que exista ao menos um link definido após a função loadFeed() executar seu trabalho
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        it('link existente', (function(){
            let link = $('.tpl-entry');
            expect(link).toBeDefined();
            expect(link.length).toBeGreaterThan(0);
            console.log(link.length);
        }));
    });

    describe('Nova seleção de feed', function(){
        //Teste para garantir que quando um novo feed é carregado, o conteúdo realmente mudará
        //let id = 0;
        let firstFeed;
        let secondFeed;
        beforeEach(function(done){
            loadFeed(1, function(){
                    firstFeed = $('.feed');
                loadFeed(2, function(){
                    secondFeed = $('.feed');
                    done();
                });
            });
        });
        it('Carregamento de novo feed', function(){
            expect(secondFeed).not.toBe(firstFeed);
        });
    });
}());
